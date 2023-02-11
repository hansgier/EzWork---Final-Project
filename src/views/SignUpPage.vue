<template>
  <Header />
  <SignUp />
</template>

<script>
import SignUp from "@/components/signup.vue";
import Header from "@/components/header.vue";
export default {
  name: "SignUpPage",
  components: {
    SignUp,
    Header,
  },
};
</script>
