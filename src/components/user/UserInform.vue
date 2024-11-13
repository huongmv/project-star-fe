<template>
    
        <!-- Main content -->
        <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">

            <!-- Profile Image -->
            <UserProfile></UserProfile>
            <!-- /.card -->

            <!-- About Me Box -->
            <!-- <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About Me</h3>
              </div>
              <div class="card-body">
                <strong><i class="fas fa-book mr-1"></i> Education</strong>

                <p class="text-muted">
                  B.S. in Computer Science from the University of Tennessee at Knoxville
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">Malibu, California</p>

                <hr>

                <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                <p class="text-muted">
                  <span class="tag tag-danger">UI Design</span>
                  <span class="tag tag-success">Coding</span>
                  <span class="tag tag-info">Javascript</span>
                  <span class="tag tag-warning">PHP</span>
                  <span class="tag tag-primary">Node.js</span>
                </p>

                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
              </div>
            </div> -->
          </div>
          <div class="col-md-9">
            <a-tabs v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="Thông tin người dùng">
                    <UserUpdate></UserUpdate>    
                </a-tab-pane>
                <a-tab-pane key="2" tab="Thay đổi mật khẩu" >
                    <UserChangePass></UserChangePass>
                </a-tab-pane>
                <a-tab-pane key="3" tab="Tài khoản ngân hàng">
                    <UserBanks></UserBanks>
                </a-tab-pane>
                <a-tab-pane key="4" tab="Cài đặt">
                    <UserSeting></UserSeting>
                </a-tab-pane>
            </a-tabs>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import UserProfile from '@/components/user/UserProfile.vue'
import UserBanks from '@/components/user/form/UserBanks.vue'
import UserChangePass from '@/components/user/form/UserChangePass.vue'
import UserSeting from '@/components/user/form/UserSeting.vue'
import UserUpdate from '@/components/user/form/UserUpdate.vue'
const activeKey = ref('1');
</script>