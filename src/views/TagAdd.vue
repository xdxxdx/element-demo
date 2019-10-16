<template>
    <el-form ref="form" :model="TTag" label-width="80px">
  <el-form-item label="标签名称">
    <el-input v-model="TTag.tagName"></el-input>
  </el-form-item>
   <el-form-item label="优先级">
    <template>
    <el-input-number v-model="TTag.priority"></el-input-number>
    </template>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        TTag: {
          tagName: '',
          priority: '',
        }
      }
    },
    methods: {
      onSubmit() {
        const _this=this;
    _this.$http.post('tag/save',_this.TTag).then(res=>{
        console.log(res);
    })
      }
    }
  }
</script>