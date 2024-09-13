<template>
  <!-- <el-dropdown>
        <span class="el-dropdown-link">
            <country-flag :country="lang" size='normal' />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="onChange('vn')">
                    <country-flag country="vn" size='normal' /><span class="lable">{{ $t('message.vietnam') }}</span>
                </el-dropdown-item>
                <el-dropdown-item @click="onChange('us')">
                    <country-flag country="us" size='normal' /><span class="lable">{{ $t('message.usa') }}</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown> -->
  <a-dropdown placement="bottomRight" arrow>
    <country-flag :country="lang" size="normal" />
    <template #overlay>
      <a-menu>
        <a-menu-item @click="onChange('vn')" class="item-flag">
          <country-flag country="vn" size="normal" />
          <!-- <span class="lable">{{ $t('message.vietnam') }}</span></country-flag> -->
        </a-menu-item>
        <a-menu-item @click="onChange('us')" class="item-flag">
          <country-flag country="us" size="normal" />
          <!-- <span class="lable">{{ $t('message.usa') }}</span></country-flag> -->
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<!-- <script lang="ts" setup>
import { inject , ref, onMounted, computed } from "vue";
import CountryFlag from "vue-country-flag-next";
import { useCookies } from "vue3-cookies";
import { LANGUAGE, VN } from "@/const/language";
import store from "@/store/index";
import { createApp } from "vue";
import { useI18n } from "vue-i18n";
import serviceData from "@/services/servicesApi";
import VueI18n from "vue-i18n";
const { cookies } = useCookies();
const app = createApp({});
const { t } = useI18n();
const lang = ref("VN");
const lenguage = inject('_lenguage');
onMounted(() => {
  let lang_cookie = cookies.get(LANGUAGE);
  if (lang_cookie == null || lang_cookie == undefined) {
    cookies.set(LANGUAGE, VN);
  } else {
    cookies.set(LANGUAGE, lang_cookie);
  }
});
const onChange = (langChange: any) => {
  store.dispatch("setCountryChange", langChange);
  localStorage.setItem(LANGUAGE, langChange);
  cookies.set(LANGUAGE, langChange);
  lenguage.locale = langChange
  this.$i18n.locale = langChange
  lang.value = langChange;
  // serviceData.init()
};
</script> -->
<script>
import CountryFlag from 'vue-country-flag-next'
import { useCookies } from "vue3-cookies"
import { LANGUAGE, VN } from '@/const/language'
import store from '@/store/index'
import { createApp } from 'vue'
import { useI18n } from "vue-i18n"
import serviceData from '@/services/servicesApi'
export default {
    setup() {
        const { cookies } = useCookies()
        const app = createApp({})
        let lang_cookie = cookies.get(LANGUAGE)
        if (lang_cookie == null || lang_cookie == undefined) {
            cookies.set(LANGUAGE, VN)
        } else {
            cookies.set(LANGUAGE, lang_cookie)
        }
        const { t } = useI18n()
        return { cookies, app, serviceData, t }
    },
    data() {
        return {
            lang: VN,
        }
    },
    components: {
        CountryFlag,
    },
    mounted() {
        this.$i18n.locale = this.cookies.get(LANGUAGE)
        this.lang = this.cookies.get(LANGUAGE)
    },
    methods: {
        onChange(langChange) {
            store.dispatch('setCountryChange', langChange)
            localStorage.setItem(LANGUAGE, langChange)
            this.cookies.set(LANGUAGE, langChange)
            this._lenguage = langChange
            this.$i18n.locale = langChange
            this.lang = langChange
            // serviceData.init()
        }
    }
}
</script>

<style scoped>
.item-flag {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
