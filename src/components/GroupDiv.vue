<template>
  <h2>{{ group.类别 }}</h2>
  <YearDiv v-for="info in group.infos" :info="info"></YearDiv>
  <!-- <el-row :gutter="50">
      <el-col :span="6" v-for="info in infos">
          <MemberCard :info="info"></MemberCard>
      </el-col>
  </el-row>-->
</template>

<script setup>
import { ref } from 'vue';
import MemberCard from './MemberCard.vue';
import YearDiv from './YearDiv.vue';

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
        year:2023,
        url:"https://www.baidu.com",
        research_interests:"qwer",
    },
    {
        name:"abc",
        picture:"zhaopian",
        class:"yan",
        year:2023,
        url:"https://www.baidu.com",
        research_interests:"qwer",
    },
])

const props = defineProps({
    // class_name: String,
    group: {
        类别:String,
        show:Boolean,
        infos:Object,
    },
})
</script>