<template>
  <div>
    <!-- <TableComponent apiCode="pol-back1" :xScroll="'calc(700px + 50%)'" :yScroll="340" cTable="table-version1">
        <template #action="action">
          <div class="thao-tac">
              {{ JSON.parse(JSON.stringify(action)).action }}
          </div>
      </template>

    </TableComponent> -->
    <TableComponent
      apiCode="pol-back1"
      cTable="table-version1"
      :xScroll="'calc(700px + 50%)'"
      :yScroll="340"
    >
      <template #action="action">
        <div class="thao-tac">
          {{ JSON.parse(JSON.stringify(action)).action }}
        </div>
      </template>
      <template #mobile="action">
        <div class="mobile-v1">
          <TableMobile :data="action.action"></TableMobile>
        </div>
      </template>
    </TableComponent>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUpdated, computed } from "vue";
import TableComponent from "./TableComponent.vue";
import TableMobile from "./TableMobile.vue";
const dataEncrypt = ref("");
onMounted(() => {
  dataEncrypt.value = "asasasas";
});
</script>
<style scoped>
.table-version1 {
  padding: 15px;
}
</style>
