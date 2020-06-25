export const state = () => ({
  posts: [],
});

// export const getters = {};

export const mutations = {
  loadPosts: (state, posts) => {
    state.posts = posts;
  },
};

export const actions = {
  async getPosts({ state, commit }) {
    // Early return if we've already grabbed posts
    if (state.posts.length > 0) {
      return;
    }
    // Try / catch for possible fetching errors
    try {
      // Grab all posts from WP
      const wpPosts = await fetch(`${process.env.apiPath}/posts`).then((res) =>
        res.json()
      );

      // Filter out the unpublished posts, and create post objects with only the data we want
      const posts = wpPosts
        .filter((p) => p.status === 'publish')
        .map(({ id, slug, title, excerpt, date, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          content,
        }));
      // Use Nuxt's commit function to load the posts into state
      commit('loadPosts', posts);
    } catch (er) {
      // If we get an error, output it!
      // eslint-disable-next-line
      console.error(er);
    }
  },
};
