<template>
  <div>
    <el-form
      label-position="left"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="250px"
      class="form-inform-user"
      :size="formSize"
      status-icon
    >
      <el-form-item label="Tên truy cập" prop="account">
        <el-input disabled v-model="ruleForm.account" />
      </el-form-item>

      <el-form-item label="Phân quyền tài khoản" prop="roles">
        <!-- <el-select v-model="ruleForm.roles" placeholder="Chọn quyền">
          <el-option
            v-for="item in optionsRoles"
            :key="item"
            :label="item.rolesDetail"
            :value="item.rolesId"
          />
        </el-select> -->
        <!-- <SelectEl  v-model="ruleForm.roles" :options="optionsRoles"></SelectEl> -->
      </el-form-item>
      <el-form-item label="Họ và tên">
        <el-input v-model="ruleForm.fullName" />
      </el-form-item>
      <el-form-item label="Địa chỉ">
        <el-input v-model="ruleForm.address" />
      </el-form-item>
      <el-form-item label="Ngày sinh">
        <el-form-item prop="birthday">
          <el-date-picker
            v-model="ruleForm.birthday"
            type="date"
            format="DD/MM/YYYY"
            value-format="DD/MM/YYYY"
            placeholder="Chọn ngày"
            style="width: 100%" 
          />
        </el-form-item>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import BodyForm from '@/components/form/body/BodyForm.vue'
import Primary from '@/components/form/button/Primary.vue'
import { useRouter, useRoute } from 'vue-router'
import commons from '@/utils/Common'
import { apiPost, apiGetNoParam } from '@/api/index'
// import { USER_ADMIN_DETAIL, USER_ADMIN_EDIT } from '@/api/const/users'
// import { ROLES_LIST } from '@/api/const/roles'
import Utils from '@/utils/Utils'
const router = useRouter()
const route = useRoute()
const formSize = ref('default')
const userName = ref('')
const optionsRoles = ref([])
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    account: '',
    roles: 0,
    fullName: '',
    birthday: '',
    email: '',
    address: '',
    type: ['SMS']
})
const rules = reactive<FormRules>({
    account: [
        { required: true, message: 'Tên tài khoản không được để trống', trigger: 'blur' },
        { min: 5, max: 100, message: 'Độ dài tài khoản phải > 5 ký tự', trigger: 'blur' },
    ],
    roles: [
        {
            required: true,
            message: 'Chưa chọn quền sử dụng',
            trigger: 'change',
        },
    ],
})
const activeName = ref('first')

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            let data = JSON.parse(JSON.stringify(ruleForm))
            updateUser(data)
        }
    })
}
const updateUser = async (val: any) => {
    console.log(val)
    // await apiPost(USER_ADMIN_EDIT, val).then(res => {
    //     let response: any = res
    //     let dataRes = response.data.data
    //     if (dataRes) {
    //         commons.showMsgSuccess('Cập nhật tài khoản thành công')
    //     } else {
    //         commons.showMsgError('Lỗi cập nhật tài khoản')
    //     }

    // })
}
const goBack = () => {
    router.go(-1)
}
onMounted(async () => {
    // try {

    //     await apiGetNoParam(ROLES_LIST).then(res => {
    //         let response: any = res
    //         let dataRes = response.data.data
    //         optionsRoles.value = dataRes
    //     })

    //     userName.value = route.params.user.toString()
    //     if (route.params.user.length > 0) {
    //         await apiGetNoParam(USER_ADMIN_DETAIL + userName.value).then(res => {
    //             let response: any = res
    //             let dataRes = response.data.data
    //             ruleForm.account = dataRes.account
    //             ruleForm.roles = Utils.parseStringToFloatNumber(dataRes.roles)
    //             ruleForm.fullName = dataRes.fullName
    //             if (null != dataRes.birthday) {
    //                 ruleForm.birthday = Utils.convertDate(dataRes.birthday, 'DD/MM/YYYY')
    //             } else {
    //                 ruleForm.birthday = ''
    //             }
    //             ruleForm.email = dataRes.email
    //             ruleForm.address = dataRes.address
    //         })
    //     }
    // } catch (error) {
    //     goBack()
    // }

})

</script>