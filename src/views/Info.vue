<template>
  <div class="info">
      <Banner />
      <div class="info__gallery">
          <carousel :data="data"></carousel>
      </div>

      <div class="info__cottage">
          <div class="info__cottage__heading">
            <h3>House Name</h3>
          </div>
          <div class="info__cottage__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit
                 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                 occaecat cupidatat non proident.</p>
          </div>
          <div class="info__cottage__priceing">
                <ul>
                  <li>Price per Night:</li>
                  <li>Price per Week:</li>
                </ul>
          </div>
      </div>
       <div class="info__availability">
           <div class="info__availability__heading">
                <h3>Availability</h3>   
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
            data: [
                '<div class="info__gallery__carousel info__img-1"></div>',
                '<div class="info__gallery__carousel info__img-2"></div>',
                '<div class="info__gallery__carousel info__img-3"></div>',
            ]
        }
    }
}
</script>

<style>
</style>