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
                        <i class="bi bi-buildings"></i>
                        <h3>Eius provident</h3>
                        <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                    </div>
                    </div> <!-- End Icon Box -->

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                        <i class="bi bi-clipboard-pulse"></i>
                        <h3>Rerum aperiam</h3>
                        <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                    </div>
                    </div> <!-- End Icon Box -->

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                        <i class="bi bi-command"></i>
                        <h3>Veniam omnis</h3>
                        <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                    </div>
                    </div> <!-- End Icon Box -->

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                        <i class="bi bi-graph-up-arrow"></i>
                        <h3>Delares sapiente</h3>
                        <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                    </div>
                    </div> <!-- End Icon Box -->

                </div>
                </div>

            </div>
            </div>

            </section><!-- /About Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/
.layout-default .about .layout-default .content h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 20px;
  background: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
  border-radius: 7px;
  display: inline-block;
}

.layout-default .about .layout-default .content h2 {
  font-weight: 700;
}

.layout-default .about .layout-default .content p:last-child {
  margin-bottom: 0;
}

.layout-default .about .layout-default .content .layout-default .read-more {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 24px;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.layout-default .about .layout-default .content .layout-default .read-more i {
  font-size: 18px;
  margin-left: 5px;
  line-height: 0;
  transition: 0.3s;
}

.layout-default .about .layout-default .content .layout-default .read-more:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
  padding-right: 19px;
}

.layout-default .about .layout-default .content .layout-default .read-more:hover i {
  margin-left: 10px;
}

.layout-default .about .layout-default .icon-box {
  background-color: var(--surface-color);
  padding: 50px 40px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.layout-default .1);
  border-radius: 10px;
  transition: all 0.3s ease-out 0s;
}

.layout-default .about .layout-default .icon-box i {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 0;
  transition: all 0.layout-default .4s ease-out 0s;
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.layout-default .about .layout-default .icon-box h3 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
}

.layout-default .about .layout-default .icon-box p {
  margin-bottom: 0;
}

.layout-default .about .layout-default .icon-box:hover i {
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.layout-default .about .layout-default .icon-boxes .layout-default .col-md-6:nth-child(2) .layout-default .icon-box,
.layout-default .about .layout-default .icon-boxes .layout-default .col-md-6:nth-child(4) .layout-default .icon-box {
  margin-top: -40px;
}

@media (max-width: 768px) {

  .layout-default .about .layout-default .icon-boxes .layout-default .col-md-6:nth-child(2) .layout-default .icon-box,
  .layout-default .about .layout-default .icon-boxes .layout-default .col-md-6:nth-child(4) .layout-default .icon-box {
    margin-top: 0;
  }
}

</style>