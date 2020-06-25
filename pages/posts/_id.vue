<template>
  <div v-if="post">
    <h1>{{ post.title.rendered }}</h1>
    {{ /* eslint-disable-next-line */ }}
    <div v-html="post.content.rendered" />
  </div>
  <Loader v-else />
</template>

<script>
import Loader from '@/components/Loader';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    post() {
      return this.$store.state.posts.find((p) => p.id === Number(this.id));
    },
  },
  created() {
    // In case of direct entry, as opposed to navigating here from homepage
    this.$store.dispatch('getPosts');
  },
};
</script>

<style scoped></style>
