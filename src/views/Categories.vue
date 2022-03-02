<template>
  <div class="categories">
    <div class="category-wrapper" v-for="item in searchCategory" :key="item.id">
      <CategoryItem 
        :id="item.id"
        :title="item.title"
        :parent="item.parent_id"
        :img="item.picture"
      />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'categories',
  components: {
    CategoryItem
  },
  computed: {
    ...mapGetters(['categories']),
    ...mapGetters(['searchCategory']),
  }
}
</script>