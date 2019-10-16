<template>
  <div class="home">
    <el-container class="home-bg">
      <el-col :span="10">
        <div class="space-bg"></div>
        <img alt="home bg" src="../assets/home_bg1.png" width="100%" align="bottom" />
      </el-col>
      <el-col :span="14">
        <el-row>
          <div class="space-title"></div>
          <p id="lllarge">remi.moe</p>
        </el-row>
        <el-row>
          <div class="space-working"></div>
          <Working/>
        </el-row>
          <router-link to="/debug">debug</router-link>
        <el-footer>
          <div class="space-footer"></div>
          <el-divider></el-divider>
          <el-link type="info" href="http://blog.remi.moe">劣等技术</el-link> | <el-link type="info" href="https://space.bilibili.com/594892">bilibili</el-link> | <el-link type="info" href="https://www.pixiv.net/member_illust.php?id=5771990&type=illust">pixiv</el-link>
        </el-footer>
      </el-col>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Working from '@/components/Working.vue'

@Component({
  components: {
    Working,
  },
})
export default class Building extends Vue {}
</script>

<style lang="stylus">
#lllarge
  font-size: 180px
  color: #661105
  margin-bottom: 10px

.space-title
  margin-top: 280px

.space-bg
  margin-top: 220px

.space-working
  margin-top: 50px
.space-footer
  margin-top: 210px

.el-main
  padding: 0

.home-bg
  background-color: #cae2e1
</style>
