<template>
    <div class="auth-form">
      <h2>Sign In</h2>
      <form @submit.prevent="signIn" class="form">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
        <button type="submit" class="btn signin-btn">Sign In</button>
      </form>
      <p>Don't have an account? <span @click="toggleForm">Sign Up</span></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        this.$emit('signin', { email: this.email, password: this.password });
      },
      toggleForm() {
        this.$emit('toggleForm');
      },
    },
  };
  </script>