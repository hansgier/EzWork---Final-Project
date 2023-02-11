<template>
    <Projects />
    <SideBar />
</template>

<script>
import SideBar from "@/components/sidebar.vue";
import Projects from "@/components/projects.vue";
export default {
  name: "ProjectPage",
  components: {
    SideBar,
    Projects,
  },
};
</script>

<style>
</style>
