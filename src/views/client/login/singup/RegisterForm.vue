<template>
    <div class="register-form  mb-40">
        <div class="mainDiv">
            <div class="cardStyle">
                <v-card class="py-8 px-6 text-center mx-auto ma-4 card-signup header-solid h-full" elevation="12">
                    <div class="sign-up-gateways">
                        <GoogleRegister></GoogleRegister>
                        <TelegramRegister></TelegramRegister>
                        <!-- <a-button>
                        <img src="images/logos/logo-apple.svg" alt="">
                        </a-button> -->
                        <div>
                        <a-button>
                            <img src="images/logos/Google__G__Logo.svg.png" alt="" />
                        </a-button>
                        </div>
                    </div>
                    <p class="text-center my-25 font-semibold text-muted">Or</p>
                    <div name="signupForm" id="signupForm">
                        <!-- <h2 class="formTitle">
                            Đăng ký tài khoản
                        </h2> -->
                        <el-form ref="registerFormRef" :model="formRegister" class="" :size="formSize"
                            :label-position="labelPosition">
                            <div class="row">
                                <el-form-item class="inputDiv" prop="name" label="Họ và Tên" :rules="[
                            {
                                required: true,
                                message: 'Nhập họ và Tên',
                                trigger: 'blur',
                            },
                        ]">
                                    <el-input v-model="formRegister.name" placeholder="Họ và Tên" />
                                </el-form-item>
                            </div>
                            <div class="row">
                                <el-form-item class="inputDiv" prop="phone" label="Tài khoản" :rules="[
                            {
                                required: true,
                                message: 'Nhập số điện thoại',
                                trigger: 'blur',
                            },
                        ]">
                                    <el-input v-model="formRegister.phone" placeholder="Số điện thoại" />
                                </el-form-item>
                            </div>
                            <div class="row">
                                <el-form-item class="inputDiv" prop="email" label="Email" :rules="[
                            {
                                required: true,
                                message: 'Nhập email',
                                trigger: 'blur',
                            },
                            {
                                type: 'email',
                                message: 'Email không đúng (youremail@example.com)',
                                trigger: ['blur', 'change'],
                            },
                        ]">
                                    <el-input v-model="formRegister.email" placeholder="Email" />
                                </el-form-item>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <el-form-item class="inputDiv" prop="password" label="Mật khẩu" :rules="[
                            {
                                required: true,
                                message: 'Nhập mật khẩu',
                                trigger: 'blur',
                            },
                        ]">
                                        <el-input type="password" v-model="formRegister.password"
                                            placeholder="Tối thiểu 8 ký tự" show-password maxlength="50" />
                                    </el-form-item>
                                </div>

                                <div class="col-sm-6">
                                    <el-form-item class="inputDiv" label="Nhập lại mật khẩu" prop="rePassword" :rules="[
                            {
                                required: true,
                                message: 'Nhập lại mật khẩu',
                                trigger: 'blur',
                            },
                        ]">
                                        <el-input type="password" v-model="formRegister.rePassword"
                                            placeholder="Nhập lại mật khẩu" show-password maxlength="50" />
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="row">
                                <el-form-item class="inputDiv" label="Trụ sở công đoàn" required prop="departmentId"
                                    :rules="[
                            {
                                required: true,
                                message: 'Chọn Trụ sở công đoàn',
                                trigger: 'change',
                            },
                        ]">
                                    <el-select filterable v-model="formRegister.departmentId" class="w-100"
                                        placeholder="Chọn Trụ sở công đoàn">
                                        <el-option v-for="item in unionList" :key="item.id" :label="item.name"
                                            :value="item.id" />
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="buttonWrapper">
                                <div @click="registerEmail(registerFormRef)"
                                    class="btn-submit">
                                    <span> {{ $t("text.register") }}</span>
                                </div>
                            </div>
                            <div @click="loginFormVal" class="d-flex justify-content-center confirm">
                                Bạn đã có tài khoản?&ensp;
                                <a class="" @click="loginUser">Đăng nhập</a>
                            </div>
                        </el-form>

                    </div>
                </v-card>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { watch, reactive, ref, onMounted, computed } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import GoogleRegister from "@/views/client/login/singup/GoogleRegister.vue";
