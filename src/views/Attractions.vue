<template>
  <div class="attractions">
    <Banner />
    <div class="attractions__nav bg-1">
        <h3 class="attractions__nav__heading">Attractions of Ireland</h3>
        <div class="attractions__nav__img" ref="divAsTarget">
          <img v-lazy="imgs.ireland">
        </div>
        <div class="attractions__nav__links">
          <ul class="attractions__nav__list">
              <li class="attractions__nav__list__item">Wild Atlantic Way</li>
              <li class="attractions__nav__list__item">Giants Causeway</li>
              <li class="attractions__nav__list__item">Tayto Park</li>
              <li class="attractions__nav__list__item">Cliffs of Moher</li>
          </ul>
        </div>
    </div>
    <div class="attractions__location__container">
      <div class="attractions__location bg-2">
        <h3>The Wild Atlantic Way</h3>
        <div class="attractions__location__img">
          <img v-lazy="imgs.wildAtlanticWay">
        </div>
        <div class="attractions__location__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vel est iaculis, dignissim ipsum ac, euismod mi. Pellentesque
            at vulputate augue. Pellentesque dolor tellus, aliquet ut feugiat
            nec, feugiat eu lorem. Phasellus fringilla turpis ut congue porta.
            Fusce auctor nunc elit, vel aliquam turpis consequat et. Nam
            risus tellus, gravida in congue quis, vestibulum non ligula. Ut
            vitae leo odio. Donec convallis egestas erat eget tristique. Donec
            varius vulputate quam, vel convallis justo hendrerit finibus</p>
        </div>
      </div>
      <div class="attractions__location bg-1">
        <h3>The Giants Causeway</h3>
        <div class="attractions__location__img">
          <img v-lazy="imgs.giantsCauseway">
        </div>
        <div class="attractions__location__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vel est iaculis, dignissim ipsum ac, euismod mi. Pellentesque
            at vulputate augue. Pellentesque dolor tellus, aliquet ut feugiat
            nec, feugiat eu lorem. Phasellus fringilla turpis ut congue porta.
            Fusce auctor nunc elit, vel aliquam turpis consequat et. Nam
            risus tellus, gravida in congue quis, vestibulum non ligula. Ut
            vitae leo odio. Donec convallis egestas erat eget tristique. Donec
            varius vulputate quam, vel convallis justo hendrerit finibus</p>
        </div>
      </div>
      <div class="attractions__location bg-2">
        <h3>Tayto Park</h3>
        <div class="attractions__location__img">
          <img v-lazy="imgs.taytoPark">
        </div>
        <div class="attractions__location__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vel est iaculis, dignissim ipsum ac, euismod mi. Pellentesque
            at vulputate augue. Pellentesque dolor tellus, aliquet ut feugiat
            nec, feugiat eu lorem. Phasellus fringilla turpis ut congue porta.
            Fusce auctor nunc elit, vel aliquam turpis consequat et. Nam
            risus tellus, gravida in congue quis, vestibulum non ligula. Ut
            vitae leo odio. Donec convallis egestas erat eget tristique. Donec
            varius vulputate quam, vel convallis justo hendrerit finibus</p>
        </div>
      </div>
      <div class="attractions__location bg-1">
        <h3>Cliffs of Moher</h3>
        <div class="attractions__location__img">
          <img v-lazy="imgs.cliffsOfMoher">
        </div>
        <div class="attractions__location__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vel est iaculis, dignissim ipsum ac, euismod mi. Pellentesque
            at vulputate augue. Pellentesque dolor tellus, aliquet ut feugiat
            nec, feugiat eu lorem. Phasellus fringilla turpis ut congue porta.
            Fusce auctor nunc elit, vel aliquam turpis consequat et. Nam
            risus tellus, gravida in congue quis, vestibulum non ligula. Ut
            vitae leo odio. Donec convallis egestas erat eget tristique. Donec
            varius vulputate quam, vel convallis justo hendrerit finibus</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner';

export default {
  components: {
    Banner
  },
  data() {
    return {
      imgs: {
        ireland: require("../assets/ireland_pic.jpg"),
        wildAtlanticWay: require("../assets/WAW.jpg"),
        giantsCauseway: require("../assets/giants-causeway.jpg"),
        cliffsOfMoher: require("../assets/cliffs-moher.jpg"),
        taytoPark: require("../assets/tayto-park.jpg")
      }
    }
  }
}
</script>

<style>

</style>