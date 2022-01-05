<template>
  <div id="app">
    <div class="container">
      <Header v-if="showHeader"/>
      <router-view/>
    </div>
    <Navbar v-if="showNavbar"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar.vue'
import {mapActions} from 'vuex'

export default {
  components: {
    Navbar, Header
  },
  data() {
    return {
      json: null
    }
  },
  computed:{
    showNavbar() {
      return this.$route.meta.navbar!==false;
    },
    showHeader() {
      return this.$route.meta.header!==false;
    }
  },
  methods: {
    ...mapActions(['fetchMenu']),
    ...mapActions(['fetchCategories'])
  },
  async mounted() {
    this.fetchMenu()
    this.fetchCategories()
  }
}
</script>

<style lang="scss">
@import '@/assets/css/style.scss';
</style>
