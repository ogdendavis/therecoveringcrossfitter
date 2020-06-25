<template>
  <section class="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :postid="post.id"
      :title="post.title.rendered"
      :text="post.excerpt"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/PostPreview';

export default {
  components: {
    PostPreview,
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

<style scoped>
.posts {
  min-width: 350px;
  max-width: calc(100% - var(--sidebar-width) - var(--gutter-width));
}
</style>
