<template>
  <div>
    I am the footer!
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -10;
  height: var(--footer-height);
  background: var(--black);
  color: var(--white);
  padding: 2rem;
}
</style>
