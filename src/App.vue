<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://vuejs.org" class="navbar-brand ms-1">
        <img src="./assets/logo.png" height="40" />
      </a>
      <div class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/admin"
            >Admin</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/home"
            >Home</router-link
          >
        </li>
      </div>
      <div class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/register"
            >Sign Up</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/login"
            >Sign In</router-link
          >
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style></style>
