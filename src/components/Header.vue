<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="">
    </div>
    <Search/>
  </header>
</template>

<script>
import Search from '@/components/Search'

export default {
  components: {
    Search
  }
}
</script>