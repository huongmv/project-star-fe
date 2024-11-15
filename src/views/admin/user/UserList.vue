<template>
  <div>
    <!-- :xScroll="'calc(700px + 50%)'"
      :yScroll="340" -->
    <div class="mt-2 mb-2">
      <UserSearch @userSearch="userSearch"></UserSearch>
    </div>
    <TableComponent apiCode="users-list" cTable="table-version1" :condition="searchValue">
      <template #action="action">
        <div class="thao-tac">
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
      <template #roleId="roleId">
        <div class="thao-tac">
          {{ dataTest(roleId.action)}}
        </div>
      </template>
      <template #rankId="rankId">
        <div class="thao-tac">
          {{ dataTest(rankId.action)}}
        </div>
      </template>
      <template #mobile="action">
        <div class="mobile-v1">
          <TableMobile :data="action.action"></TableMobile>
        </div>
      </template>
    </TableComponent>
    <PopupShow :show-popup="userCreateShow" @close-popup="userCreateShow = !userCreateShow" @submit-popup="userSubmit">
      <template #content>
        <CreateUser></CreateUser>
      </template>
    </PopupShow>
    <PopupShow :show-popup="userEditShow" @close-popup="userEditShow = !userEditShow" @submit-popup="userEdit">
      <template #content>
        <EditUser></EditUser>
      </template>
    </PopupShow>
    <PopupShow :show-popup="userDeleteShow" @close-popup="userDeleteShow = !userDeleteShow" @submit-popup="userDelete"></PopupShow>
    <PopupShow :show-popup="userChangeShow" @close-popup="userChangeShow = !userChangeShow" @submit-popup="userChange">
      <template #content>
        <UserChangePass></UserChangePass>
      </template>
    </PopupShow>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, computed } from "vue";
import TableComponent from "@/components/ant/table/TableComponent.vue";
import TableMobile from "@/components/ant/table/TableMobile.vue";
import DotTable from "@/components/ant/action/DotAction.vue";
import UserSearch from "@/components/ant/search/user/UserSearch.vue";
import Operation from  "@/components/ant/action/Operation.vue";
import PopupShow from '@/components/ant/modal/PopupShow.vue'
import CreateUser from "./component/CreateUser.vue";
import EditUser from "./component/EditUser.vue";
import UserChangePass from "@/components/user/form/UserChangePass.vue";

const dataEncrypt = ref("");
const userCreateShow = ref(false)
const userEditShow = ref(false)
const userDeleteShow = ref(false)
const userChangeShow = ref(false)
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
  userCreateShow.value = true
  console.log('addUser')
  console.log(val)
} 

const editUser = (val: any) => {
  userEditShow.value = true
  console.log('editUser')
  console.log(val)
} 

const deleteUser = (val: any) => {
  userDeleteShow.value = true
  console.log('deleteUser')
  console.log(val)
} 

const changePass = (val: any) => {
  userChangeShow.value = true
  console.log('changePass')
  console.log(val)
} 

const userSubmit = () => {
  console.log('userSubmit')
} 

const userEdit = () => {
  console.log('userEdit')
} 

const userDelete = () => {
  console.log('userDelete')
} 

const userChange = () => {
  console.log('userChange')
} 

const dataTest = (val: any) => {
  if(val == '1') {
    return "123"
  }
  if(val == '2') {
    return "456"
  }
  if(val == '0') {
    return "789999999999999"
  }
}
</script>
<style scoped></style>
