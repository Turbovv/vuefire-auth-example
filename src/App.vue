<template>
  <div class="auth-container">
    <h1 v-if="!authStore.isAuthenticated" class="welcome-text">Welcome!</h1>

    <Register v-if="!authStore.isAuthenticated && currentForm === 'signup'" @signup="signUp" @toggleForm="toggleForm" />
    <Login v-if="!authStore.isAuthenticated && currentForm === 'signin'" @signin="signIn" @toggleForm="toggleForm" />

    <div v-if="authStore.isAuthenticated" class="authenticated-info">
      <p>Welcome, {{ authStore.user.email }}!</p>
      <button @click="signOut" class="btn signout-btn">Sign Out</button>
    </div>

    <div v-if="!authStore.isAuthenticated" class="google-signin">
      <button @click="signInWithGoogle" class="google-btn">
        Authorize with Google
        <img class="google-logo" src="https://img.icons8.com/color/33/google-logo.png" alt="google-logo" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from './store/authStore';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

export default {
  data() {
    return {
      authStore: useAuthStore(),
      currentForm: 'signin'
    };
  },
  methods: {
    async signUp(credentials: { email: string; password: string; }) {
      await this.authStore.signupWithEmail(credentials.email, credentials.password);
    },
    async signIn(credentials: { email: string; password: string; }) {
      await this.authStore.loginWithEmail(credentials.email, credentials.password);
    },
    async signOut() {
      await this.authStore.signOut();
    },
    async signInWithGoogle() {
      await this.authStore.signInWithGoogle()
    },
    toggleForm() {
      this.currentForm = this.currentForm === 'signup' ? 'signin' : 'signup';
    },
  },
  mounted() {
    this.authStore.checkAuthentication();
  },
  components: {
    Register,
    Login,
  },
};
</script>

<style>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.welcome-text {
  text-align: center;
}

.auth-form {
  margin-top: 20px;
}

h2 {
  text-align: center;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  color: #333;
}

input {
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.signup-btn {
  background-color: #3498db;
}

.signin-btn {
  background-color: #2ecc71;
}

.signout-btn {
  background-color: #e74c3c;
}

.toggle-link {
  text-align: center;
  margin-top: 10px;
  color: #333;
  cursor: pointer;
}

.toggle-link span {
  color: #3498db;
  text-decoration: underline;
}

.authenticated-info {
  margin-top: 20px;
  text-align: center;
}
.google-signin {
  margin-top: 20px;
  text-align: center;
}

.google-btn {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-logo {
  margin-left: 5px;
  width: 22px;
  height: 22px;
}
span {
  text-decoration: underline;
  cursor: pointer;
}
</style>