<template>
  <router-link :to="{path: `/menu/${id}`, query: { restaurant_slug:  myId}}" class="menu-item">
    <div class="image">
      <img src="@/assets/images/preloader.png" alt="" class="preloader" v-if="img == 'https://it-dag.ru/storage/images/'">
      <img :src="img" alt="" v-else>
    </div>
    <span class="title">{{title}}</span>
    <div class="chars">
      <span class="weight">{{weight}}</span>
      <span class="time">{{time}}</span>
    </div>
    <span class="price">{{cost}}</span>
  </router-link>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  props: ['title', 'img', 'weight', 'cost', 'time','id'],
  computed: {
    ...mapGetters(['allId']),
    myId() {
      return this.allId;
    }
  },
  methods: {
  
  }

}
</script>