<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div id="app">
		<component :is="'layout-'+ route.meta.layout || 'default'">
			<router-view />
		</component>
	</div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const layout = "layout-dashboard"
	// export default ({
	// 	computed: {
	// 		// Sets components name based on current route's specified layout, defaults to
	// 		// <layout-default></layout-default> component.
	// 		layout() {
	// 			return "layout-" + ( this.$route.meta.layout || "default" ).toLowerCase() ;
	// 		}
	// 	},
	// })
	
</script>
<style lang="scss">
.ant-form-item-control-input-content {
	align-items: center;
    display: flex;
}
.ant-input-affix-wrapper {
	line-height: 38px;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
