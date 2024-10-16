<template>
  <!-- Layout Header ( Navbar ) -->
  <a-layout-header class="">
    <div
      class="container-fluid position-relative d-flex align-items-center justify-content-between"
    >
      <a
        href="index.html"
        class="logo d-flex align-items-center me-auto me-xl-0"
      >

        <h1 class="sitename">Append</h1>
        <span>.</span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html#hero" class="active">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#portfolio">Portfolio</a></li>
          <li><a href="index.html#pricing">Pricing</a></li>
          <li><a href="index.html#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <!-- <li class="dropdown">
            <a href="#"
              ><span>Dropdown</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i
            ></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown">
                <a href="#"
                  ><span>Deep Dropdown</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i
                ></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> -->
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#about">Get Started</a>
    </div>

  </a-layout-header>
  <!-- / Layout Header ( Navbar ) -->
</template>

<script setup lang="ts">
import '../../assets/client/css/client.css'
</script>

<style lang="scss" scoped>
.nav-link svg {
  margin-right: 5px;
  vertical-align: middle;
}
.nav-link span {
  vertical-align: middle;
}
.ant-menu-submenu-popup {
  width: 100%;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Navmenu - Desktop */
@media (min-width: 1200px) {
  .layout-default .navmenu {
    padding: 0;
  }

  .layout-default .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .layout-default .navmenu li {
    position: relative;
  }

  .layout-default .navmenu a,
  .layout-default .navmenu a:focus {
    color: var(--nav-color);
    padding: 18px 15px;
    font-size: 16px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0 .3s;
  }

  .layout-default .navmenu a i,
  .layout-default .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0 .3s;
  }

  .layout-default .navmenu li:last-child a {
    padding-right: 0;
  }

  .layout-default .navmenu li:hover>a,
  .layout-default .navmenu .layout-default .active,
  .layout-default .navmenu .layout-default .active:focus {
    color: var(--nav-hover-color);
  }

  .layout-default .navmenu .layout-default .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0 .3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .layout-default .navmenu .layout-default .dropdown ul li {
    min-width: 200px;
  }

  .layout-default .navmenu .layout-default .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .layout-default .navmenu .layout-default .dropdown ul a i {
    font-size: 12px;
  }

  .layout-default .navmenu .layout-default .dropdown ul a:hover,
  .layout-default .navmenu .layout-default .dropdown ul .layout-default .active:hover,
  .layout-default .navmenu .layout-default .dropdown ul li:hover>a {
    color: var(--nav-dropdown-hover-color);
  }

  .layout-default .navmenu .layout-default .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .layout-default .navmenu .layout-default .dropdown .layout-default .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .layout-default .navmenu .layout-default .dropdown .layout-default .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Navmenu - Mobile */
@media (max-width: 1199px) {
  .layout-default .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0 .3s;
  }

  .layout-default .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .layout-default .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    overflow-y: auto;
    transition: 0 .3s;
    z-index: 9998;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .layout-default .navmenu a,
  .layout-default .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0 .3s;
  }

  .layout-default .navmenu a i,
  .layout-default .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0 .3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .layout-default .navmenu a i:hover,
  .layout-default .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .layout-default .navmenu a:hover,
  .layout-default .navmenu .layout-default .active,
  .layout-default .navmenu .layout-default .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .layout-default .navmenu .layout-default .active i,
  .layout-default .navmenu .layout-default .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .layout-default .navmenu .layout-default .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    box-shadow: none;
    transition: all 0 .5s ease-in-out;
  }

  .layout-default .navmenu .layout-default .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .layout-default .navmenu .layout-default .dropdown>.layout-default .dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .layout-default .mobile-nav-active {
    overflow: hidden;
  }

  .layout-default .mobile-nav-active .layout-default .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .layout-default .mobile-nav-active .layout-default .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0 .3s;
  }

  .layout-default .mobile-nav-active .layout-default .navmenu>ul {
    display: block;
  }
}

</style>
