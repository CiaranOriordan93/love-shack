<template>
  <div class="review">
      <div class="review__img">
          <img src="#">
      </div>
      <div class="review__core">
          <div class="review__core__details">
              <ul class="review__core__details__list">
                  <li class="review__core__details__list__item">{{ name }}</li>
                  <li class="review__core__details__list__item">{{ home }}</li>
                  <li class="review__core__details__list__item">{{ rating}}</li>
                  <li class="review__core__details__list__item">{{ date }}</li>
              </ul>
          </div>
          <div class="review__core__text">
              <p>{{ text }}</p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    props: ["date", "name", "home", "rating", "text"]
}
</script>

<style>

</style>