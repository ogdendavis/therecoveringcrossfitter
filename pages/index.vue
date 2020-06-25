<template>
  <section v-if="posts" class="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :postid="post.id"
      :title="post.title.rendered"
      :text="post.excerpt.rendered"
      :featured="post.featured"
    />
  </section>
  <Loader v-else />
</template>

<script>
import PostPreview from '@/components/PostPreview';
import Loader from '@/components/Loader';

export default {
  components: {
    PostPreview,
    Loader,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>

<style scoped></style>
