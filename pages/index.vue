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
    <Sidebar />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview';
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    PostPreview,
    Sidebar,
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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.posts {
  min-width: 350px;
}
</style>
