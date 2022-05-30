<template>
  <div class="menu">
    <div @click="scrollTop" class="menu-item-wrapper" v-for="item in searchFood" :key="item.id">
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
import Tabs from '@/components/Tabs'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'menuList',
  components: {
    MenuItem,Tabs
  },
  computed: {
    ...mapGetters(['searchFood']),
  },
    methods: {
    ...mapMutations(['updateSearch']),
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }
  }
}
</script>