<template>
  <div class="categories">
    <div @click="scrollTop" class="category-wrapper" v-for="item in filterCategory" :key="item.id">
       <CategoryItem 
        :id="item.id"
        :title="item.title"
        :parent="item.parent_id"
        :img="item.picture"
      />
    </div>
    <div @click="scrollTop" class="menu-item-wrapper" v-for="item in filterFood" :key="item.id">
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
import CategoryItem from '@/components/CategoryItem'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'menu',
  components: {
    MenuItem,CategoryItem
  },
  computed: {
    ...mapGetters(['allMenu', 'categories']),
    filterCategory() {
    if (this.categories?.categories_menu) {
     return Object.values(this.categories.categories_menu).filter(item =>  Number(item.parent_id) === Number(this.$route.params.id));
    }
  },
    filterFood() {
      if (this.allMenu?.food) {
      return Object.values(this.allMenu.food).filter(item =>  Number(item.category_id) === Number(this.$route.params.id));
    }
    }
  },
  methods: {
    ...mapActions(['fetchMenu']),
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }
},
  async mounted() {
    this.fetchMenu(10)
  }
}
</script>