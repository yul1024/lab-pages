<template>
    <div class="article">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
      <!-- <div v-if="images.length > 0" class="images">
        <img v-for="(image, index) in images" :src="image" :key="index" alt="Article Image">
      </div> -->
    </div>
</template>
  
<script setup>

const props = defineProps({
    title: String,
    content: String,
    // images: Array 
})
</script>
  
<style scoped>
.article {
max-width: 800px;
margin: 0 auto;
padding: 20px;

border-style: solid;
border-radius: 10px;
min-height: 100px;
}

.article h1 {
margin-bottom: 20px;
}

.article p {
text-indent: 2em;
margin-bottom: 15px;
}

.images img {
max-width: 100%;
margin-bottom: 15px;
}
</style>
  