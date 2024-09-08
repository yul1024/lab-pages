<template>
    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button value="top">top</el-radio-button>
      <el-radio-button value="right">right</el-radio-button>
      <el-radio-button value="bottom">bottom</el-radio-button>
      <el-radio-button value="left">left</el-radio-button>
    </el-radio-group> -->
  
    <el-tabs tab-position="left" style="height: 550px">
      <el-tab-pane label="总体介绍">
        <Article title="zongti" content="jafsnanfajks"></Article>
      </el-tab-pane>
      <el-tab-pane label="研究方向一">
        <Article title="yangas" content="wbqogiubaf"></Article>
      </el-tab-pane>
      <el-tab-pane label="这是一个研究方向">
        <Article title="abfbwoqbu" content="bviqebov"></Article>
      </el-tab-pane>
      <el-tab-pane label="Task">
        <Article title="vbuoqea" content="fweifbevnaisniasbnfi"></Article>
      </el-tab-pane>
    </el-tabs>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'
import Article from './Article.vue';

</script>

<style scoped>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  
  .el-tabs--right .el-tabs__content,
  .el-tabs--left .el-tabs__content {
    height: 100%;
  }
</style>
  