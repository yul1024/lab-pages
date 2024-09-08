<script setup>
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="container" id="header">
        <Header/>
      </el-header>
      <!-- <el-main class="container" id="main" width="1000px" margin="50px"> -->
      <el-main class="container" id="main">
          <!-- <el-main><slot>这里是main</slot></el-main> -->
        <el-row justify="center">
          <el-col :span="22"><slot>这里是main</slot></el-col>
        </el-row>
      </el-main>
      <el-footer class="container" id="footer">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

