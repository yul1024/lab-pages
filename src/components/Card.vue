<template>
    <el-card style="max-width: 500px">
      <template #header>
        <div class="card-header">
          <span>{{ info.class }}</span>
          <span>{{ info.year }}</span>
        </div>
      </template>
      <p>{{ info.picture }}</p>
      <template #footer>{{ info.name }}</template>
    </el-card>
    <!-- <p>{{ info }}</p> -->
  </template>

<script setup>
import { ref } from 'vue';

// const member_infos = ref();

const props = defineProps({
    // picture: String,
    // name: String,
    // info: {
    //     picture:String,
    //     name:String,
    // }
    info: Object,
})
</script>