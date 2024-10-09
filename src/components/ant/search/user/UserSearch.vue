<template>
  <a-form
    class=""
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input
        v-model:value="formState.search"
        placeholder="Username"
        prefix="￥"
        suffix="RMB"
        size="small"
      >
        <!-- <template #prefix><UserOutlined /></template> -->
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="searchUser">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  <!-- :disabled="formState.search === ''" -->
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { UnwrapRef } from "vue";
import type { FormProps } from "ant-design-vue";
import apiUtils from "@/utils/ApiUtils";
const emits = defineEmits(["userSearch"])
// interface FormState {
//   user: string;
//   password: string;
// }
const formState = reactive({
  search: "",
});
const handleFinish: FormProps["onFinish"] = (values) => {
  console.log(values, formState);
};
const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  console.log(errors);
};
const searchUser = async () => {
  let param = [{key:'progCode',type:'like',value :formState.search}]
  emits('userSearch', await apiUtils.getHashCodeParam(param))
};
</script>
