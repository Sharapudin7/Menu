<template>
  <router-link :to="{path: `/menu`}" class="category">
    <div class="image">
      <img :src="'https://rost05.ru/' + img" alt="">
    </div>
    <span class="title">{{name}}</span>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'name', 'img', 'parent'],
}
</script>