import TelegramRegister from "@/views/client/login/singup/TelegramRegister.vue";
import { ElMessage } from 'element-plus'
import {
    USER,
    TOKEN,
    USER_LOGINED,
    FULL_NAME,
    USER_NUMBER_RESEND,
    USER_USERNAME_COOKIE,
    USER_SESSION_ID_COOKIE
} from "@/const/cookie";

import { localhostPost, apiPost, apiGetNoParam } from "@/api/index";
import {
    USER_V1_LOGIN,
    USER_REGISTER,
} from "@/api/const/users";
// import { AREA_GET_ALL } from "@/api/const/area";
// import { UNION_LIST } from "@/api/const/union";
import store from "@/store/index";
import { useCookies } from "vue3-cookies";
import commons from "@/utils/Common";
import { LOAD_LIB_JS } from "@/const/localStorage";
import { useRoute, useRouter } from "vue-router";
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
const formSize = ref("default");
const { cookies } = useCookies();
const router = useRouter();
const loginVal = ref(true);
const registerVal = ref(false);
const emailVal = ref(false);
const labelPosition = ref("top");
const navbarMobile = ref(false);
const isNotLogin = ref(true);
const isLogin = ref(false);
const registerFormRef = ref<FormInstance>()
const unionList = ref([])
const loginForm = reactive({
    name: "",
    pas: "",
});
const forgot = reactive({
    email: "",
});

const formRegister = reactive({
    name: "",
    phone: "",
    email: "",
    password: "",
    rePassword: "",
    gender: 1,
    departmentId: '',
    positionId: 1,
    proCode: '',
    proName: '',
    distCode: '',
    distName: '',
    wardCode: '',
    wardName: '',
    detailAdd: '',
    userIntro: ''
});

onMounted(async () => {
    await checklogin();
    // await getUnion()
    // await getProvince()
});
// const getProvince = async () => {
//     await apiGetNoParam(AREA_GET_ALL).then(res => {
//         let response: any = res
//         let dataRes = response.data.data
//         optionsProvince.value = dataRes
//     })
// }
// const getUnion = async () => {
//     await apiGetNoParam(UNION_LIST).then(res => {
//         let response: any = res
//         let dataRes = response.data.data
//         unionList.value = dataRes
//     })
// }

const buildingChange = computed(() => {
    return store.getters.isBuildingChange;
});
watch(buildingChange, async (newValue, oldValue) => {
    await checklogin();
});
const checklogin = () => {
    let user = cookies.get(USER);
    if (user != null && user != undefined) {
        isLogin.value = true;
        isNotLogin.value = false;
        router.push({ path: "./" });
    }
};
const popupScreen = reactive({
    login: false,
});
const closeLogin = () => {
    popupScreen.login = false;
};
const constSuccess = () => {
    popupScreen.login = false;
};
const logon = () => {
    popupScreen.login = true;
};

const handleSubmit = () => {
    let data = JSON.parse(JSON.stringify(loginForm));
};

