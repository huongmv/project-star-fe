<!-- 
	This is the default layout, used in sign-in and sign-up pages.
 -->

<template>
	<div>
		<!-- Default Layout -->
		<a-layout class="layout-default" id="layout-default" :class="[route.meta.layoutClass]">

			<!-- Layout Header ( Navbar ) -->
			<DefaultHeader></DefaultHeader>
			<!-- / Layout Header ( Navbar ) -->


			<!-- Page Content -->
			<a-layout-content>
				<div class="main">
					<router-view />
				</div>
			</a-layout-content>
			<!-- / Page Content -->

			<!-- Layout Footer -->
			<DefaultFooter></DefaultFooter>
			<!-- / Layout Footer -->

		</a-layout>
		<!-- / Default Layout -->

	</div>
</template>
<script lang="ts" setup>
import DefaultHeader from "@/components/Headers/DefaultHeader.vue";
import DefaultFooter from "@/components/Footers/DefaultFooter.vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
</script>
<!-- <script>

	import DefaultHeader from '../components/Headers/DefaultHeader' ;
	import DefaultFooter from '../components/Footers/DefaultFooter' ;

	export default ({
		components: {
			DefaultHeader,
			DefaultFooter,
		},
		data() {
			return {
			}
		},
		computed: {
			// Sets layout's element's class based on route's meta data.
			layoutClass() {
				return this.$route.meta.layoutClass ;
			}
		},
	})

</script> -->