<template>
        <!-- Recent Posts Section -->
        <section id="recent-posts" class="recent-posts section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Recent Posts</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4">

    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <article>

        <div class="post-img">
          <img src="assets/img/blog/blog-1.jpg" alt="" class="img-fluid">
        </div>

        <p class="post-category">Politics</p>

        <h2 class="title">
          <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
        </h2>

        <div class="d-flex align-items-center">
          <img src="assets/img/blog/blog-author.jpg" alt="" class="img-fluid post-author-img flex-shrink-0">
          <div class="post-meta">
            <p class="post-author">Maria Doe</p>
            <p class="post-date">
              <time datetime="2022-01-01">Jan 1, 2022</time>
            </p>
          </div>
        </div>

      </article>
    </div><!-- End post list item -->

    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <article>

        <div class="post-img">
          <img src="assets/img/blog/blog-2.jpg" alt="" class="img-fluid">
        </div>

        <p class="post-category">Sports</p>

        <h2 class="title">
          <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
        </h2>

        <div class="d-flex align-items-center">
          <img src="assets/img/blog/blog-author-2.jpg" alt="" class="img-fluid post-author-img flex-shrink-0">
          <div class="post-meta">
            <p class="post-author">Allisa Mayer</p>
            <p class="post-date">
              <time datetime="2022-01-01">Jun 5, 2022</time>
            </p>
          </div>
        </div>

      </article>
    </div><!-- End post list item -->

    <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <article>

        <div class="post-img">
          <img src="assets/img/blog/blog-3.jpg" alt="" class="img-fluid">
        </div>

        <p class="post-category">Entertainment</p>

        <h2 class="title">
          <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
        </h2>

        <div class="d-flex align-items-center">
          <img src="assets/img/blog/blog-author-3.jpg" alt="" class="img-fluid post-author-img flex-shrink-0">
          <div class="post-meta">
            <p class="post-author">Mark Dower</p>
            <p class="post-date">
              <time datetime="2022-01-01">Jun 22, 2022</time>
            </p>
          </div>
        </div>

      </article>
    </div><!-- End post list item -->

  </div><!-- End recent posts list -->

</div>

</section><!-- /Recent Posts Section -->

</template>
<style lang="css" scoped>

/*--------------------------------------------------------------
# Recent Posts Section
--------------------------------------------------------------*/
.recent-posts article {
  background: var(--surface-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.recent-posts .post-img {
  max-height: 240px;
  margin: -30px -30px 15px -30px;
  overflow: hidden;
}

.recent-posts .post-category {
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-bottom: 10px;
}

.recent-posts .title {
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 20px 0;
}

.recent-posts .title a {
  color: var(--heading-color);
  transition: 0.3s;
}

.recent-posts .title a:hover {
  color: var(--accent-color);
}

.recent-posts .post-author-img {
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.recent-posts .post-author {
  font-weight: 600;
  margin-bottom: 5px;
}

.recent-posts .post-date {
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-bottom: 0;
}

</style>