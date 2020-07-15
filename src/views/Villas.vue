<template>
  <div class="villas">
    <Banner />
    <div class="villas__option">
        <router-link to="selection/Drumboy">
          <div class="villas__option__container-1">
            <img class="villas__option__container-1-img" v-lazy="imgs.drumboy">
          </div>
        </router-link>
          
        <div class="villas__name">
          <h3 class="villas__name__text">Drumboy</h3>
        </div>

        <div class="villas__info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus fringilla,
             dapibus augue vitae, tincidunt purus. Nullam vitae leo diam. Curabitur pulvinar
             finibus laoreet. Nam turpis tellus, molestie vitae lorem vitae, convallis finibus
             mi. Nulla vitae erat diam. Aliquam interdum orci vel congue dictum. Aliquam erat
             volutpat</p>
        </div>
    </div>

    <div class="villas__option">
      <router-link to="selection/Foxfield">
          <div class="villas__option__container-2">
            <img class="villas__option__container-2-img" v-lazy="imgs.foxfield">
          </div>
        </router-link>

        <div class="villas__name">
          <h3 class="villas__name__text">Foxfield</h3>
        </div>

        <div class="villas__info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus fringilla,
             dapibus augue vitae, tincidunt purus. Nullam vitae leo diam. Curabitur pulvinar
             finibus laoreet. Nam turpis tellus, molestie vitae lorem vitae, convallis finibus
             mi. Nulla vitae erat diam. Aliquam interdum orci vel congue dictum. Aliquam erat
             volutpat</p>
        </div>
    </div>

    <div class="villas__option">
      <router-link to="selection/Cloone">
          <div class="villas__option__container-3">
            <img class="villas__option__container-3-img" v-lazy="imgs.cloone">
          </div>
        </router-link>

        <div class="villas__name">
          <h3 class="villas__name__text">Cloone</h3>
        </div>

        <div class="villas__info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus fringilla,
             dapibus augue vitae, tincidunt purus. Nullam vitae leo diam. Curabitur pulvinar
             finibus laoreet. Nam turpis tellus, molestie vitae lorem vitae, convallis finibus
             mi. Nulla vitae erat diam. Aliquam interdum orci vel congue dictum. Aliquam erat
             volutpat</p>
        </div>
    </div>

    <div class="villas__option">
      <router-link to="selection/Annaduff">
          <div class="villas__option__container-4">
            <img class="villas__option__container-4-img" v-lazy="imgs.annaduff">
          </div>
        </router-link>

        <div class="villas__name">
          <h3 class="villas__name__text">Annaduff</h3>
        </div>

        <div class="villas__info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus fringilla,
             dapibus augue vitae, tincidunt purus. Nullam vitae leo diam. Curabitur pulvinar
             finibus laoreet. Nam turpis tellus, molestie vitae lorem vitae, convallis finibus
             mi. Nulla vitae erat diam. Aliquam interdum orci vel congue dictum. Aliquam erat
             volutpat</p>
        </div>
    </div>

    <div class="villas__option">
      <router-link to="selection/Aughnashelin">
          <div class="villas__option__container-5">
            <img class="villas__option__container-5-img" v-lazy="imgs.aughnashelin">
          </div>
        </router-link>

        <div class="villas__name">
          <h3 class="villas__name__text">Aughnashelin</h3>
        </div>

        <div class="villas__info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus fringilla,
             dapibus augue vitae, tincidunt purus. Nullam vitae leo diam. Curabitur pulvinar
             finibus laoreet. Nam turpis tellus, molestie vitae lorem vitae, convallis finibus
             mi. Nulla vitae erat diam. Aliquam interdum orci vel congue dictum. Aliquam erat
             volutpat</p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default {
  components: {
    Banner,
    Footer
  },
  data() {
    return {
      imgs: {
        drumboy: require("../assets/house-outside.jpg"),
        foxfield: require("../assets/house-outside-2.jpg"),
        cloone: require("../assets/house-outside-3.jpg"),
        annaduff: require("../assets/house-outside-4.jpg"),
        aughnashelin: require("../assets/house-outside-5.jpg")
      }
    }
  }
}
</script>

<style>

</style>