<template>
    <div>
        <h4>{{ info.入学年份 }}</h4>
        <el-row :gutter="50">
            <el-col :span="6" v-for="member in info.members">
                <MemberCard :member="member"></MemberCard>
            </el-col>
        </el-row>
    </div>

</template>

<script setup>
import MemberCard from './MemberCard.vue';

const props = defineProps({
    info: {
      入学年份:String,
      members:Object,
    },
})
</script>

  