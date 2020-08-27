<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="this.$router.path"
          router
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/notice">通知中心</el-menu-item>
          <el-menu-item index="/randomDuty">值日表</el-menu-item>
          <el-menu-item index="/maintain">维修登记</el-menu-item>
          <el-menu-item index="/messageBoard">留言</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <el-link :underline="false" href="http://www.qlu.edu.cn/" target="_blank">齐鲁工业大学</el-link>宿舍管理系统
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .el-header{
    padding: 0;
  }
  .el-link--inner{
      font-size: 16px;
      line-height: 1.5;
  }
  .el-footer {
      position: fixed;
      bottom:0;
      width: 100%;
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
  }
</style>
