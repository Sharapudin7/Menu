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
        :title="item.title"
        :img="item.picture"
        :cost="item.cost"
        :weight="item.weight"
        :count="item.count"
        :id="item.id"
        @deleteOrderItem="deleteOrderItem"
        @countHandler="countHandler"
      />
    </div>
    <div class="order-total" v-if="order.length">
      <div class="count">Итого <span>({{totalPosition}} позиции)</span></div>
      <div class="price">{{costTotal}}</div>
    </div>
    <div class="order-total" v-else>Вы еще не добавили заказ</div>
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
    ...mapGetters(['allOrder']),

    costTotal() {
      if(this.order.length) {
      let result = [];
      for (let item of this.order) {
        let cost = Number.parseInt(item.cost)
        result.push(item.count * cost);
      }
      result = result.reduce(function(el, sum) {
        return el + sum
      })
      return result;
      }
      else {
        return 0;
      }
    },
    totalPosition() {
      if(this.order.length) {
      let res = [];
      for (let item of this.order) {
        res.push(item.count);
      }
      res = res.reduce(function(el, sum) {
        return el + sum
      })
      return res;
      }
      else {
        return 0;
      }
    }
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
