<template>
    <div class="auth-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp" class="form">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
        <button type="submit" class="btn signup-btn">Sign Up</button>
      </form>
      <p>Already have an account? <span @click="toggleForm">Sign In</span></p>
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
      signUp() {
        this.$emit('signup', { email: this.email, password: this.password });
      },
      toggleForm() {
        this.$emit('toggleForm');
      },
    },
  };
  </script>
  