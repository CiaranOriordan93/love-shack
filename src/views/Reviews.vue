<template>
  <div class="reviews">
    <Banner />
    <div class="reviews__review">
      <Review v-for="(review, key) in review" :key="key" :review="review"/>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Review from '../components/Review'
import api from '../services/api'

export default {
  components: {
    Banner,
    Review
  },
  data() {
    return {
      review: []
    }
  },
  created() {
    api.getReviews().then(response => {
      this.review = response.data.reviews;
    })
  }
}
</script>

<style>

</style>