<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://vuejs.org" class="navbar-brand ms-1">
        <img src="./assets/logo.png" height="40" />
      </a>

      <div class="navbar-nav me-auto">
        <li class="nav-item" v-if="isAdmin">
          <router-link class="nav-link" active-class="active" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/home">Home</router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="!currentUser">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/register">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/login">Sign In</router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="currentUser">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/profile">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/login" @click="logout">Sign Out</router-link>
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import vuex from 'vuex';
  import Role from "@/models/role";

  export default {
    computed: {
      ...vuex.mapGetters(['currentUser']),
      isAdmin() {
        return this.currentUser && this.currentUser?.role === Role.ADMIN;
      },
    },
    methods: {
      ...vuex.mapActions(['clearUser']),
      logout() {
        this.clearUser();
        this.$router.push('/login');
      },
    }
  }

</script>

<style></style>
