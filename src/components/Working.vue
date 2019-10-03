<template>
  <el-row type="flex" justify="end">
    <el-col :span="12">
      <h2 class="text-right working">施工中</h2>
    </el-col>
    <el-col :span="12" pull="3" align="middle">
      <el-row>
        <div class="space"></div>
        <h2 v-loading="isLoading"> </h2>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})

class Working extends Vue {
  private isLoading: boolean = true
}
export default Working
</script>


<style lang="stylus">
.text-right
  text-align: right
.working
  color: #B7A9D0

h2
  font-size: 80px
  margin-top: 20px
.space
  margin-top: 40px

</style>