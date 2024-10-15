<template>
    <!-- Stats Section -->
    <section id="stats" class="stats section dark-background">

<img src="../../assets/client/img/stats-bg.jpg" alt="" data-aos="fade-in">

<div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
        <p>Clients</p>
      </div>
    </div><!-- End Stats Item -->

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
        <p>Projects</p>
      </div>
    </div><!-- End Stats Item -->

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
        <p>Hours Of Support</p>
      </div>
    </div><!-- End Stats Item -->

    <div class="col-lg-3 col-md-6">
      <div class="stats-item text-center w-100 h-100">
        <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
        <p>Workers</p>
      </div>
    </div><!-- End Stats Item -->

  </div>

</div>

</section><!-- /Stats Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Stats Section
--------------------------------------------------------------*/
.layout-default .stats {
  position: relative;
  padding: 120px 0;
}

.layout-default .stats img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.layout-default .stats:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 40%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.layout-default .stats .layout-default .container {
  position: relative;
  z-index: 3;
}

.layout-default .stats .layout-default .stats-item {
  padding: 30px;
  width: 100%;
}

.layout-default .stats .layout-default .stats-item span {
  font-size: 48px;
  display: block;
  color: var(--default-color);
  font-weight: 700;
}

.layout-default .stats .layout-default .stats-item p {
  padding: 0;
  margin: 0;
  font-family: var(--heading-font);
  font-size: 16px;
  font-weight: 700;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}
</style>