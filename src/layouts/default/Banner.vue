<template>
<section id="hero" class="hero section dark-background">

<img src="../../assets/client/img/hero-bg.jpg" alt="" data-aos="fade-in">

<div class="container">
  <div class="row">
    <div class="col-lg-10">
      <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
      <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
    </div>
    <div class="col-lg-5" data-aos="fade-up" data-aos-delay="300">
      <form action="forms/newsletter.php" method="post" class="php-email-form">
        <div class="sign-up-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your subscription request has been sent. Thank you!</div>
      </form>
    </div>
  </div>
</div>

</section>
</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.layout-default .hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-default .hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.layout-default .hero:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.layout-default .hero .layout-default .container {
  position: relative;
  z-index: 3;
}

.layout-default .hero h2 {
  margin: 0;
  font-size: 44px;
  font-weight: 700;
}

.layout-default .hero p {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  margin: 5px 0 0 0;
  font-size: 20px;
}

.layout-default .hero .layout-default .sign-up-form {
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--default-color) 5%, white 90%);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  display: flex;
}

.layout-default .hero .layout-default .sign-up-form input[type=email] {
  background-color: transparent;
  border: 0;
  padding: 4px 10px;
  width: 100%;
}

.layout-default .hero .layout-default .sign-up-form input[type=email]:focus-visible {
  outline: none;
}

.layout-default .hero .layout-default .sign-up-form input[type=submit] {
  border: 0;
  box-shadow: none;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  padding: 8px 20px 10px 20px;
  border-radius: 7px;
  color: var(--contrast-color);
  transition: 0.3s;
}

.layout-default .hero .layout-default .sign-up-form input[type=submit]:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

@media (max-width: 768px) {
  .layout-default .hero h2 {
    font-size: 32px;
  }

  .layout-default .hero p {
    font-size: 18px;
  }
}

</style>