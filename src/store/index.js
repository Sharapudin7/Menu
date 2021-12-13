import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchMenu(ctx) {
      const res = await fetch(
        'https://ich.djig-it.ru/products.php'
      );
      const menu = await res.json()

      ctx.commit('updateMenu', menu)
    },
    async getOrder(ctx) {
      let order = JSON.parse(localStorage.getItem('order'))
      ctx.commit('updateOrder', order)
    }
  },
  mutations: {
    updateMenu(state, menu) {
      state.menu = menu
    },
    updateOrder(state, order) {
      state.order = order
    }
  },
  state: {
    menu: [],
    order: []
  },
  getters: {
    allMenu: state => state.menu,
    allOrder: state => state.order
  }
})