<template>
  <div class="telegram-login">
    <telegram-login-temp
      mode="callback"
      telegram-login="CheckPhone123_bot"
      @loaded="telegramLoadedCallbackFunc"
      @callback="yourCallbackFunction"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { telegramLoginTemp } from "vue3-telegram-login";
const isLoaded = ref(false);

function telegramLoadedCallbackFunc() {
  console.log("script is loaded");
  isLoaded.value = true;
}

function yourCallbackFunction(user: any) {
  // gets user as an input
  // id, first_name, last_name, username,
  // photo_url, auth_date and hash
  console.log(user);
}
</script>
