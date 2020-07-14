<template>
  <div class="story">
    <Banner />
    <div class="story__info">
        <div class="story__info__img">
          <img v-lazy="imgs.family">
        </div>
        <div class="story__info__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Curabitur luctus risus leo. Sed at facilisis tortor. Integer
             viverra ante sed velit mattis, non auctor justo auctor.
             Nulla lacinia et lectus nec consequat. Quisque faucibus felis
             vitae sapien porttitor luctus. Nullam blandit, nunc vel
             faucibus dignissim, ligula magna accumsan massa, non hendrerit
             massa nulla vitae odio. Vivamus elementum felis nulla, ac
             sollicitudin libero pulvinar sed. Pellentesque vulputate, augue
             et fringilla pulvinar, nisi odio ornare eros, a scelerisque est
             est ut felis. Sed id semper lacus. Aenean nec lectus laoreet,
             ullamcorper ligula nec, condimentum turpis. Vestibulum sit amet
             pellentesque sapien. Integer vitae sagittis velit.</p>
        </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'

export default {
  components: {
    Banner
  },
  data() {
    return {
      imgs: {
        family: require("../assets/family-1.jpg")
      }
    }
  }
}
</script>

<style>

</style>