<template>
    <a-breadcrumb>
      <a-breadcrumb-item
        v-for="(item, index) in route.meta.breadcrumb"
        :key="index"
      >
        <template #default>
          <span v-if="item.key != ''"
            ><router-link :to="item.key">{{ $t(item.value) }}</router-link></span
          >
          <span v-else>{{ $t(item.value) }}</span>
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
</script>
