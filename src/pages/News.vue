<template>
    <RouterView>
        <Layout>
            <Table></Table>
        </Layout>
    </RouterView>
    
</template>

<script lang="ts" setup>
import { RouterView,RouterLink } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import Table from '@/components/Table.vue';

import { ref } from 'vue';
// const msg = ref("test")
</script>