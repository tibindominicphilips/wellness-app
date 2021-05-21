import Vue from 'vue'
import Vuex from 'vuex'
import rootAction from "../actions/rootAction"
import rootMutation from "../mutations/rootMutation"

Vue.use(Vuex)

const defaultState = {
  questionnaire: []
}

export const store = new Vuex.Store({
  state: defaultState,
  actions: rootAction,
  mutations: rootMutation
})

export default store