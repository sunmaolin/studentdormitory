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
          <div class="student">报修人：</div>
          <el-select v-model="createUser" placeholder="请选择人员">
              <el-option
                v-for="student in students"
                :key="student.sid"
                :label="student.sname"
                :value="student.sname">
              </el-option>
            </el-select>
    </el-header>
    <el-main>
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入宿舍报修内容"
        v-model="content">
      </el-input>
    </el-main>
    <el-footer>
        <el-button type="primary" @click="commit">提交</el-button>
    </el-footer>
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
          students: [],
          fid:'',
          did:'',
          createUser:'',
          content:''
        }
    },
    methods:{
      commit(){
        if(this.content=='' || this.content.replace(/(^\s*)|(\s*$)/g, "")==''){
          this.$message('请填写报修内容！');
        }else{
          let postData = new URLSearchParams()
          postData.append('did', this.did)
          postData.append('content', this.content)
          postData.append('createUser', this.createUser)
          axios.post('/dormitory/addMaintainRecord',postData).then(response=>{
            var data=response.data;
            if(data.state==2000){
              this.opinion='';
              this.$message('登记成功！');
            }else{
              this.$message(data.message);
            }
          });
        }
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
        axios.get('/student/find/'+val).then(response=>{
          this.sid = '';
          this.students = response.data.data;
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
    margin: 5px 0 5px 0;
  }
  .dormitory{
    margin: 5px 0 5px 0;
  }
  .student{
    margin: 5px 0 5px 0;
  }
  .el-button{
    float: right;
    margin:20px 20px 0 0;
  }
</style>
