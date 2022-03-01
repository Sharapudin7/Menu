<template>
  <div class="counter">
    <input type="button" value="-" @click="countHandler('-', id)">
    <input type="text" v-model="count">
    <input type="button" value="+" @click="countHandler('+', id)">
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions(['getOrder']),
    countHandler() {
      this.getOrder()
    }
  },
  mounted() {
    this.getOrder()
  }
}
</script>