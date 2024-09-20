<template>
  <component :is="navbarFixed ? 'a-affix' : 'div'" :offset-top="top">
    <a-layout-header>
      <a-row type="flex">
        <a-col :span="24" :md="6">
          <Breadcrumb></Breadcrumb>
        </a-col>
        <a-col :span="24" :md="17" class="header-control">
          <a-button
            type="link"
            ref="secondarySidebarTriggerBtn"
            @click="$emit('toggleSettingsDrawer', true)"
          >
            <i class="fas fa-cog"></i>
          </a-button>
          <a-button
            type="link"
            class="sidebar-toggler"
            @click="
              $emit('toggleSidebar', !sidebarCollapsed), resizeEventHandler()
            "
          >
            <i class="fas fa-bars"></i>
          </a-button>
          <User></User>
        </a-col>
        <a-col :span="24" :md="1" class="header-control">
          <SwitchLang></SwitchLang>
        </a-col>
        <!-- / Header Control Column -->
      </a-row>
    </a-layout-header>
    <!--  /Layout Header -->
  </component>
  <!-- / Main Sidebar -->
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import SwitchLang from "@/components/element/lang/SwitchLang.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import User from "@/components/user/User.vue";
const route = useRoute();
interface props {
  navbarFixed: boolean;
  sidebarCollapsed: boolean;
  notificationsData: any;
}
const propsData = withDefaults(defineProps<props>(), {
  navbarFixed: false,
  sidebarCollapsed: false,
  notificationsData: () => [],
});
const top = ref(0);
const resizeEventHandler = () => {
  top.value = top.value ? 0 : -0.01;
};
onMounted(() => {
  window.addEventListener("resize", resizeEventHandler);
});
</script>
<style>
.dark-mode .header-control a,
.dark-mode .header-control button,
.dark-mode .header-control i {
  color: #fff !important;
}
.header-control i {
  font-size: 1.2rem;
}
</style>
