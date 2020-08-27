<template>
  <el-container>
    <el-header height>
      <div class="floor">宿舍楼：</div>
      <el-select v-model="fid" placeholder="请选择宿舍楼">
          <el-option
            v-for="floor in floors"
            :key="floor.fid"
            :label="floor.fname"
            :value="floor.fid">
          </el-option>
        </el-select>
        <div class="dormitory">宿舍：</div>
        <el-select v-model="did" placeholder="请选择宿舍">
            <el-option
              v-for="dormitory in dormitories"
              :key="dormitory.did"
              :label="dormitory.dname"
              :value="dormitory.did">
            </el-option>
          </el-select>
    </el-header>
    <el-main>
      <el-table
          :data="randomDuty"
          border
          style="width: 100%">
          <el-table-column
            prop="monday"
            label="周一">
          </el-table-column>
          <el-table-column
            prop="tuesday"
            label="周二">
          </el-table-column>
          <el-table-column
            prop="wednesday"
            label="周三">
          </el-table-column>
          <el-table-column
            prop="thursday"
            label="周四">
          </el-table-column>
          <el-table-column
            prop="friday"
            label="周五">
          </el-table-column>
          <el-table-column
            prop="saturday"
            label="周六">
          </el-table-column>
          <el-table-column
            prop="sunday"
            label="周日">
          </el-table-column>
        </el-table>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios';
  axios.defaults.baseURL='http://localhost:8080';
  export default{
   data() {
        return {
          floors:[],
          dormitories: [],
          fid:'',
          did:'',
          randomDuty:[]
        }
    },
    watch:{
      fid(val,oldVal){
        axios.get('/dormitory/findDormitoryByFid',{
          params:{
            fid:val
          }
        }).then(response=>{
          this.did='';
          this.dormitories=response.data.data;
          this.randomDuty=[];
        });
      },
      did(val,oldVal){
        if(val==''){
          return;
        }
        axios.get('/student/findRandomDuty/'+val).then(response=>{
          this.randomDuty=[];
          this.randomDuty.push(response.data.data);
        });
      }
    },
    created() {
      //获取所有宿舍楼
      axios.get('/dormitory/findAllFloor').then(response=>{
        this.floors=response.data.data;
      });
    }
  }
</script>

<style scoped>
  .floor{
    margin: 0 0 5px 0;
  }
  .dormitory{
    margin: 0 0 5px 0;
  }
</style>
