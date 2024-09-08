<template>
    <el-card>
      <template #header>
        <span>{{ group }}</span>
      </template>
      <!-- <el-space size="large">
        <MemberCard v-for="info in infos" :info="info"></MemberCard>
      </el-space> -->
      
      <!-- <template #footer>{{ info.name }}</template> -->
    </el-card>
  </template>

<script setup>
import { ref } from 'vue';
import MemberCard from './MemberCard.vue';

// const member_infos = ref();
const infos = ref([
    {
        name:"abc",
        picture:"zhaopian",
        class:"yan",
        year:2023,
        url:"https://www.baidu.com",
        research_interests:"qwer",
    },
    {
        name:"abc",
        picture:"zhaopian",
        class:"yan",
        year:2021,
        url:"www.baidu.com",
        research_interests:"qwer",
    },
])

const props = defineProps({
    // picture: String,
    // name: String,
    // info: {
    //     picture:String,
    //     name:String,
    // }
    // info: Object,
    group: String,
})
</script>