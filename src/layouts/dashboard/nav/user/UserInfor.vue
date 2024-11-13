<template>
  <div class="menu-nav">
    <el-dropdown>
      <span class="el-dropdown-link" @click="inform">
        <el-link class="user-name">{{ name }}</el-link>
        <el-avatar size="small" :src="url" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="inform">
            <i class="fa-solid fa-user-tie"></i> Thông tin người sử dụng
          </el-dropdown-item>
          <el-dropdown-item @click="changePassword">
            <i class="fa-solid fa-user-shield"></i> Thay đổi mật khẩu
          </el-dropdown-item>
          <el-dropdown-item @click="logOut">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch, computed } from "vue";
import store from "@/store/index";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";
import { USER, USER_LOGINED } from "@/const/cookie";
import commons from "@/utils/Common";
const { cookies } = useCookies();
const router = useRouter();
const name = ref("");
const url = ref("");
const logOut = async () => {
  commons.logOut();
  router.push({ path: "/sign-in" });
};
const inform = async () => {
  router.push({ path: "/inform" });
};
const urlAvatar = computed(() => {
  return store.getters.isUrlAvatar;
});
const changePassword = async () => {
  router.push({ path: "/change-password" });
};
onMounted(() => {
  let user = cookies.get(USER);
  if (user != null && user != undefined) {
    name.value = user.name;
    url.value = user.urlAvatar;
  }
});

watch(urlAvatar, (newValue, oldValue) => {
  url.value = JSON.parse(JSON.stringify(newValue));
});
</script>

<style>
span.lable {
  align-self: flex-end;
  padding-left: 5px;
}

.user-name {
  padding-bottom: 10px !important;
  padding-right: 5px !important;
  background: none !important;
}
</style>
