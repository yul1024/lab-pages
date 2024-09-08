<template>
    <!-- <RouterView> -->
        <!-- <Layout> -->
            <div id="content">
                <slot>这里是文章内容</slot>
            </div>
        <!-- </Layout> -->
    <!-- </RouterView> -->
    
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';

import { ref } from 'vue';
// const msg = ref("test")
</script>

<style scoped>
div#content
{
    /* margin: 50px; */
    border-style: solid;
    border-radius: 10px;
    min-height: 100px;
}
</style>