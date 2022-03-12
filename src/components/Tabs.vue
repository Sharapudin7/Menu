<template>
<div class="tabs">
    <div class="tabs__nav">
      <div class="tabs__nav_tab"
           v-for="(item, index) in filterTabs" :key="item.id"
           :class="[index == item.id ? 'tabs__nav_tab--active' : '']"
           @click="activate(+item.id)">{{item.title}}</div>
    </div>
    <div class="tabs__content">
      <div class="categories">
      <div class="category-wrapper" v-for="item in filterTabs" :key="item.id">
       <CategoryItem 
        :id="item.id"
        :title="item.title"
        :parent="item.parent_id"
        :img="item.picture"
      />
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import CategoryItem from '@/components/CategoryItem'
  export default {
    components: {
CategoryItem
    },
    data() {
      return {
        active: 0,
      }
    },
    methods: {
      activate (index) {
        this.active = index
      }
    },
    computed: {
      ...mapGetters(['categories']),
      filterTabs() {
      if (this.categories?.categories_menu) {
      return Object.values(this.categories.categories_menu).filter(item => Number(item.id) === this.active);
      }
    },
    }
  }
</script>

<style lang="scss" scoped>
.tabs {
  position:absolute;
  top:0;
  left:0;
  height:30%;
  width:30%;
  box-sizing:border-box;
  padding:1rem;
  &__nav {
    display:flex;
    &_tab {
      padding:1rem;
      margin:0 0.5rem 0 0;
      background:#fff;
      border-radius:0.5rem 0.5rem 0 0;
      box-shadow:inset 0 -1rem 0.75rem -1rem rgba(0,0,0,0.25);
      cursor:pointer;
      opacity:0.75;
      transition:100ms linear all;
      &--active {
        opacity:1;
        box-shadow:none;
      }
    }
  }
  &__content {
    background:#fff;
    padding:1rem;
    border-radius:0 0.5rem 0.5rem 0.5rem;
  }
}
</style>