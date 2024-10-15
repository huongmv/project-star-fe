<template>
    
    <!-- Team Section -->
    <section id="team" class="team section light-background">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-5">

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
      <div class="member-img">
        <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
        <div class="social">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Walter White</h4>
        <span>Chief Executive Officer</span>
        <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
      <div class="member-img">
        <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
        <div class="social">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Sarah Jhonson</h4>
        <span>Product Manager</span>
        <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
      <div class="member-img">
        <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
        <div class="social">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>William Anderson</h4>
        <span>CTO</span>
        <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
      <div class="member-img">
        <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
        <div class="social">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Amanda Jepson</h4>
        <span>Accountant</span>
        <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
      <div class="member-img">
        <img src="assets/img/team/team-5.jpg" class="img-fluid" alt="">
        <div class="social">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Brian Doe</h4>
        <span>Marketing</span>
        <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
      <div class="member-img">
        <img src="assets/img/team/team-6.jpg" class="img-fluid" alt="">
        <div class="social">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Josepha Palas</h4>
        <span>Operation</span>
        <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
      </div>
    </div><!-- End Team Member -->

  </div>

</div>

</section><!-- /Team Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Team Section
--------------------------------------------------------------*/
.team .member {
  position: relative;
}

.team .member .member-img {
  margin: 0 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 4px solid var(--background-color);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .team .member .member-img {
    margin: 0 60px;
  }
}

.team .member .member-img img {
  position: relative;
  z-index: 1;
}

.team .member .member-img .social {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 20px;
  transition: 0.3s;
  visibility: hidden;
  opacity: 0;
}

.team .member .member-img .social a {
  transition: 0.3s;
  color: var(--contrast-color);
  font-size: 20px;
  margin: 0 8px;
}

.team .member .member-img .social a:hover {
  color: var(--accent-color);
}

.team .member .member-info {
  margin-top: 30px;
}

.team .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 18px;
}

.team .member .member-info span {
  font-style: italic;
  display: block;
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin-bottom: 10px;
}

.team .member .member-info p {
  margin-bottom: 0;
  font-size: 14px;
}

.team .member:hover .member-img .social {
  padding-bottom: 0;
  visibility: visible;
  opacity: 1;
}
</style>