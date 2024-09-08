<template>
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="280" />
      <!-- <el-table-column prop="name" label="Name" width="180" /> -->
      <el-table-column prop="address" label="Address" cell-click="console.log('address')">
        <template #default="data">
          <el-link :href="data.row.name">{{ data.row.address }}</el-link>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  const tableData = ref([
    {
      date: '2016-05-03',
      name: '/p/1',
      address: 'No. 189, Grove St, Los Angeles1',
    },
    {
      date: '2016-05-02',
      name: '/p/2',
      address: 'No. 189, Grove St, Los Angeles2',
    },
    {
      date: '2016-05-04',
      name: '/p/3',
      address: 'No. 189, Grove St, Los Angeles3',
    },
    {
      date: '2016-05-01',
      name: '/p/4',
      address: 'No. 189, Grove St, Los Angeles4',
    },
  ])
  </script>
  