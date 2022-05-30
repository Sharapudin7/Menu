import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchMenu(ctx) {
      let urlData = location.search.substr(1)
      .split('&')
      .reduce(function (res, a) {
          var t = a.split('=');
          res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
          return res;
      },{});
  
      const id = urlData.restaurant_slug;
      
      const res = await fetch(
        'https://djigit-menu.ru/restapi/food?restaurant_slug=' + id  
      );
      const menu = await res.json()
      ctx.commit('updateMenu', menu)
      ctx.commit('updateId', id)
  },
    async fetchCategories(ctx) {
      let urlData = location.search.substr(1)
      .split('&')
      .reduce(function (res, a) {
          var t = a.split('=');
          res[decodeURIComponent(t[0])] = t.length == 1 ? null : decodeURIComponent(t[1]);
          return res;
      },{});
      
      const id = urlData.restaurant_slug;
      const res = await fetch(
        'https://djigit-menu.ru/restapi/restaurant?slug=' + id 
      );
      const categories = await res.json()

      ctx.commit('updateCategories', categories)
    },
    async getOrder(ctx) {
      let order = JSON.parse(localStorage.getItem('order'))
      ctx.commit('updateOrder', order)
    }},
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
    }, 
    updateId(state, id) {
      state.id = id
    }
  },
  state: {
    menu: [],
    categories: [],
    order: [],
    search: '',
    id: ''
  },
  getters: {
    allMenu: state => state.menu,
    categories: state => state.categories,
    allOrder: state => state.order,
    allId: state => state.id,

    searchFood: state => {
      return state.menu && state.menu.food ? Object.values(state.menu.food).filter(item => {
        return item.title.toLowerCase().includes(state.search.toLowerCase())
      }
      ) : []
     },
     searchCategory: state => {
      return state.categories && state.categories.categories_menu ? Object.values(state.categories.categories_menu).filter(item => {
        if (item.parent_id == null) {
          return item.title.toLowerCase().includes(state.search.toLowerCase())
        }
      }
      ) : []
     }
  }
})