<template>
  <div class="nav">
    <div class="nav__selection">
      <div class="nav__selection__text">
        <h3 class="nav__selection__text__heading">About Our Cottages</h3>
        <P class="nav__selection__text__para">All our cottages have been specifically designed for couples – and
           quite unashamedly – with romance, comfort and indulgence in mind.
          Our bedroom jacuzzis accommodate two people, our beds are doubles
          or kingsize, all cottages have satellite TV, DVD players, and music
          systems and you’ll always get your own waffle bathrobe and slippers.
          Most of our cottages have their own private hot-tubs.</P>
      </div>
      <div class="nav__selection__picture">
      <router-link to="/selection" class="nav__link nav__selection__link">
            <h3>Selection Of villas</h3>
      </router-link>
      </div>
    </div>
    <div class="seperator-home"></div>
    <div class="nav__attractions">
      <div class="nav__attractions__text">
        <h3 class="nav__attractions__text__heading">Local Escapades</h3>
        <P class="nav__attractions__text__para">Here at Loveshack we are big into romance, but… we believe that romance is more than hearts
           and flowers. To us, romance is about sharing the moment. That could mean watching the sun set together
           from the top of Lough Hyne hill or sitting together under the stars of a clear, unpolluted West Cork
           night sky. And, of course, romance is about passion.</p>
      </div>
      <div class="nav__attractions__picture">
      <router-link to="local-attractions" class="nav__link nav__attractions__link">
          <h3>Local Attractions</h3>
      </router-link>
      </div>
    </div>
    <div class="seperator-home"></div>
    <div class="nav__story">
      <div class="nav__story__text">
        <h3 class="nav__story__text__heading">About Us</h3>
        <P class="nav__story__text__para">We have carefully restored authentic stone barns, stables and cottages to provide fabulous accommodation
           with bags of character. We have then sympathetically added some modern day luxuries to create a perfect
           place to relax with one another. Bedroom jacuzzis, four poster beds, flat screen TVs, DVDs and even a
           private hot-tub – so you can indulge yourselves in your own personal and private space.</p>
      </div>
      <div class="nav__story__picture">
      <router-link to="our-story" class="nav__link nav__story__link">
            <h3>Our Story</h3>
      </router-link>
      </div>
    </div>
    <div class="seperator-home"></div>
    <div class="nav__reviews">
      <div class="nav__reviews__text">
        <h3 class="nav__reviews__text__heading">What You Say</h3>
        <P class="nav__reviews__text__para">A catalog of previous customers of Loveshack and their un-censored opinions on our services.</p>
      </div>
      <div class="nav__reviews__picture">
      <router-link to="reviews" class="nav__link nav__reviews__link">
            <h3>Reviews</h3>
      </router-link>
      </div>
    </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
