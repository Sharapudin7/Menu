import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchMenu(ctx, limit = 10) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/photos?_limit=' + limit
      );
      const menu = await res.json()

      ctx.commit('updateMenu', menu)
    }
  },
  mutations: {
    updateMenu(state, menu) {
      state.menu = menu
    }
  },
  state: {
    menu: []
  },
  getters: {
    allMenu(state) {
      return state.menu
    }
  },
  modules: {

  }
})