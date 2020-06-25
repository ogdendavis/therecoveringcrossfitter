<template>
  <div>
    <div class="pageContainer">
      <TopBar />
      <main>
        <nuxt />
        <Sidebar />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    TopBar,
    Footer,
    Sidebar,
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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
