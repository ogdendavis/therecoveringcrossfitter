<template>
  <article>
    <h2>{{ title }}</h2>
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
    postid: { type: String, default: '0' },
  },
};
</script>

<style scoped>
article {
  margin: 1rem 0;
}
</style>
