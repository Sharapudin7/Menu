<template>
  <div class="likes menu">
    <div class="menu-item-wrapper" v-for="item in likeMenu" :key="item.id">
      <MenuItem
        :title="item.title"
        :img="item.picture"
        :weight="item.weight"
        :cost="item.cost"
        :time="item.cooking_time"
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