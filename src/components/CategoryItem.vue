<template>
  <router-link :to="{path: `/menu`}" class="category">
    <div class="image">
      <img :src="img" alt="">
    </div>
    <span class="title">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'title', 'img', 'parent'],
}
</script>