<template>
  <div class="order">
    <div class="order-nav" style="display: none">
      <button class="btn active">К заказу</button>
      <button class="btn">История</button>
    </div>
    <div class="order-items">
      <OrderItem 
        v-for="item in order" 
        :key="item.id"
        :name="item.name"
        :img="item.detail_picture"
        :cost="item.cost"
        :weight="item.weight"
        :count="item.count"
        :id="item.id"
        @deleteOrderItem="deleteOrderItem"
        @countHandler="countHandler"
      />
    </div>
    <div class="order-total" v-if="order">
      <div class="count">Итого <span>(3 позиции)</span></div>
      <div class="price">199₽</div>
    </div>
    <!-- <div class="order-empty">
      <strong>В еще ничего не добавили в заказ</strong>
    </div> -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import OrderItem from '@/components/OrderItem'

export default {
  data() {
    return {
      order: null,
    }
  },
  components: {
    OrderItem
  },
  computed: {
    ...mapGetters(['allOrder'])
  },
  methods: {
    ...mapActions(['getOrder']),
    orderList(id) {
      if(id) {
        this.order = JSON.parse(localStorage.getItem('order')).filter(item => item.id !== id)
        localStorage.setItem('order', JSON.stringify(this.order))
      } else {
        if (localStorage.getItem('order')) {
          this.order = JSON.parse(localStorage.getItem('order'))
        }
      }
    },
    deleteOrderItem(id) {
      this.orderList(id)
      this.getOrder()
    },
    countHandler(btn, id) {
      this.order = JSON.parse(localStorage.getItem('order'))
      console.log(this.order)
    }
  },
  mounted() {
    this.orderList()
    this.getOrder()
  }
}
</script>
