<template>
  <div class="menu-detail" v-if="menuItemDetail">
    <AddToOrder/>
    <button class="btn menu-detail__back" @click="goBack">
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1L1 5.68393L5.81607 10.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="btn menu-detail__like" @click="addToLikes">
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.59077 -4.57668e-05C8.97052 6.24259e-05 8.36146 0.165256 7.82616 0.478572C7.29085 0.791888 6.84859 1.24203 6.54477 1.78279C6.24088 1.24191 5.79848 0.791676 5.26301 0.478353C4.72754 0.165029 4.11831 -9.15756e-05 3.4979 -4.57668e-05C2.54773 0.0512709 1.65392 0.466927 1.0024 1.16046C0.350886 1.85399 -0.00817802 2.772 -9.53272e-05 3.72352C-9.53272e-05 8.57578 6.54477 11.961 6.54477 11.961C6.54477 11.961 13.0896 8.57751 13.0896 3.72352C13.0977 2.77185 12.7385 1.85372 12.0868 1.16017C11.4351 0.466617 10.5411 0.0510554 9.59077 -4.57668e-05V-4.57668e-05Z" fill="white"/>
      </svg>
    </button>
    <div class="menu-detail__image">
      <img :src="menuItemDetail.url" alt="">
    </div>
    <h2 class="menu-detail__title">{{menuItemDetail.title}}</h2>
    <div class="chars menu-detail__chars">
      <span class="weight">200г.</span>
      <span class="time">30 мин.</span>
    </div>
    <div class="menu-detail__price-block">
      <span class="price">199₽</span>
      <div class="counter">
        <input type="button" value="-" @click="countHandler('-')">
        <input type="text" v-model="menuItemCount">
        <input type="button" value="+" @click="countHandler('+')">
      </div>
    </div>
    <div class="menu-detail__description">
      Короткое описание блюда и его состав, в несколько строк, примерно два -три, можно и до пяти
    </div>

    <div class="recommend menu">
      <!-- <div class="menu-item-wrapper" v-for="item in allMenu" :key="item.id">
        <MenuItem
          :title="item.title"
          :url="item.url"
          :id="item.id"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import AddToOrder from '@/components/AddToOrder'
import MenuItem from '@/components/MenuItem'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  data() {
    return {
      menuItemCount: 1,
    }
  },
  components: {
    AddToOrder, MenuItem
  },
  computed: {
    ...mapGetters(['allMenu']),
    menuItemDetail() {
      return this.allMenu.find(item => item.id == this.$route.params.id)
    }
  },
  methods: {
    countHandler(btn) {
      if (btn == '-' && this.menuItemCount > 1) {
        this.menuItemCount -= 1
      } else if (btn == '+' && this.menuItemCount < 15) {
        this.menuItemCount += 1
      }
    },
    goBack() {
      history.back()
    },
    addToLikes() {
      localStorage.setItem(this.menuItemDetail.id, this.menuItemDetail.title)
    }
  }
}
</script>