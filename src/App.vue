<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '@/assets/css/style.scss';
</style>
