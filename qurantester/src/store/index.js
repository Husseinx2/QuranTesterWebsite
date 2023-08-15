import Vue from 'vue'
import Vuex from 'vuex'
import apiservice from '../services/apiService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ammountCorrect: 0,
    QuestionsCount: 0,
    userCorrect: false,
    chapters: {},
    test: {},
  },
  getters: {
  },
  mutations: {
    INCREMENT(state, payload) {
      if (payload) {
        state.ammountCorrect++
      }
    },
    GET_CHAPTERS(state) {
      apiservice.listChapters().then((response) => {
        state.chapters = response.data;
      })
    },
    RESET(state) {
      state.QuestionsCount = 0;
      state.ammountCorrect = 0;
    }

  },
  actions: {
  },
  modules: {
  }
})
