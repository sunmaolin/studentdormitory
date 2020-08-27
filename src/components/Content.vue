<template>
  <div>
    <el-container>
      <el-header height>{{notice.title}}</el-header>
      <el-main>{{notice.content}}</el-main>
      <el-footer>
        <div class="foot">
          发布单位：<span>{{notice.publishUser}}</span><br><br>
          发布时间：<span>{{notice.createTime}}</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        notice:{}
      }
    },
    created() {
      if(!this.$route.params.notice){
        //重定向
        this.$router.push('/notice');
      }else{
        this.notice=this.$route.params.notice;
      }
    }
  }
</script>

<style scoped>
  .el-header{
    text-align: center;
    height:30px
  }
  .foot{
    float: right;
    margin: 20px 20px 0 0;
  }
</style>
