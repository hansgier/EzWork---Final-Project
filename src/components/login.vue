<template>
  <!--Login section-->
  <div class="login-container">
    <form id="login" class="input-box">
      <h2><strong>LOGIN</strong> TO YOUR ACCOUNT</h2>
      <div class="input-field">
        <input type="text" id="email" required="required" />
        <span>Enter your email address</span>
      </div>
      <div class="input-field">
        <input type="password" id="pass" required="required" />
        <span>Enter your password</span>
      </div>
      <div class="sign-up">
        <p>
          Need an account?
          <router-link to="/signup">Sign up here</router-link>
        </p>
      </div>
      <router-link to="/home">
        <button type="submit" class="submit-btn">LOG IN</button>
      </router-link>

    </form>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Login",
};
</script>

<style scoped>
@import "@/assets/login.css";
</style>
