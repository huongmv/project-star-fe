<template>
  <div class="limiter">
    <div class="container-login">
      <div class="wrap-login">
        <div class="login-form">
          <v-card class="py-8 px-6 text-center mx-auto ma-4" elevation="12">
            <div>
              <!-- <el-avatar :size="100" src="https://cloud.ha-soft.vn/uploads/3432432423412/20242/logo-home-1708622499184.png" @click="goHome" /> -->
            </div>
            <el-form
              ref="loginFormRef"
              class=""
              :rules="rules"
              :size="formSize"
              :model="loginForm"
              :label-position="labelPosition"
            >
              <!-- <div class="title-modal text-start">Đăng nhập</div> -->
              <span class="title-form p-b-43">
                {{ $t("text.login") }}
              </span>
              <el-form-item
                prop="name"
                :label="$t('text.userName')"
                :rules="[
                  {
                    required: true,
                    message: t('text.inputUser'),
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="loginForm.name"
                  :placeholder="$t('text.phone')"
                  maxlength="150"
                />
              </el-form-item>
              <el-form-item
                class="mt-3"
                prop="pas"
                :label="$t('text.password')"
                :rules="[
                  {
                    required: true,
                    message: t('text.inputPass'),
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="loginForm.pas"
                  :placeholder="$t('text.validPassword')"
                  type="password"
                  maxlength="150"
                  @keyup.enter="submitForm(loginFormRef)"
                />
              </el-form-item>
              <div class="d-flex justify-content-end forget">
                <a @click="fogotForm">{{ $t("text.forgot") }}</a>
              </div>

              <div class="mt-3" style="width: 80%; margin: 0 auto">
                <el-button class="btn-submit" @click="submitForm(loginFormRef)">
                  {{ $t("text.login") }}
                </el-button>
              </div>

              <div class="d-flex justify-content-center confirm">
                {{ $t("text.haveAccount") }}&ensp;
                <a class="" @click="registerForm">{{ $t("text.register") }}</a>
              </div>
              <div @click="loginGoogle">
                <!-- <GoogleLogin :callback="callback"/> -->
                login
              </div>
            </el-form>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { watch, reactive, ref, onMounted, computed } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import {
  USER,
  TOKEN,
  USER_LOGINED,
  FULL_NAME,
  USER_NUMBER_RESEND,
} from "@/const/cookie";
import { localhostPost, apiPost, apiGetNoParam } from "@/api/index";
import { USER_V1_LOGIN } from "@/api/const/users";
import store from "@/store/index";
import { useCookies } from "vue3-cookies";
import commons from "@/utils/Common";
import { LOAD_LIB_JS } from "@/const/localStorage";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { googleTokenLogin } from "vue3-google-login";
const loginGoogle = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response);
  });
};
const emits = defineEmits(["register", "forgot"]);
const { t } = useI18n();
const formSize = ref("default");
const { cookies } = useCookies();
const loginFormRef = ref<FormInstance>();
const router = useRouter();

const labelPosition = ref("top");
const navbarMobile = ref(false);
const isNotLogin = ref(true);
const isLogin = ref(false);
const loginForm = reactive({
  name: "",
  pas: "",
});

const formRegister = reactive({
  phone: "",
});
const rules = reactive<FormRules>({
  name: [
    { message: "Bạn chưa nhập Tài khoản", trigger: "blur" },
    { min: 3, max: 15, message: "Độ dài từ 3 đến 15 ký tự", trigger: "blur" },
  ],
  pas: [
    {
      message: "Bạn chưa nhập mật khẩu",
      trigger: "blur",
    },
  ],
});

onMounted(async () => {
  checklogin();
});

const buildingChange = computed(() => {
  return store.getters.isBuildingChange;
});
watch(buildingChange, async (newValue, oldValue) => {
  await checklogin();
});
const checklogin = () => {
  let user = cookies.get(USER_LOGINED);
  if (user) {
    isLogin.value = true;
    isNotLogin.value = false;
  }
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const dataRequest = {
        userName: loginForm.name,
        password: loginForm.pas,
      };
      await apiPost(USER_V1_LOGIN, dataRequest).then((res) => {
        let response: any = res;
        if (response.data.httpStatus == 200) {
          let dataLogin = response.data.data;
          checkUser(dataLogin);
        } else {
          commons.showNotificationError(response.data.errorMessage);
        }
      });
    }
  });
};

const checkUser = (dataLogin: any) => {
  commons.setLoadLogin();
  commons.setUserInform(dataLogin);
  cookies.set(TOKEN, JSON.stringify(dataLogin.accessToken));
  cookies.set(FULL_NAME, JSON.stringify(dataLogin.name));
  cookies.set(USER, JSON.stringify(dataLogin));
  cookies.set("status", JSON.stringify(dataLogin.status));
  cookies.set(USER_LOGINED, "true");
  store.dispatch("setLoggedIn", true);
  localStorage.setItem(USER, store.getters.isLoggedIn);
  let checkLoadLib = localStorage.getItem(LOAD_LIB_JS);
  let isLoginer = commons.getLcUserIsLogin();
  checklogin();
  window.location.reload();
  if (checkLoadLib != "1") {
    localStorage.setItem(LOAD_LIB_JS, "1");
    // router.push({ path: "./" });
    goBack();
  } else {
    // router.push({ path: "./" });
    goBack();
  }
};

const registerForm = () => {
  emits("register", true);
};

const fogotForm = () => {
  emits("forgot", true);
};
const goBack = () => {
  router.go(-1);
};
</script>
<style scoped src="./login.css" lang="css"></style>
