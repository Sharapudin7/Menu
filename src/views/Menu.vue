<template>
  <div class="menu">
    {{allMenu}}
    <div class="menu-item-wrapper" v-for="item in allMenu" :key="item.id">
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
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'menu',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(['allMenu'])
  },
  methods: {
    ...mapActions(['fetchMenu']),

  },
  async mounted() {
    this.fetchMenu(10)
  }
}
</script>