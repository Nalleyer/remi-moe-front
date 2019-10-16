import Vue from 'vue'
import Vuex from 'vuex'

import {RemiState, Game, Games} from '@/store/type'

Vue.use(Vuex)

const state: RemiState = {
  games: [],
}

const mutations = {
  updateGames(newState: RemiState, games: Games) {
    newState.games = games
  },
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
