<template>
    <div>
      <h1>Nos Chefs</h1>
      <ul>
        <li v-for="chef in chefs" :key="chef.id" class="chef-card">
          <img :src="`/assets/images/${chef.image}`" :alt="chef.name" class="chef-image" />
          <h2>{{ chef.name }}</h2>
          <p>{{ chef.description }}</p>
          <button @click="viewChef(chef.id)">Voir les spécialités</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useChefStore } from '../stores/chefStore'; // Importation du store pour les chefs
  import { useRouter } from 'vue-router';
  
  
  const chefStore = useChefStore();
  const chefs = chefStore.chefs; // Récupérer les chefs du store
  const router = useRouter();
  
  const viewChef = (chefId) => {
    router.push(`/chef/${chefId}`); // Naviguer vers la page du chef
  };
  </script>
  
  <style>
  .chef-card {
    list-style: none;
    margin: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
  }
  .chef-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  </style>
  