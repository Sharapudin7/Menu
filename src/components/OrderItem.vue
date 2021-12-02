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
          <input type="button" value="-" @click="countHandler('-', id)">
          <input type="text" v-model="orderItemCount">
          <input type="button" value="+" @click="countHandler('+', id)">
        </div>
      </div>
    </div>
    <button class="btn delete" @click="deleteOrderItem(id)">&#10006;</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'url', 'count', 'id'],
  data() {
    return {
      orderItemCount: 1
    }
  },
  methods: {
    countHandler(btn, id) {
      this.$emit('countHandler', btn, id)
    },
    deleteOrderItem(id) {
      this.$emit('deleteOrderItem', id)
    }
  },
  mounted() {
    this.orderItemCount = this.count
  }
}
</script>