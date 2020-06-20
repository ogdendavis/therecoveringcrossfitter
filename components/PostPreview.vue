<template>
  <article>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Post Title' },
    text: { type: String, default: 'Teaser text' },
  },
};
</script>

<style scoped>
article {
  margin: 1rem 0;
}
</style>
