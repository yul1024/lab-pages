<template>
    <RouterView>
        <Card>
            <Card :info="infoa"></Card>
        </Card>
    </RouterView>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Card from '@/components/Card.vue';

import { ref } from 'vue';
// const nums = ref([1, 2, 3])
// const props = defineProps({
//     group_name:String,
// })
// const props = defineProps({
//     picture: String,
//     name: String,
// })
// const picture = ref("zheshitupian");
// const name = ref("mingzi")
const infos = ref([
    {
        picture:"zhaopian",
        name:"mingzi",
    },
    {
        picture:"zhaopian2",
        name:"mingzi2",
    },]
)
const infoa = ref(
    "zhaopian"
)
</script>