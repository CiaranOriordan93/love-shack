<template>
  <div class="banner">
      <div class="banner__logo">
          <span>LS</span>
      </div>
      <div class="banner__name">
        <router-link to="/">
          <h1>Love Shack</h1>
        </router-link>
      </div>
      <div class="banner__book-now">
          <router-link to="/booking">
            <button class="banner__book-now__btn">Book Now</button>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
