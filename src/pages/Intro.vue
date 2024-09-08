<template>
    <RouterView>
        <Layout>
            <!-- <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main> -->
            <Tabs></Tabs>
        </Layout>
    </RouterView>
    
</template>

<script lang="ts" setup>
import { RouterView,RouterLink } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import Tabs from '@/components/Tabs.vue';

import { ref } from 'vue';
// const msg = ref("test")
</script>