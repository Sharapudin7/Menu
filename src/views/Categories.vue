<template>
  <div class="categories">
    <div class="category-wrapper" v-for="item in list" :key="item">
      <CategoryItem />
    </div>
  </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'

export default {
  name: 'categories',
  data() {
    return {
      list: 10
    }
  },
  components: {
    CategoryItem
  }
}
</script>