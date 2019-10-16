import Vue from 'vue'
import Vuex from 'vuex'

import {RemiState, Game, Games} from '@/store/type'

Vue.use(Vuex)

const state: RemiState = {
  games: [{
    id: 1,
    title: '测试游戏',
    link: 'tmp',
    crateTime: new Date(),
  }],
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
