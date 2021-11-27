<template>
  <div class="menu-detail">
    <h1>{{menuItem.title}}</h1>
    <p>{{menuItem.body}}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  data() {
    return {
      menuItem: null
    }
  },
  computed: {
    ...mapGetters(['allMenu'])
  },
  created() {
    this.menuItem = this.allMenu.find(item => item.id == this.$route.params.id)
  }
}
</script>