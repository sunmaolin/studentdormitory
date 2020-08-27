<template>
  <div>
    <router-link v-for="notice in notices" :key="notice.nid" :to="{name:'content',params:{notice:notice}}">
      <el-row :gutter="20">
        <el-col :span="6"><el-link type="primary">{{notice.title}}</el-link></el-col>
        <el-col :span="6" :offset="3">{{notice.publishUser}}</el-col>
        <el-col :span="6" :offset="3">{{notice.createTime}}</el-col>
      </el-row>
      <el-divider></el-divider>
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.baseURL='http://localhost:8080';
  export default{
    data(){
      return {
        notices:[]
      }
    },
    created() {
      axios.get('/dormitory/findAllNotice').then(response=>{
        this.notices=response.data.data;
      });
    }
  }
</script>

<style>
</style>
