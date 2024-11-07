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
          <!-- <DotTable>
            <template #content>
              {{ JSON.parse(JSON.stringify(action)).action }}
            </template>
          </DotTable> -->
          <Operation
              :face-data="action"
              :face-menu="faceMenu"
              @addUser="addUser"
              @editUser="editUser"
              @deleteUser="deleteUser"
              @changePass="changePass"
            ></Operation>
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
import { ref, onMounted, reactive, computed } from "vue";
import TableComponent from "@/components/ant/table/TableComponent.vue";
import TableMobile from "@/components/ant/table/TableMobile.vue";
import DotTable from "@/components/ant/action/DotAction.vue";
import UserSearch from "@/components/ant/search/user/UserSearch.vue";
import Operation from  "@/components/ant/action/Operation.vue";
const dataEncrypt = ref("");
const xScroll = ref({ x: "calc(700px + 50%)", y: 340 });
const faceMenu = reactive([
  {
      classPath: 'operation-content',
      emits: 'addUser',
      icon: 'fas fa-user-plus',
      title: 'text.addUser',
    },
    {
      classPath: 'operation-content',
      emits: 'editUser',
      icon: 'fas fa-user-edit',
      title: 'text.editUser',
    },
    {
      classPath: 'operation-content',
      emits: 'deleteUser',
      icon: 'fas fa-user-times',
      title: 'text.deleteUser',
    },
    {
      classPath: 'operation-content',
      emits: 'changePass',
      icon: 'fas fa-edit',
      title: 'text.changePass',
    },
]);
onMounted(() => {
  dataEncrypt.value = "asasasas";
});
const searchValue = ref('')
const param = ref('')
const userSearch = (val: any) => {
  searchValue.value = val.data
  param.value = val.data
} 

const addUser = (val: any) => {
  console.log('addUser')
  console.log(val)
} 

const editUser = (val: any) => {
  console.log('editUser')
  console.log(val)
} 

const deleteUser = (val: any) => {
  console.log('deleteUser')
  console.log(val)
} 

const changePass = (val: any) => {
  console.log('changePass')
  console.log(val)
} 

</script>
<style scoped></style>
