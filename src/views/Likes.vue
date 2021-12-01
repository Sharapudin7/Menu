<template>
  <div class="likes menu">
    <div class="menu-item-wrapper" v-for="item in likeMenu" :key="item.id">
      <MenuItem
        :title="item.title"
        :url="item.url"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  components: {
    MenuItem
  },
  computed: {
    likeMenu() {
      if (localStorage.getItem('likes')) {
        return JSON.parse(localStorage.getItem('likes'));
      }
    }
  }
}
</script>