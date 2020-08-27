<template>
  <div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 8}"
      placeholder="请输入你的意见"
      v-model="opinion">
    </el-input>
    <el-button type="primary" round @click="commit">提交意见</el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.baseURL='http://localhost:8080';
  export default{
    data(){
      return{
        opinion:''
      }
    },
    methods:{
      commit(){
        if(this.opinion=='' || this.opinion.replace(/(^\s*)|(\s*$)/g, "")==''){
          this.$message('请填写你宝贵的意见！');
        }else{
          axios.post('/student/addMessage',{
            opinion:this.opinion
          }).then(response=>{
            var data=response.data;
            if(data.state==2000){
              this.opinion='';
              this.$message('留言成功！');
            }else{
              this.$message(data.message);
            }
          });
        }
      }
    }
  }
</script>

<style scoped>
  .el-button{
    float: right;
    margin:20px 20px 0 0;
  }
</style>
