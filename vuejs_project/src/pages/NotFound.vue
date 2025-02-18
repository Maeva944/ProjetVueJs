<template>
    <div class="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for does not exist.</p>
      <router-link to="/">Go back to Home</router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  // No special logic needed for the 404 page
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 20px;
  }
  
  h2 {
    color: red;
  }
  
  router-link {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  