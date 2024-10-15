<template>
      <!-- Services Section -->
      <section id="services" class="services section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Services</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Lorem Ipsum</a></h4>
          <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </div>
    </div>
    <!-- End Service Item -->

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Dolor Sitema</a></h4>
          <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Sed ut perspiciatis</a></h4>
          <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Magni Dolores</a></h4>
          <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Nemo Enim</a></h4>
          <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
        <div>
          <h4 class="title"><a href="services-details.html" class="stretched-link">Eiusmod Tempor</a></h4>
          <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div>
    </div><!-- End Service Item -->

  </div>

</div>

</section><!-- /Services Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Services Section
--------------------------------------------------------------*/
.layout-default .services .layout-default .service-item {
  position: relative;
  padding-top: 40px;
}

.layout-default .services .layout-default .service-item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: color-mix(in srgb, var(--default-color), transparent 90%);
}

.layout-default .services .layout-default .service-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-color);
  border-right: 5px solid var(--background-color);
}

.layout-default .services .layout-default .service-item .layout-default .icon {
  width: 48px;
  height: 48px;
  position: relative;
  margin-right: 50px;
  line-height: 0;
}

.layout-default .services .layout-default .service-item .layout-default .icon i {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 56px;
  transition: ease-in-out 0.layout-default .3s;
  z-index: 2;
  position: relative;
}

.layout-default .services .layout-default .service-item .layout-default .icon:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  background: color-mix(in srgb, var(--accent-color), transparent 70%);
  border-radius: 50px;
  z-index: 1;
  bottom: -15px;
  right: -15px;
  transition: 0.layout-default .3s;
}

.layout-default .services .layout-default .service-item .layout-default .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.layout-default .services .layout-default .service-item .layout-default .title a {
  color: var(--heading-color);
}

.layout-default .services .layout-default .service-item .layout-default .title a:hover {
  color: var(--accent-color);
}

.layout-default .services .layout-default .service-item .layout-default .description {
  line-height: 24px;
  font-size: 14px;
}

</style>