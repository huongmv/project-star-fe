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
.operation-content span i{
  color: var(--el-color-primary);
}
</style>
