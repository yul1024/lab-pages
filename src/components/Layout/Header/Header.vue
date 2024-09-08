<script setup>
import Tabs from './Tabs.vue'
import Menu from './Menu.vue';
</script>

<template>
    <!-- <el-row>
        <el-col :span="8"><h1>复旦大学</h1></el-col>
        <el-col :span="16"><Tabs/></el-col>
    </el-row> -->
    <el-affix :offset="0">
        <Menu></Menu>
    </el-affix>
    
    
</template>

