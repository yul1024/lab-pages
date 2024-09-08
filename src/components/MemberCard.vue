<template>
  <div style="position: relative; padding-bottom: 20%; overflow: hidden;">
    <el-card class="box-card" align="middle">
      <!-- <p>{{ member.照片 }}</p> -->
      <!-- <el-avatar :size="200" :src="member.照片" /> -->
      <el-avatar :size="200" :src="getImageUrl(member.照片)"/>
      <template #footer>
        <span v-if="!member.个人网站" style="font-size:30px;">{{ member.姓名 }}</span>
        <el-link v-else :href="member.个人网站" target="_blank" style="font-size:30px;">{{ member.姓名 }}</el-link>
        <br>
        <span>{{ member.研究方向 }}</span>
      </template>
    </el-card>    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

// path += 'test.png'
// console.log(path)
// import d from '@/assets';
const getImageUrl = (name) => {
  if (new URL(`/src/assets/${name}`, import.meta.url).pathname==='/src/components/undefined') {
    return new URL(`/src/assets/logo.svg`, import.meta.url).href;
  }
  console.log(new URL(`/src/assets/${name}`, import.meta.url))
  return new URL(`/src/assets/${name}`, import.meta.url).href
}
// console.log(path)

const props = defineProps({
    member: {
      姓名:String,
      照片:String,
      研究方向:String,
      个人网站:String,
    },
})
</script>