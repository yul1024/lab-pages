<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/home">
        <!-- <img
          style="width: 100px"
          src="/images/element-plus-logo.svg"
          alt="Element logo"
        /> -->
        <h1>复旦大学</h1>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="/intro">概况</el-menu-item>
      <el-menu-item index="/news">动态</el-menu-item>
      <el-menu-item index="/member">成员</el-menu-item>
      <el-menu-item index="/resource">资源</el-menu-item>
      <el-menu-item index="/contactus">联系我们</el-menu-item>
      <!-- <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router';
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  