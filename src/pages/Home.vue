<template>
    <RouterView>
        <Layout>
            <Carousel></Carousel>
            <!-- <Card></Card> -->
        </Layout>
    </RouterView>
    
</template>

<script lang="ts" setup>
import { RouterView,RouterLink } from 'vue-router';
import Layout from '@/components/Layout/Layout.vue';
import Carousel from '@/components/Carousel.vue';
import Card from '@/components/Card.vue';
import { ref } from 'vue';


const tests = ref([1, 2, 3])

</script>