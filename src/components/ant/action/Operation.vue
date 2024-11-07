<template>
  <div class="operation-sys">
    <a-dropdown placement="bottomRight" arrow>
      <a-button><i class="fa-solid fa-list-ul"></i></a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="(item, index) in faceMenu" :key="index">
            <div :class="item.classPath" @click="$emit(item.emits, faceData)">
              <span><i :class="item.icon"></i></span>{{ $t(item.title) }}
            </div>
          </a-menu-item>
          <!-- <a-menu-item>
            <div class="operation-content" @click="sendOpt">
              <span><i class="fa-solid fa-comment-sms"></i></span>Gửi mã xác
              thực
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="operation-content" @click="editItems">
              <span><i class="fa-solid fa-pen-to-square"></i></span>Sửa thông
              tin
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="operation-content" @click="userLock">
              <span><i class="fa-solid fa-lock"></i></span>Khóa tài khoản
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="operation-content" @click="changeNewPass">
              <span><i class="fa-solid fa-cash-register"></i></span>Đổi mật khẩu
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="operation-content" @click="deleteItems">
              <span><i class="fa-regular fa-trash-can"></i></span>Xóa tài khoản
            </div>
          </a-menu-item> -->
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
interface props {
  faceData: any;
  faceMenu: any;
}
const propsData = withDefaults(defineProps<props>(), {
  faceData: null,
  faceMenu: [],
});
</script>
<style scoped>
.operation-content span {
  padding-right: 5px;
}

.operation-content {
  font-size: 1rem;
}
</style>
