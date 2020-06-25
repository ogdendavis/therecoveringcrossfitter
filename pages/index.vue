<template>
  <div>
    <section class="posts">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :postid="post.id"
        :title="post.title"
        :text="post.content"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview';

export default {
  components: {
    PostPreview,
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    },
  },
};
</script>

<style scoped>
div {
}
.posts {
  min-width: 350px;
}
</style>
