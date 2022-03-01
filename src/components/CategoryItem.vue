<template>
<div>
    <router-link :to="{path: `/category/${id}`}" class="category">
    <div class="image">
      <img :src="img" alt="">
    </div>
    <span class="title">{{title}}</span>
  </router-link>
</div>
</template>

<script>
export default {
  props: ['id', 'title', 'img', 'parent'],
}
</script>