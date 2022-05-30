<template>
<div>
    <router-link :to="{path: `/category/${id}`, query: { restaurant_slug:  myId}}" class="category">
    <div class="image">
      <img :src="img" alt="">
    </div>
    <span class="title">{{title}}</span>
  </router-link>
</div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  props: ['id', 'title', 'img', 'parent'],
  computed: {
    ...mapGetters(['allId']),
    myId() {
      return this.allId;
    }
  }
}
</script>