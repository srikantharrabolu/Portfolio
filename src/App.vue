<template>
  <div id="app">
    <image-content-section v-if="this.$route.path =='/'" />
    <div class="routes" v-else>
      <header-section />
      <router-view></router-view>
      <footer>
        <footer-section/>
        <copy-right/>
      </footer>
    </div>    
  </div>
</template>

<script>
import ImageContentSection from './components/ImageContentSection.vue';
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import CopyRight from './components/CopyRight.vue'
export default {
  name: 'App',
  components: {
    ImageContentSection,
    HeaderSection,
    FooterSection,
    CopyRight
  }
}
</script>

<style>
#app {
  color: #dadada;
}
body {
  background: #20222a;
  font-family: sans-serif;
  margin: 0;
}
</style>
