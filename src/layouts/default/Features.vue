<template>
    
    <!-- Features Section -->
    <section id="features" class="features section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Features</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4 align-items-center features-item">
    <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h3>Corporis temporibus maiores provident</h3>
      <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <a href="#" class="btn btn-get-started">Get Started</a>
    </div>
    <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
      <div class="image-stack">
        <img src="../../assets/client/img/features-light-1.jpg" alt="" class="stack-front">
        <img src="../../assets/client/img/features-light-2.jpg" alt="" class="stack-back">
      </div>
    </div>
  </div><!-- Features Item -->

  <div class="row gy-4 align-items-stretch justify-content-between features-item ">
    <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
      <img src="../../assets/client/img/features-light-3.jpg" class="img-fluid" alt="">
    </div>
    <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
      <h3>Sunt consequatur ad ut est nulla</h3>
      <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
      <ul>
        <li><i class="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
        <li><i class="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
        <li><i class="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
      </ul>
      <a href="#" class="btn btn-get-started align-self-start">Get Started</a>
    </div>
  </div><!-- Features Item -->

</div>

</section><!-- /Features Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Features Section
--------------------------------------------------------------*/
.features .features-item {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.features .features-item+.features-item {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .features .features-item+.features-item {
    margin-top: 40px;
  }
}

.features .features-item h3 {
  font-weight: 700;
  font-size: 26px;
}

.features .features-item .btn-get-started {
  background-color: var(--accent-color);
  color: var(--contrast-color);
  padding: 8px 30px 10px 30px;
  border-radius: 4px;
}

.features .features-item .btn-get-started:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

.features .features-item ul {
  list-style: none;
  padding: 0;
}

.features .features-item ul li {
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
}

.features .features-item ul li:last-child {
  padding-bottom: 0;
}

.features .features-item ul i {
  font-size: 20px;
  padding-right: 4px;
  color: var(--accent-color);
}

.features .features-item img {
  border: 6px solid var(--surface-color);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
}

.features .features-item .features-img-bg {
  position: relative;
  min-height: 500px;
}

@media (max-width: 640px) {
  .features .features-item .features-img-bg {
    min-height: 300px;
  }
}

.features .features-item .features-img-bg img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.features .features-item .image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

.features .features-item .image-stack .stack-back {
  grid-column: 4/-1;
  grid-row: 1;
  width: 100%;
  z-index: 1;
}

.features .features-item .image-stack .stack-front {
  grid-row: 1;
  grid-column: 1/span 8;
  margin-top: 20%;
  width: 100%;
  z-index: 2;
}
</style>