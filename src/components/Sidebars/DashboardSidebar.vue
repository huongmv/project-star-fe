<template>
  <!-- Main Sidebar -->
  <a-layout-sider
    collapsible
    class="sider-primary"
    breakpoint="lg"
    collapsed-width="0"
    width="250px"
    :collapsed="sidebarCollapsed"
    @collapse="$emit('toggleSidebar', !sidebarCollapsed)"
    :trigger="null"
    :class="[
      'ant-layout-sider-' + sidebarColor,
      'ant-layout-sider-' + sidebarTheme,
    ]"
    theme="light"
    :style="{ backgroundColor: 'transparent' }"
  >
    <div class="brand">
      <img src="images/logo-ct-black.png" alt="" /> <span>Muse Dashboard</span>
    </div>
    <hr />
    <!-- Sidebar Navigation Menu -->
    <a-menu theme="light">
      <a-menu-item v-for="(item, index) in menuList" :key="index"  :class="item.menuClass">
        <router-link :to="item.linkTo"  :class="item.routerClass">
          <span :class="item.spanClass">
            <div v-html="item.icon">
            </div>
          </span>
          <span class="label">{{ item.linkLabel }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <!-- / Sidebar Navigation Menu -->

    <!-- Sidebar Footer -->
    <div class="aside-footer">
      <div class="footer-box">
        <span class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
              fill="#111827"
            />
            <path
              d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
              fill="#111827"
            />
            <path
              d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
              fill="#111827"
            />
          </svg>
        </span>
        <h6>Need Help?</h6>
        <p>Please check our docs</p>
        <a-button
          type="primary"
          href="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/documentation"
          block
          target="_blank"
        >
          DOCUMENTATION
        </a-button>
      </div>
    </div>
    <!-- / Sidebar Footer -->

    <a-button
      type="primary"
      href="https://www.creative-tim.com/product/muse-vue-ant-design-dashboard-pro"
      block
      target="_blank"
    >
      UPGRADE TO PRO
    </a-button>
  </a-layout-sider>
  <!-- / Main Sidebar -->
</template>

<script lang="ts" setup>
import { ref, onMounted, onUpdated, computed } from "vue";
import { V1_MENU_LIST_ALL } from "@/api/const/menu";
import { apiPost, apiGetNoParam, apiGet } from "@/api/index";
interface props {
  sidebarCollapsed: boolean;
  sidebarColor: string;
  sidebarTheme: string;
}
const propsData = withDefaults(defineProps<props>(), {
  sidebarCollapsed: false,
  sidebarColor: "primary",
  sidebarTheme: "light",
});

onMounted(async () => {
  await loadData();
});
const menuList = ref([])
const loadData = async () => {
  await apiGetNoParam(V1_MENU_LIST_ALL).then((res) => {
    let response: any = res;
    menuList.value = response.data.data;
	console.log('V1_MENU_LIST_ALL');
    console.log(menuList.value);
  });
};
</script>
<style lang="css" scoped>
.slider-main {
  line-height: 50px;
}
</style>
