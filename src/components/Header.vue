<template>
  <header class="header">
    <div class="logo" v-if="!showTitle">
      <img src="@/assets/images/logo.svg" alt="">
    </div>
    <div class="title" v-else>
      <h3>{{showTitle}}</h3>
    </div>
    <Search v-if="showSearch" />
  </header>
</template>

<script>
import Search from '@/components/Search'

export default {
  components: {
    Search
  },
  computed:{
    showSearch() {
      return this.$route.meta.search !== false;
    },
    showTitle() {
      return this.$route.meta.title;
    }
  },
}
</script>