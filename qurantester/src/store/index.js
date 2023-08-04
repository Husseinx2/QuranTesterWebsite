import Vue from 'vue'
import Vuex from 'vuex'
import apiservice from '../services/apiService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amountCorrect: 0,
    userCorrect: false,
    chapters: {},
    test: {},
  },
  getters: {
  },
  mutations: {
    CHECK_ANSWER(state, payload) {
      state.userCorrect = payload;
      if (payload == true) {
        state.amountCorrect++
      }
    },
    GENERATE_TEST(state,payload) {
      if (state.amountCorrect < 10) {
        apiservice.chapterTest(payload).then((response) => {
          state.test = response.data;
        })
      }
      else {
        state.test = {}
        state.test.question = ""
      }
      state.userCorrect = false;
    },
    GET_CHAPTERS(state) {
      apiservice.listChapters().then((response) => {
        state.chapters = response.data;
      })
    }

  },
  actions: {
  },
  modules: {
  }
})
