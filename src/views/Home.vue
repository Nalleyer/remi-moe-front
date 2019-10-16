<template>
  <div class="home">
    <el-container class="bg">
      <el-main>
        <el-row>
          <h1 class="lllarge">Remi.Moe</h1>
        </el-row>
        <h3>欢迎您的拜访，这里是蕾米萌</h3>
        <el-divider></el-divider>
        <div class="space"></div>
        <el-row type="flex" justify="center">
          <el-col :span="8" v-for="(entry, index) in entries" :key="index">
            <el-button circle @click="onEntryClick(entry)">
              <font-awesome-icon :icon="entry.image" />
            </el-button>
            <p>{{entry.name}}</p>
          </el-col>
        </el-row>
        <div class="space"></div>
        <h5>
          此站与zun和东方project没任何关系
          <br />在这里你只能看到一位一般人类个体的信息产物
        </h5>
      </el-main>
      <!-- <el-divider></el-divider> -->
      <el-footer height="100">
        <p>
          <font-awesome-icon icon="copyright" />2019 RemiMoe All Rights Reserved
        </p>
        <div class="lins">
          <el-link type="info" href="http://blog.remi.moe">劣等技术</el-link>
          <el-divider direction="vertical" />
          <el-link type="info" href="https://space.bilibili.com/594892">bilibili</el-link>
          <el-divider direction="vertical" />
          <el-link
            type="info"
            href="https://www.pixiv.net/member_illust.php?id=5771990&type=illust"
          >pixiv</el-link>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

interface Entry {
  id: number,
  name: string,
  image: string,
  route: string,
}

@Component({
  components: {},
})
class Home extends Vue {
  private entries: Entry[] = [
    {
      id: 1,
      name: '每月游戏',
      image: 'gamepad',
      route: '/games',
    },
  ]

  private onEntryClick(entry: Entry): void {
    this.$router.push(entry.route)
  }
}
export default Home
</script>

<style lang='stylus'>
.lllarge
  display: block
  text-align: center
  font-size: 10vw
  color: #661105

.bg
  background-color: #edf7f5
  background-image: url('../assets/home_bg1.png')
  background-repeat: no-repeat
  background-attachment: fixed
  background-position: left bottom
  background-size: 35vw, 35vh

.space
  margin-bottom: 200px
</style>
