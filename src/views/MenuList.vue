<template>
  <div class="menu">
    <div class="menu-item-wrapper" v-for="item in allMenu" :key="item.id">
      <MenuItem
        :title="item.name"
        :img="item.detail_picture"
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
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'menuList',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(['allMenu']),
  }
}
</script>