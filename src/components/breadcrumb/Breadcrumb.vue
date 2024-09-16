<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item
        v-for="(item, index) in route.meta.breadcrumb"
        :key="index"
      >
        <template #default>
          <span v-if="item.key != ''"
            ><router-link :to="item.key">{{
              $t(item.value)
            }}</router-link></span
          >
          <span v-else>{{ $t(item.value) }}</span>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="ant-page-header-heading">
      <span class="ant-page-header-heading-title">{{ route.name }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
