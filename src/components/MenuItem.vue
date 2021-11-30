<template>
  <router-link :to="{path: `/menu/${id}`}" class="menu-item">
    <div class="image">
      <img :src="url" alt="">
    </div>
    <span class="title">{{title}}</span>
    <div class="chars">
      <span class="weight">200г.</span>
      <span class="time">30 мин.</span>
    </div>
    <span class="price">199₽</span>
  </router-link>
</template>

<script>
export default {
  props: ['title', 'url', 'id'],
}
</script>