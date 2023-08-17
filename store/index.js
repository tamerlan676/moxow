import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
        dresses: [],
        suits: [],
        blazers: [],
        cloaks: []
    },
   mutations: {
      setDresses (state, dresses) {
        state.dresses = dresses
      },
      setSuits (state, suits) {
        state.suits = suits
      },
      setBlazers (state, blazers) {
        state.blazers = blazers
      },
      setCloaks (state, cloaks) {
        state.cloaks = cloaks
      },
    },
    actions: {
        async getDresses ({ commit }) {
            const products = await axios.get('https://moxow.ru/admin/wp-json/wp/v2/dresses?_embed&per_page=100')
            commit('setDresses', products.data)
        },
        async getSuits ({ commit }) {
            const products = await axios.get('https://moxow.ru/admin/wp-json/wp/v2/suits?_embed&per_page=100')
            commit('setSuits', products.data)
        },
        async getBlazers ({ commit }) {
            const products = await axios.get('https://moxow.ru/admin/wp-json/wp/v2/blazers?_embed&per_page=100')
            commit('setBlazers', products.data)
        },
        async getCloaks ({ commit }) {
          const products = await axios.get('https://moxow.ru/admin/wp-json/wp/v2/cloaks?_embed&per_page=100')
          commit('setCloaks', products.data)
      },
    }
  })
}

export default createStore