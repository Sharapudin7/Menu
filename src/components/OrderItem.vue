<template>
  <div class="order-item">
    <div class="image">
      <img :src="url" alt="">
    </div>
    <div class="main">
      <div class="title-block">
        <span class="title">{{title}}</span>
        <span class="weight">420 г</span>
      </div>
      <div class="price-block">
        <div class="price">199₽</div>
        <div class="counter">
          <input type="button" value="-" @click="countHandler('-')">
          <input type="text" v-model="orderItemCount">
          <input type="button" value="+" @click="countHandler('+')">
        </div>
      </div>
    </div>
    <button class="btn delete" @click="deleteOrderItem(id)">&#10006;</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'url', 'id'],
  data() {
    return {
      orderItemCount: 1
    }
  },
  methods: {
    countHandler(btn) {
      if (btn == '-' && this.orderItemCount > 1) {
        this.orderItemCount -= 1
      } else if (btn == '+' && this.orderItemCount < 15) {
        this.orderItemCount += 1
      }
    },
    deleteOrderItem(id) {
      this.$emit('deleteOrderItem', id)
    }
  }
}
</script>