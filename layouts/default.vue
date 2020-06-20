<template>
  <div>
    <div class="pageContainer">
      <TopBar />
      <main>
        <nuxt />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export default {
  components: {
    TopBar,
    Footer,
  },
};
</script>

<style scoped>
.pageContainer {
  border-bottom: 1px solid var(--white);
  margin-bottom: var(--footer-height);
  min-height: 100vh;
  z-index: 10;
  background: var(--black);
  color: var(--white);
}
main {
  background: var(--black);
  color: var(--white);
  padding: 1rem 2rem;
}
</style>
