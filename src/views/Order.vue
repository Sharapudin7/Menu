<template>
  <div class="order">
    <div class="order-nav">
      <button class="btn active">К заказу</button>
      <button class="btn">История</button>
    </div>
    <div class="order-items">
      <OrderItem v-for="item in counter" :key="item" />
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
  }
}
</script>
