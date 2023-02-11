<template>
    <Home />
    <HomePane />
    <SideBar />

</template>

<script>
import HomePane from "@/components/home-pane.vue";
import SideBar from "@/components/sidebar.vue";
import Home from "@/components/home.vue";
export default {
  name: "HomePage",
  data() {
    return {
        show: true,
    }
  },
  components: {
    HomePane,
    SideBar,
    Home,
  },
};
</script>

<style scoped>
</style>
