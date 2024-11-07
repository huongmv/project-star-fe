<template>
  <div  class="hold-transition lockscreen">
    <div class="lockscreen-wrapper">
      <div class="lockscreen-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      <!-- User name -->
      <div class="lockscreen-name">John Doe</div>

      <!-- START LOCK SCREEN ITEM -->
      <div class="lockscreen-item">
        <!-- lockscreen image -->
        <div class="lockscreen-image">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRb8BMw3RWhIF-wAiHpwibf7h0SNZUZRa0qA0IQ-d5p3EuNL0zR" alt="User Image" />
        </div>
        <!-- /.lockscreen-image -->

        <!-- lockscreen credentials (contains the form) -->
        <form class="lockscreen-credentials">
          <div class="input-group">
            <input
              type="password"
              class="form-control"
              placeholder="password"
            />

            <div class="input-group-append">
              <button type="button" class="btn">
                <i class="fas fa-arrow-right text-muted"></i>
              </button>
            </div>
          </div>
        </form>
        <!-- /.lockscreen credentials -->
      </div>
      <!-- /.lockscreen-item -->
      <div class="help-block text-center">
        Enter your password to retrieve your session
      </div>
      <div class="text-center">
        <a href="login.html">Or sign in as a different user</a>
      </div>
      <div class="lockscreen-footer text-center">
        Copyright &copy; 2014-2021
        <b><a href="https://adminlte.io" class="text-black">AdminLTE.io</a></b
        ><br />
        All rights reserved
      </div>
    </div>
  </div>
</template>
