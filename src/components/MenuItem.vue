<template>
  <router-link :to="{path: `/menu/${id}`}" class="menu-item">
    <div class="image">
      <img src="@/assets/images/preloader.png" alt="" class="preloader" v-if="!img">
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
export default {
  props: ['title', 'img', 'weight', 'cost', 'time','id'],
}
</script>