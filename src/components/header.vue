<template>
  <header>
    <img src="src/assets/images/png/logo-no-background.png" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  position: absolute;
  left: 0;
  top: 0;
  /* background: rgba(255,255,255,0.1); */
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
}

img {
  position: relative;
  width: 13rem;
  left: 5%;
  cursor: pointer;
  pointer-events: none;
}

@media screen and (max-width: 1024px) {
  header {
    position: absolute;
    justify-content: center;
  }

  img{
    left: 0;
  }
}
</style>
