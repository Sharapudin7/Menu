import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchMenu(ctx) {
      const res = await fetch(
        'https://it-dag.ru/restapi/food?restaurant_id=1'
      );
      const menu = await res.json()

      ctx.commit('updateMenu', menu)
    },
    async fetchCategories(ctx) {
      const res = await fetch(
        'https://it-dag.ru/restapi/restaurant?id=1'
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
    },
    updateSearch(state, search) {
      state.search = search
    }
  },
  state: {
    menu: [],
    categories: [],
    order: [],
    search: ''
  },
  getters: {
    allMenu: state => state.menu,
    categories: state => state.categories,
    allOrder: state => state.order,
    searchFood: state => {
      return state.menu && state.menu.food ? Object.values(state.menu.food).filter(item => {
        return item.title.toLowerCase().includes(state.search)
      }
      ) : []
     },
     searchCategory: state => {
      return state.categories && state.categories.categories_menu ? Object.values(state.categories.categories_menu).filter(item => {
        return item.title.toLowerCase().includes(state.search)
      }
      ) : []
     }
  }
})