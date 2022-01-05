import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchMenu(ctx) {
      const res = await fetch(
        'https://rost05.ru/products.php'
      );
      const menu = await res.json()

      ctx.commit('updateMenu', menu)
    },
    async fetchCategories(ctx) {
      const res = await fetch(
        'https://rost05.ru/cat.php'
      );
      const categories = await res.json()

      ctx.commit('updateCategories', categories)
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
    updateCategories(state, categories) {
      state.categories = categories
    },
    updateOrder(state, order) {
      state.order = order
    }
  },
  state: {
    menu: [],
    categories: [],
    order: []
  },
  getters: {
    allMenu: state => state.menu,
    categories: state => state.categories,
    allOrder: state => state.order
  }
})