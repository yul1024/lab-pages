<template>
    <RouterView>
        <Layout>
            <div v-for="(group,index) in groups" :key="index">
                <GroupDiv :group="group" v-if="group.show"></GroupDiv>
            </div>
        </Layout>
    </RouterView>
</template>

<script lang="ts" setup>
import { RouterView,RouterLink } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import Group from '@/components/Group.vue';
import Card from '@/components/Card.vue';
import GroupCard from '@/components/GroupCard.vue';
import GroupDiv from '@/components/GroupDiv.vue';

import { ref } from 'vue';
// const groups = ref([
//     {class_name:"教师", show:true,},
//     {class_name:"博士后", show: false,},
//     {class_name:"博士", show: true,},
//     {class_name:"硕士", show: true,},
//     {class_name:"毕业生", show: false,},
// ])
// const is_show = group => group.show

const groups = ref([
    {
        类别:"教师", 
        show:true,
        infos:[
            {
                入学年份:"",
                members:[
                    {
                        姓名:"周杰伦",
                        照片:"test.png",
                        研究方向:"人工智能",
                        个人网站:"http://www.baidu.com",
                    },
                    {
                        姓名:"a",
                        照片:"b",
                        研究方向:"c",
                        个人网站:"",
                    },
                    {
                        姓名:"a",
                        照片:"b",
                        研究方向:"c",
                        个人网站:"d",
                    },{
                        姓名:"a",
                        照片:"b",
                        研究方向:"c",
                        个人网站:"d",
                    },{
                        姓名:"a",
                        照片:"b",
                        研究方向:"c",
                        个人网站:"d",
                    },
                ]
            },
            {
                入学年份:"2018",
                members:[
                    {
                        姓名:"a",
                        照片:"b",
                        研究方向:"c",
                        个人网站:"d",
                    }
                ]
            }
        ]
    },
    {类别:"博士后", show: false,},
    {类别:"博士", show: true,},
    {类别:"硕士", show: true,},
    {类别:"毕业生", show: false,},
])

</script>