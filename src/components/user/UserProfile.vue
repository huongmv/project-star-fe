<template>
  <div class="card card-primary card-outline">
    <div class="card-body box-profile">
      <div class="text-center">
        <img
          class="profile-user-img img-fluid img-circle"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          alt="User profile picture"
        />
      </div>

      <h3 class="profile-username text-center">Nina Mcintire</h3>

      <p class="text-muted text-center">Software Engineer</p>

      <div class="ds-info">
                <div class="ds pens">
                    <span class="title">Thông tin tài khoản</span>
                    <ol>
                        <!-- <li>
                            <h6 title="Số điện thoại">Số điện thoại </h6>
                            <p>{{ userData.phone }}</p>
                        </li>
                        <li>
                            <h6 title="Email">Email </h6>
                            <p>{{ userData.email }}</p>
                        </li>
                        <li>
                            <h6 title="Ngày sinh">Ngày sinh </h6>
                            <p>{{ userData.birthday }}</p>
                        </li>
                        <li>
                            <h6 title="Mã giới thiệu">Mã giới thiệu </h6>
                            <p>{{ userData.introCode }}</p>
                        </li>
                        <li>
                            <h6 title="Ngày tạo">Ngày tham gia </h6>
                            <p>{{ userData.startDate }}</p>
                        </li>
                        <li>
                            <h6 title="Trạng thái">Trạng thái: <el-tag type="success" disable-transitions>
                                    {{ userData.status }}</el-tag>
                            </h6>
                        </li> -->
                    </ol>
                </div>
            </div>

      <!-- <ul class="list-group list-group-unbordered mb-3">
        <li class="list-group-item">
          <b>Followers</b> <a class="float-right">1,322</a>
        </li>
        <li class="list-group-item">
          <b>Following</b> <a class="float-right">543</a>
        </li>
        <li class="list-group-item">
          <b>Friends</b> <a class="float-right">13,287</a>
        </li>
      </ul> -->

      <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
    </div>
    <!-- /.card-body -->
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, watch, computed } from 'vue'
import { USER_DETAIL_BY_USER, USER_UPDATE_URL } from '@/api/const/users'
import { UPLOAD_FILE_AVATAR } from '@/api/const/file'
import { apiGetNoParam, apiPost, uploadFile } from '@/api/index'
import Utils from '@/utils/Utils'
import { useRouter } from 'vue-router'
import { useCookies } from "vue3-cookies"
import type { UploadProps, UploadUserFile } from 'element-plus'
import { USER } from '@/const/cookie'
import store from '@/store/index'
const router = useRouter()
const { cookies } = useCookies();

const urlAvatarPage = ref('')
const urlAvatar = computed(() => {
    return store.getters.isUrlAvatar
})
const fileList = ref<UploadUserFile[]>([])
const handleChange: UploadProps['onChange'] = async (file, uploadFiles) => {
    var formData = new FormData();
    formData.append("name", file.name);
    formData.append("files", file.raw);
    await uploadFile(UPLOAD_FILE_AVATAR, formData).then(res => {
        let response: any = res
        let dataRes = response.data.data
        if (dataRes != null) {
            let user = cookies.get(USER);
            user.urlAvatar = dataRes.url
            store.dispatch('setsUrlAvatar', dataRes.url)
            cookies.set(USER, JSON.stringify(user));
        }

    })
}

watch(urlAvatar, (newValue, oldValue) => {
    urlAvatarPage.value = JSON.parse(JSON.stringify(newValue))
})

const userData = ref()
onMounted(async () => {
    // let dataaa = JSON.parse(JSON.stringify(cookies.get(USER)))
    // await apiGetNoParam(USER_DETAIL_BY_USER + dataaa.userName).then(res => {
    //     let response: any = res
    //     if (response.data.httpStatus == 200) {
    //         userData.value = response.data.data
    //     }
    // })
})
</script>
