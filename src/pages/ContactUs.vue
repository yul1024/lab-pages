<template>
    <RouterView>
        <Layout>
            <el-space fill wrap style="width: 100%">
                <Content>aonfoands</Content>
                <Article title="jdoafbauiwe" content="hfaiusniuanfue"></Article>
                <Article title="asndfjasnfa" content="fansjads"></Article>
            </el-space>
            <!-- <el-row justify="center">
                <el-col :span="22">
                    <Content>aonfoands</Content>
                    <Article title="jdoafbauiwe" content="hfaiusniuanfue"></Article>
                    <Article title="asndfjasnfa" content="fansjads"></Article>
                </el-col>
            </el-row> -->
        </Layout>
    </RouterView>
</template>

<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import Content from './Content.vue';
import Article from '@/components/Article.vue';

import { ref } from 'vue';
// const msg = ref("test")
</script>