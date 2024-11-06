<template>
        <!-- About Section -->
        <section id="about" class="about section light-background">

            <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row align-items-xl-center gy-5">

                <div class="col-xl-5 content">
                <h3>About Us</h3>
                <h2>Ducimus rerum libero reprehenderit cumque</h2>
                <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                </div>

                <div class="col-xl-7">
                <div class="row gy-4 icon-boxes">

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                      <i class="fa-solid fa-building"></i>
                        <h3>Web Design</h3>
                        <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                    </div>
                    </div> <!-- End Icon Box -->

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <i class="fa-solid fa-clipboard"></i>
                        <h3>Marketing</h3>
                        <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                    </div>
                    </div> <!-- End Icon Box -->

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                      <i class="fa-solid fa-terminal"></i>
                        <h3>SEO</h3>
                        <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                    </div>
                    </div> <!-- End Icon Box -->

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                        <i class="fa-solid fa-chart-simple"></i>
                        <h3>Graphics Design</h3>
                        <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                    </div>
                    </div> <!-- End Icon Box -->

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
const homeService = ref([])
const loadData = async () => {
  await apiGetNoParam(V1_HOME_SHOW_SERVICE).then((res) => {
    let response: any = res;
    homeService.value = response.data.data;
    console.log('response response')
    console.log(response)
  });
};
</script>
<style lang="css" scoped>

</style>