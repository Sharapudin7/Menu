<template>
  <div class="info">
    <!-- <button class="btn info__back" @click="goBack">
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1L1 5.68393L5.81607 10.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button> -->
    <div class="info__banner">
      <img :src="info.restaurant_picture" alt="">
      <div class="logo">
        <img :src="info.restaurant_logo" alt="" class="main__logo">
      </div>
    </div>
<!-- "restaurant_logo -->
    <h3 class="title">{{info.restaurant_name}}</h3>
    <span class="adress">{{info.restaurant_address}}</span>
    <a :href="`tel:${info.restaurant_phone}`" class="phone">{{info.restaurant_phone}}</a>
    <div class="description">
      {{info.restaurant_description}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'info',
  methods: {
    goBack() {
      history.back()
    }
  },
  computed: {
     ...mapGetters(['allMenu']),
     info() {
       return this.allMenu
     }
  }
}
</script>