<template>
    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials section light-background">

<div class="container">

<div class="row align-items-center">

<div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
  <h3>Testimonials</h3>
  <p>
    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  </p>
</div>

<div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">

  <div class="swiper init-swiper">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="d-flex">
            <img src="../../assets/client/img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt="">
            <div>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <p>
            <i class="bi bi-quote quote-icon-left"></i>
            <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
            <i class="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div><!-- End testimonial item -->

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="d-flex">
            <img src="../../assets/client/img/testimonials/testimonials-2.jpg" class="testimonial-img flex-shrink-0" alt="">
            <div>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <p>
            <i class="bi bi-quote quote-icon-left"></i>
            <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
            <i class="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div><!-- End testimonial item -->

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="d-flex">
            <img src="../../assets/client/img/testimonials/testimonials-3.jpg" class="testimonial-img flex-shrink-0" alt="">
            <div>
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <p>
            <i class="bi bi-quote quote-icon-left"></i>
            <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
            <i class="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div><!-- End testimonial item -->

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="d-flex">
            <img src="../../assets/client/img/testimonials/testimonials-4.jpg" class="testimonial-img flex-shrink-0" alt="">
            <div>
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <p>
            <i class="bi bi-quote quote-icon-left"></i>
            <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
            <i class="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div><!-- End testimonial item -->

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="d-flex">
            <img src="../../assets/client/img/testimonials/testimonials-5.jpg" class="testimonial-img flex-shrink-0" alt="">
            <div>
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <p>
            <i class="bi bi-quote quote-icon-left"></i>
            <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
            <i class="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div><!-- End testimonial item -->

    </div>
    <div class="swiper-pagination"></div>
  </div>

</div>

</div>

</div>

</section><!-- /Testimonials Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Testimonials Section
--------------------------------------------------------------*/
.testimonials .info h3 {
  font-weight: 700;
  font-size: 32px;
}

.testimonials .swiper {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--surface-color);
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  min-height: 200px;
  position: relative;
  margin: 30px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  border: 6px solid var(--background-color);
  margin-right: 10px;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
}

.testimonials .testimonial-item h4 {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
  margin: 0;
}

.testimonials .testimonial-item .stars {
  margin: 10px 0;
}

.testimonials .testimonial-item .stars i {
  color: #ffc107;
  margin: 0 1px;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: color-mix(in srgb, var(--accent-color), transparent 60%);
  font-size: 26px;
  line-height: 0;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 15px auto 15px auto;
}

.testimonials .swiper-wrapper {
  height: auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
  border: none;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

@media (max-width: 767px) {

  .testimonials .testimonials-carousel,
  .testimonials .testimonials-slider {
    overflow: hidden;
  }

  .testimonials .testimonial-item {
    margin: 15px;
  }
}

</style>