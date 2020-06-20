<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div>
      {{ post.content }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find((post) => post.id === this.id);
    },
  },
};
</script>

<style scoped></style>