const submitForm = async () => {
    const dataRequest = {
        userName: formRegister.phone,
        password: formRegister.password,
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
};

const checkUser = (dataLogin: any) => {
    commons.setLoadLogin()
    commons.setUserInform(dataLogin)
    cookies.set(TOKEN, JSON.stringify(dataLogin.accessToken));
    cookies.set(FULL_NAME, JSON.stringify(dataLogin.name));
    cookies.set(USER, JSON.stringify(dataLogin));
    cookies.set("status", JSON.stringify(dataLogin.status));
    cookies.set(USER_LOGINED, "true");
    store.dispatch("setLoggedIn", true);
    localStorage.setItem(USER, store.getters.isLoggedIn);
    let checkLoadLib = localStorage.getItem(LOAD_LIB_JS);
    let isLoginer = commons.getLcUserIsLogin()
    checklogin();
    router.push({ path: "./" });
};

const registerForm = () => {
    registerVal.value = true;
    emailVal.value = !registerVal.value;
    loginVal.value = !registerVal.value;
    resetFormRegister();
};
const loginFormVal = () => {
    loginVal.value = true;
    registerVal.value = !loginVal.value;
    emailVal.value = !loginVal.value;
    resetFormLogin();
};

const resetFormRegister = () => {
    formRegister.email = "";
    formRegister.password = "";
    formRegister.rePassword = "";
    formRegister.name = "";
    formRegister.phone = "";

};
const resetFormLogin = () => {
    loginForm.name = "";
    loginForm.pas = "";
};
const toggleMobileNav = () => {
    navbarMobile.value = !navbarMobile.value;
};
const navbarClass = computed(() => {
    return {
        "navbar-mobile": navbarMobile.value,
    };
});
const toggleIcon = computed(() => {
    return {
        "fa-bars": !navbarMobile.value,
        "fa-times": navbarMobile.value,
    };
});
const fogotForm = () => {
    emailVal.value = true;
    loginVal.value = !emailVal.value;
    registerVal.value = !emailVal.value;
};

const fogotPassword = async () => {
    let data = JSON.parse(JSON.stringify(forgot));
    // await apiPost(USER_FORGOT_PASSWORD, data).then((res) => {
    //     let response: any = res;

    //     if (response.data.httpStatus == 200) {
    //         let dataRes = response.data.data;
    //         if (dataRes) {
    //             cookies.set(EMAIL_REGISTER_NOTIFICATION, data.email);
    //             emailNotification();
    //         } else {
    //             commons.showNotificationError("Lỗi tìm lại mật khẩu");
    //         }
    //     } else {
    //         commons.showNotificationError(response.data.errorMessage);
    //     }
    // });
};

const registerEmail = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            formRegister.userIntro = commons.getUserIntro()
            let data = JSON.parse(JSON.stringify(formRegister));
            if (formRegister.password != formRegister.rePassword) {
                commons.showNotificationError("Mật khẩu không trùng khớp");
                return false;
            }
            registerUser(data)
        } else {
            return false
        }
    })

};

const registerUser = async (data: any) => {
    await apiPost(USER_REGISTER, data).then((res) => {
        let response: any = res;
        if (response.data.httpStatus == 200) {
            let dataRes = response.data.data;
            if (dataRes) {
                cookies.set(USER_USERNAME_COOKIE, dataRes.userName);
                cookies.set(USER_NUMBER_RESEND, dataRes.optCode);
                cookies.set(USER_SESSION_ID_COOKIE, dataRes.sessionId);
                commons.removeUserIntro()
                // router.push({ path: "/opt" });
                // emailNotification();
                commons.showNotificationSuccess("Đăng ký tài khoản thành công");
                login()
            } else {
                commons.showNotificationError("Lỗi đăng ký tài khoản");
            }
        } else {
            commons.showNotificationError2("Đăng ký tài khoản",response.data.errorMessage);
        }
    });
};


const login = async () => {
    // router.push({ path: "/login" });
    submitForm()

};
const loginUser = async () => {
    router.push({ path: "/login" });
};

const optionsProvince = ref([])
const optionsDistrict = ref([])
const optionsWard = ref([])
const disabledAddress = ref(true)

const active = ref(0)

const next = () => {
    if (active.value++ > 2) active.value = 0
}

</script>

<style lang="css" scoped>
.register-form {
    margin-top: -120px;
}
.card-signup .sign-up-gateways{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-signup .btn-submit:hover {
    cursor: pointer;
 }

.card-signup .btn-submit {
    background: #F89621 !important;
    background-color: #F89621 !important;
    color: #00334d !important;
    padding: 25px 35px !important;
    font-weight: 700;
    font-size: 16px !important;
    margin-bottom: 15px;
}
</style>