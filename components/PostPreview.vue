<template>
  <article>
    <h2>{{ title }}</h2>
    <img v-if="featured" :src="featured" />
    <p>{{ text }}</p>
    <nuxt-link :to="{ name: 'posts-id', params: { id: postid } }">
      Read More...
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Post Title' },
    text: { type: String, default: 'Teaser text' },
    postid: { type: Number, default: 0 },
    featured: { type: String, default: '' },
  },
};
</script>

<style scoped>
article {
  margin: 1.5em 0;
}
img {
  max-height: 200px;
}
</style>
