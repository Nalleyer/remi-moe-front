<template>
  <el-container>
    <el-main>
      <h1>每月小游戏</h1>
        <!-- <li v-for="(game, index) in games" :key="index">
          <el-link :href="getLink(game.link)">[{{game.createTime}}] {{game.title}}</el-link>
        </li> -->
        <el-table :data="games" style="width: 100%" align="center" @row-click="jumpToGame">
          <el-table-column
            prop="createTime"
            label="创建日期"
            width="500">
          </el-table-column>
          <el-table-column
            prop="title"
            label="游戏名"
            width="500">
          </el-table-column>
        </el-table>
      <el-button @click="back">返回</el-button>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  State,
} from 'vuex-class'
import {RemiState, Game, Games} from '@/store/type'
import {runApi} from '@/api'

@Component({})
class GamesView extends Vue {

    get games(): Games {
      return this.stateGames
    }
    @State('games') private stateGames!: Games

    public mounted() {
      runApi('games', null, []).then((res) => {
        this.$store.commit('updateGames', res.body)
      }, (errres) => {
        alert('获取游戏列表失败，请尝试重试')
      })
    }

    private getLink(link: string): string {
      return '/pico8/' + link + '.html'
    }

    private jumpToGame(game: Game): void {
      window.open(this.getLink(game.link))
    }

    private back(): void {
      this.$router.push('/')
    }
}
export default GamesView
</script>

<style>

</style>