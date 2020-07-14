import Vue from 'vue'
import VueCarousel from '@chenfengyuan/vue-carousel'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1
});
Vue.use(VueCarousel);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
