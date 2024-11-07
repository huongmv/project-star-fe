<template>
        <!-- About Section -->
        <section id="about" class="about section light-background">

            <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row align-items-xl-center gy-5">

                <div class="col-xl-5 content">
                <h3>About Us</h3>
                <h2>{{ homeService.name }}</h2>
                <p>{{ homeService.slogan }}</p>
                <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                </div>

                <div class="col-xl-7">
                <div class="row gy-4 icon-boxes">

                    <div class="col-md-6" data-aos="fade-up" :data-aos-delay="(index + 2) + '00'" v-for="(item, index) in homeService.servicesList" :key="index">
                    <div class="icon-box">
                     <div v-html="item.icon"></div>
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.slogan }}</p>
                    </div>
                    </div>
<!-- 
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <i class="fa-solid fa-clipboard"></i>
                        <h3>Marketing</h3>
                        <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                    </div>
                    </div> 

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                      <i class="fa-solid fa-terminal"></i>
                        <h3>SEO</h3>
                        <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                    </div>
                    </div> 

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                        <i class="fa-solid fa-chart-simple"></i>
                        <h3>Graphics Design</h3>
                        <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                    </div>
                    </div> -->

                </div>
                </div>

            </div>
            </div>

            </section><!-- /About Section -->

</template>

<script lang="ts" setup>
import { ref, onMounted, onUpdated, computed } from "vue";
import { V1_HOME_SHOW_SERVICE } from "@/api/const/client";
import { apiPost, apiGetNoParam, apiGet } from "@/api/index";


onMounted(async () => {
  await loadData();
});
const homeService = ref({})
const loadData = async () => {
  await apiGetNoParam(V1_HOME_SHOW_SERVICE).then((res) => {
    let response: any = res;
    homeService.value = response.data.data;
    console.log('response response')
    console.log(homeService.value)
  });
};
</script>
<style lang="css" scoped>

</style>