<template>
  <div class="home">
    <Banner />
    <Header />
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Banner,
    Nav,
    Footer
  }
}

</script>
