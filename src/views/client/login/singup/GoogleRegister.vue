<template>
  <div class="google-login">
    <GoogleLogin :callback="callbackGoogle" />
  </div>
</template>
<script setup lang="ts">
const callbackGoogle = (res: any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", res);
};
</script>
<style lang="scss">
.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb span {
  display: none;
}
</style>
