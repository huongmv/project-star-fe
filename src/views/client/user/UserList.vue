<template>
  <div>
    <!-- :xScroll="'calc(700px + 50%)'"
      :yScroll="340" -->
    <div class="mt-2 mb-2">
      <UserSearch @userSearch="userSearch"></UserSearch>
    </div>
    <TableComponent apiCode="pol-back1" cTable="table-version1" :condition="searchValue">
      <template #action="action">
        <div class="thao-tac">
          <DotTable>
            <template #content>
              {{ JSON.parse(JSON.stringify(action)).action }}
            </template>
          </DotTable>
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
import TableComponent from "@/components/ant/table/TableComponent.vue";
import TableMobile from "@/components/ant/table/TableMobile.vue";
import DotTable from "@/components/ant/action/DotAction.vue";
import UserSearch from "@/components/ant/search/user/UserSearch.vue";
const dataEncrypt = ref("");
const xScroll = ref({ x: "calc(700px + 50%)", y: 340 });
onMounted(() => {
  dataEncrypt.value = "asasasas";
});
const searchValue = ref('')
const param = ref('')
const userSearch = (val: any) => {
  console.log('222222222222222222222')
  console.log(val.data)
  searchValue.value = val.data
  param.value = val.data
} 
</script>
<style scoped></style>
