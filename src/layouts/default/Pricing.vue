<template>
        <!-- Pricing Section -->
        <section id="pricing" class="pricing section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Pricing</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div><!-- End Section Title -->

<div class="container" data-aos="zoom-in" data-aos-delay="100">

  <div class="row g-4">

    <div class="col-lg-4">
      <div class="pricing-item">
        <h3>Free Plan</h3>
        <div class="icon">
          <i class="bi bi-box"></i>
        </div>
        <h4><sup>$</sup>0<span> / month</span></h4>
        <ul>
          <li><i class="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
          <li><i class="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
          <li><i class="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
          <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
          <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
        </ul>
        <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
      </div>
    </div><!-- End Pricing Item -->

    <div class="col-lg-4">
      <div class="pricing-item featured">
        <h3>Business Plan</h3>
        <div class="icon">
          <i class="bi bi-rocket"></i>
        </div>

        <h4><sup>$</sup>29<span> / month</span></h4>
        <ul>
          <li><i class="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
          <li><i class="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
          <li><i class="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
          <li><i class="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
          <li><i class="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
        </ul>
        <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
      </div>
    </div><!-- End Pricing Item -->

    <div class="col-lg-4">
      <div class="pricing-item">
        <h3>Developer Plan</h3>
        <div class="icon">
          <i class="bi bi-send"></i>
        </div>
        <h4><sup>$</sup>49<span> / month</span></h4>
        <ul>
          <li><i class="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
          <li><i class="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
          <li><i class="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
          <li><i class="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
          <li><i class="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
        </ul>
        <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div>
      </div>
    </div><!-- End Pricing Item -->

  </div>

</div>

</section><!-- /Pricing Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Pricing Section
--------------------------------------------------------------*/
.pricing {
  padding: 60px 0 120px 0;
}

.pricing .section-title {
  margin-bottom: 40px;
}

.pricing .pricing-item {
  background-color: var(--surface-color);
  box-shadow: 0 3px 20px -2px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  height: 100%;
  position: relative;
  border-radius: 15px;
}

.pricing h3 {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
}

.pricing .icon {
  margin: 30px auto 20px auto;
  width: 70px;
  height: 70px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  transform-style: preserve-3d;
}

.pricing .icon i {
  color: var(--background-color);
  font-size: 28px;
  transition: ease-in-out 0.3s;
  line-height: 0;
}

.pricing .icon::before {
  position: absolute;
  content: "";
  height: 86px;
  width: 86px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent-color), transparent 80%);
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-1px);
}

.pricing .icon::after {
  position: absolute;
  content: "";
  height: 102px;
  width: 102px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent-color), transparent 90%);
  transition: all 0.3s ease-out 0s;
  transform: translateZ(-2px);
}

.pricing h4 {
  font-size: 48px;
  color: var(--accent-color);
  font-weight: 700;
  font-family: var(--heading-font);
  margin-bottom: 25px;
  text-align: center;
}

.pricing h4 sup {
  font-size: 28px;
}

.pricing h4 span {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 18px;
  font-weight: 400;
}

.pricing ul {
  padding: 20px 0;
  list-style: none;
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  text-align: left;
  line-height: 20px;
}

.pricing ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.pricing ul i {
  color: #059652;
  font-size: 24px;
  padding-right: 3px;
}

.pricing ul .na {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.pricing ul .na i {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.pricing ul .na span {
  text-decoration: line-through;
}

.pricing .buy-btn {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  display: inline-block;
  padding: 8px 40px 10px 40px;
  border-radius: 50px;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
  transition: none;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--heading-font);
  transition: 0.3s;
}

.pricing .buy-btn:hover {
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.pricing .featured {
  z-index: 10;
  border: 3px solid var(--accent-color);
}

@media (min-width: 992px) {
  .pricing .featured {
    transform: scale(1.15);
  }
}
</style>