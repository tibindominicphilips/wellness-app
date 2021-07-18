import Vue from 'vue'
import Vuex from 'vuex'
import rootAction from "../actions/rootAction"
import rootMutation from "../mutations/rootMutation"

Vue.use(Vuex)

const defaultState = {
  questionnaire: []
}
let state = window.sessionStorage.vuexstate
if (state !== undefined && state) {
  state = JSON.parse(state)
} else {
  state = defaultState
}

export const store = new Vuex.Store({
  state: state,
  actions: rootAction,
  mutations: rootMutation,
  strict: true
})

store.subscribe((mutation, newStore) => {
  try {
    window.sessionStorage.vuexstate = JSON.stringify(newStore)
  } catch (error) {
    console.log(`A vuex operation failed with: ${JSON.stringify(error)}`)
  }
})

export default store