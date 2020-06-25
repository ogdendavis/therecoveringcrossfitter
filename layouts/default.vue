<template>
  <div>
    <div class="pageContainer">
      <TopBar />
      <div class="contentContainer">
        <main>
          <nuxt />
        </main>
        <Sidebar />
      </div>
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
.contentContainer {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
}
main {
  background: var(--black);
  color: var(--white);
  padding: 1rem 2rem;
  min-width: 350px;
  max-width: calc(100% - var(--sidebar-width) - var(--gutter-width));
}
</style>
