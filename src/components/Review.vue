<template>
  <div class="review" :class="{ positive: isPositive, negative: isNegative, middle: isMiddle }">
      <div class="review__img">
          <img :src="pic">
      </div>
      <div class="review__core">
          <div class="review__core__details">
              <ul class="review__core__details__list">
                  <li class="review__core__details__list__item">{{ review.name }}</li>
                  <li class="review__core__details__list__item">{{ review.house }}</li>
                  <li class="review__core__details__list__item">{{ review.rating}}</li>
                  <li class="review__core__details__list__item">{{ review.dateOfArrival }}</li>
              </ul>
          </div>
          <div class="review__core__text">
              <p>{{ review.content }}</p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    props: ["review"],
    data() {
        return {
            pic: this.review.avatar === 'girl' ? require('../assets/girl.svg') : require('../assets/boy.svg'),
            isPositive: this.review.rating.charAt(0) >= 4 ? true : false,
            isMiddle: this.review.rating.charAt(0) == 3 ? true : false,
            isNegative: this.review.rating.charAt(0) < 2 ? true : false
        }
    }
}

</script>

<style>

</style>