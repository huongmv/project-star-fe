<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div class="sign-in">
		
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

			<!-- Sign In Form Column -->
			<a-col :span="24" :md="12" :lg="{span: 12, offset: 2}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-15">Sign In</h1>
				<h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

				<!-- Sign In Form -->
				<!-- <a-form
					id="components-form-demo-normal-login"
					form="normal_login"
					class="login-form"
					@submit="handleSubmit"
					:hideRequiredMark="true"
				>
					<a-form-item class="mb-10" label="Email" :colon="false">
						<a-input 
						v-decorator="[
						'email',
						{ rules: [{ required: true, message: 'Please input your email!' }] },
						]" placeholder="Email" />
					</a-form-item>
					<a-form-item class="mb-5" label="Password" :colon="false">
						<a-input
						v-decorator="[
						'password',
						{ rules: [{ required: true, message: 'Please input your password!' }] },
						]" type="password" placeholder="Password" />
					</a-form-item>
					<a-form-item class="mb-10">
    					<a-switch v-model:value="rememberMe" /> Remember Me
					</a-form-item>
					<a-form-item>
						<a-button type="primary" block html-type="submit" class="login-form-button">
							SIGN IN
						</a-button>
					</a-form-item>
				</a-form> -->
				<a-form
					class="login-form"
					:model="formState"
					name="basic"
					autocomplete="off"
					@finish="onFinish"
					@finishFailed="onFinishFailed"
				>
					<a-form-item  class="mb-10"
					label="Username"
					name="username"
					:rules="[{ required: true, message: 'Please input your username!' }]"
					>
					<a-input v-model:value="formState.username" />
					</a-form-item>

					<a-form-item class="mb-10"
					label="Password"
					name="password"
					:rules="[{ required: true, message: 'Please input your password!' }]"
					>
					<a-input-password  v-model:value="formState.password" />
					</a-form-item>

					<a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
					<a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
					</a-form-item>

					<a-form-item :wrapper-col="{ offset: 8, span: 16 }">
					<a-button type="primary" html-type="submit">Submit</a-button>
					</a-form-item>
				</a-form>
				<!-- / Sign In Form -->

				<p class="font-semibold text-muted">Don't have an account? <router-link to="/sign-in" class="font-bold text-dark">Sign Up</router-link></p>
			</a-col>
			<!-- / Sign In Form Column -->

			<!-- Sign In Image Column -->
			<!-- <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="images/img-signin.jpg" alt="">
			</a-col> -->
			<!-- Sign In Image Column -->

		</a-row>
		
	</div>
</template>
<script lang="ts" setup>
import { watch, ref, onMounted, computed, reactive } from "vue";
const rememberMe = ref(true)
const handleSubmit = () => {
	console.log('111111111')
}

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>
<!-- <script>

	export default ({
		data() {
			return {
				// Binded model property for "Sign In Form" switch button for "Remember Me" .
				rememberMe: true,
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

</style>