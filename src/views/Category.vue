<template>
  <div class="menu">
    <div class="menu-item-wrapper" v-for="item in filterCategory" :key="item.id">
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
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'menu',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(['allMenu']),
    filterCategory() {
    if (!this.allMenu?.food) {
      return [];
    }
    return Object.values(this.allMenu.food).filter(item =>  Number(item.category_id) === Number(this.$route.params.id));
}
  },
  methods: {
    ...mapActions(['fetchMenu']),
},
  async mounted() {
    this.fetchMenu(10)
  }
}
</script>