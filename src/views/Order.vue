<template>
  <div class="order">
    <div class="order-nav" style="display: none">
      <button class="btn active">К заказу</button>
      <button class="btn">История</button>
    </div>
    <div class="order-items">
      <OrderItem 
        v-for="item in orderList()" 
        :key="item.id"
        :title="item.title"
        :url="item.url"
        :id="item.id"
        @deleteOrderItem="deleteOrderItem"
      />
    </div>
    <div class="order-total">
      <div class="count">Итого <span>(3 позиции)</span></div>
      <div class="price">199₽</div>
    </div>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem'

export default {
  data() {
    return {
      counter: 3
    }
  },
  components: {
    OrderItem
  },
  methods: {
    orderList(id) {
      if(id) {
        this.orderList = JSON.parse(localStorage.getItem('order')).filter(item => item.id !== id)
        localStorage.setItem('order', JSON.stringify(this.orderList))
        return JSON.parse(localStorage.getItem('order'))
      } else {
        if (localStorage.getItem('order')) {
          return JSON.parse(localStorage.getItem('order'))
        }
      }
    },
    deleteOrderItem(id) {
      this.orderList(id)
    }
  }
}
</script>
