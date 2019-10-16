<template>
    <el-form @submit.native.prevent="onSubmit" ref="form" :model="admin" label-width="80px">
  <el-form-item label="用户名称">
    <el-input v-model="admin.adminName"></el-input>
  </el-form-item>
   <el-form-item label="真正名称">
   <el-input v-model="admin.trueName"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        admin: {
          pwd:'xxxxxxx'
        }
      }
    },
    methods: {
      onSubmit() {
    //     const _this=this;
    //     console.log(_this.admin);
    // _this.$http.post('adminSave',_this.admin).then(res=>{
    //     console.log(res);
    // })
    let config = {
   //formData  提交请求头有两种 multipart/form-data  和 application/x-www-form-urlencoded
   // multipart/form-data   用于type=file 的input提交
   headers: {
          "Content-Type": "multipart/form-data"
   }
};
let formData = new FormData();
    //参数
Object.keys(this.admin).forEach((key) => {
formData.append(key, this.admin[key]);
});
 
this.$http.post("adminSave", formData, config).then(res => {
         console.log(res);
    }).catch(error => {
         console.log(error);
    });
      }
    }
  }
</script>