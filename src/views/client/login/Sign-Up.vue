<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div
      class="sign-up-header"
      style="background-image: url('images/bg-signup.jpg')"
    >
      <!-- <div class="content">
        <h1 class="mb-1">Sign Up</h1>
        <p class="text-lg">
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div> -->
    </div>
    <!-- / Sign Up Image And Headings -->

    <!-- Sign Up Form -->
    <a-card
      :bordered="true"
      class="card-signup header-solid h-full"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <template #title>
        <h5 class="font-semibold text-center">Register With</h5>
      </template>
      <div class="sign-up-gateways">
        <GoogleRegister></GoogleRegister>
		    <TelegramRegister></TelegramRegister>
        <!-- <a-button>
          <img src="images/logos/logo-apple.svg" alt="">
        </a-button> -->
        <div>
          <a-button>
            <img src="images/logos/Google__G__Logo.svg.png" alt="" />
          </a-button>
        </div>
      </div>
      <p class="text-center my-25 font-semibold text-muted">Or</p>
      <RegisterForm></RegisterForm>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>
<script setup lang="ts">

import RegisterForm from "@/views/client/login/singup/RegisterForm.vue";
import GoogleRegister from "@/views/client/login/singup/GoogleRegister.vue";
import TelegramRegister from "@/views/client/login/singup/TelegramRegister.vue";
</script>
<!-- <script>

	export default ({
		data() {
			return {
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			// Handles input validation after submission.
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if ( !err ) {
						console.log('Received values of form: ', values) ;
					}
				});
			},
		},
	})

</script> -->

<style lang="scss">
.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb span {
  display: none;
}
</style>
