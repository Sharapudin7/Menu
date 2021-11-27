<template>
  <div class="home">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
// import Menu from '@/views/Menu'

export default {
  name: 'Home',
  components: {
    Header
  },
}
</script>
