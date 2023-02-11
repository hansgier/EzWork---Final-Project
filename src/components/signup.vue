<template>
  <!--Sign up section-->
  <div class="signup-container">
    <form id="login" class="input-box">
      <h2 class="signup-h2">
        <strong class="signup-strong">CREATE</strong> YOUR ACCOUNT
      </h2>
      <div class="input-field">
        <input type="text" id="name" required="required" />
        <span>Enter your name</span>
      </div>
      <div class="input-field">
        <input type="email" id="email" required="required" />
        <span>Enter your email address</span>
      </div>
      <div class="input-field">
        <input type="password" id="pass" required="required" />
        <span>Enter your password</span>
      </div>
      <div class="sign-up">
        <p>Already have an account? <router-link to="/">Log in here</router-link></p>
      </div>
      <router-link to="/home">
        <button type="submit" class="submit-btn" onclick="next()">SIGN UP</button>
      </router-link>
      
    </form>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "SignUp",
};
</script>

<style scoped>
@import "@/assets/login.css";
.input-box strong,
.input-box h2 {
  font-size: 2.26rem;
}
</style>
