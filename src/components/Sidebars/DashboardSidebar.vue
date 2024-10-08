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
    <!-- <svg version="1.0" id="ProIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" style="enable-background:new 0 0 400 400;" xml:space="preserve">
      <g>
      <g id="Layer_1_00000146479712333459789260000010052810418566185387_">
      <path style="fill: rgb(226, 176, 36); stroke-dasharray: 1257, 1259; stroke-dashoffset: 0;" d="M0,200c0,110.5,89.5,200,200,200s200-89.5,200-200S310.5,0,200,0S0,89.5,0,200z"></path>
      <path style="fill: rgb(255, 255, 255); stroke-dasharray: 714, 716; stroke-dashoffset: 0;" d="M193.8,206.3l-83.5-54.9c-10.2-6.7-23.5,1.5-22.1,13.6l11.4,100.6c1.5,13.5,13,23.7,26.6,23.7
            h150.9c13.6,0,25-10.2,26.6-23.7L315.1,165c1.4-12.1-12-20.3-22.1-13.6l-83.5,54.9c-4.8,3.1-11,3.1-15.8,0l0,0H193.8z"></path>
      <path style="fill: rgb(255, 255, 255); stroke-dasharray: 470, 472; stroke-dashoffset: 0;" d="M186.5,105.5l-61.6,99.4c-7.4,11.9,1.2,27.3,15.2,27.3h123.2c14,0,22.6-15.4,15.2-27.3l-61.6-99.4
            C209.9,94.2,193.5,94.2,186.5,105.5L186.5,105.5z"></path>
      <path style="fill: rgb(226, 176, 36); stroke-dasharray: 233, 235; stroke-dashoffset: 0;" d="M164.3,238h74.8c8.4,0,12.7,4.2,12.7,12.7l0,0c0,8.5-4.2,12.7-12.7,12.7h-74.8
            c-8.4,0-12.7-4.2-12.7-12.7l0,0C151.6,242.2,155.8,238,164.3,238z"></path>
      </g>
      </g>
      </svg> -->
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
