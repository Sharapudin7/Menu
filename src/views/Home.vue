<template>
  <div class="home">
    <div class="post" v-for="item in allMenu" :key="item.id">
      <h2>{{item.title}}</h2>
      <p>{{item.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['allMenu'])
  },
  methods: {
    ...mapActions(['fetchMenu']),

  },
  async mounted() {
    this.fetchMenu()
  }
}
</script>
