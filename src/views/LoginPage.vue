<template>
  <Header />
  <Login />
</template>

<script>
import Login from "@/components/login.vue";
import Header from "@/components/header.vue";
export default {
  name: "LoginPage",
  components: {
    Login,
    Header,
  },
};
</script>
