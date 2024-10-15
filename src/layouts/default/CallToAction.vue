<template>
        <!-- Call To Action Section -->
        <section id="call-to-action" class="call-to-action section dark-background">

<img src="../../assets/client/img/cta-bg.jpg" alt="">

<div class="container">
  <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
    <div class="col-xl-10">
      <div class="text-center">
        <h3>Call To Action</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a class="cta-btn" href="#">Call To Action</a>
      </div>
    </div>
  </div>
</div>

</section><!-- /Call To Action Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Call To Action Section
--------------------------------------------------------------*/
.call-to-action {
  padding: 80px 0;
  position: relative;
  clip-path: inset(0);
}

.call-to-action img {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.call-to-action:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.call-to-action .container {
  position: relative;
  z-index: 3;
}

.call-to-action h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--default-color);
}

.call-to-action p {
  color: var(--default-color);
}

.call-to-action .cta-btn {
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 5px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid var(--contrast-color);
  color: var(--contrast-color);
}

.call-to-action .cta-btn:hover {
  background: var(--accent-color);
  border: 2px solid var(--accent-color);
}
</style>