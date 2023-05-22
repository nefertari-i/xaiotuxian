<script setup>
import HomeBanner from './modules/HomeBanner.vue'
import HomeCategory from './modules/HomeCategory.vue'
import HomeNew from './modules/HomeNew.vue'
import HomeHot from './modules/HomeHot.vue'
import homeProduct from './modules/HomeProduct.vue'
// import HomePanel from './modules/HomePanel.vue';
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>