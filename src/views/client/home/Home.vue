<template>
  <div>
    <Banner></Banner>
    <Ducimus></Ducimus>
    <Counting></Counting>
    <Services></Services>
    <Features></Features>
    <!-- <Portfolio></Portfolio> -->
    <Pricing></Pricing>
    <Faq></Faq>
    <!-- <Team></Team> -->
    <CallToAction></CallToAction>
    <!-- <Testimonials></Testimonials> -->
    <RecentPosts></RecentPosts>
    <Contact></Contact>
    <div class="card">
        <MeterGroup :value="value" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Banner from "@/layouts/default/Banner.vue";
import Services from "@/layouts/default/Services.vue";
import Ducimus from "@/layouts/default/Ducimus.vue";
import Counting from "@/layouts/default/Counting.vue";
import Features from "@/layouts/default/Features.vue";
import Portfolio from "@/layouts/default/Portfolio.vue";
import Pricing from "@/layouts/default/Pricing.vue";
import Faq from "@/layouts/default/Faq.vue";
import Team from "@/layouts/default/Team.vue";
import CallToAction from "@/layouts/default/CallToAction.vue";
import Testimonials from "@/layouts/default/Testimonials.vue";
import RecentPosts from "@/layouts/default/RecentPosts.vue";
import Contact from "@/layouts/default/Contact.vue";
import { ref } from "vue";
import MeterGroup from 'primevue/metergroup';

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
]);
</script>

<style scoped>
@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
</style>
