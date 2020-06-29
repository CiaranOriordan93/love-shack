<template>
  <div class="reviews">
    <Banner />
    <div class="reviews__review">
      <Review />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Review from '../components/Review'

export default {
  components: {
    Banner,
    Review
  }
}
</script>

<style>

</style>