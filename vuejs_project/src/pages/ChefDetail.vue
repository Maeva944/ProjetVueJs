<template>
    <div v-if="chef">
      <h1>{{ chef.name }}</h1>
      <p>{{ chef.description }}</p>
      <h2>Ses plats</h2>
      <ul>
        <li v-for="dish in chef.dishes" :key="dish.id" class="dish-card">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
          <p>Prix : {{ dish.price }} €</p>
          <button @click="addToCart(dish)">Ajouter au panier</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useChefStore } from '../stores/chefStore';
  
  const route = useRoute();
  const chefStore = useChefStore();
  const chef = ref(null);
  
  onMounted(() => {
    const chefId = parseInt(route.params.id, 10);
    chef.value = chefStore.chefs.find(c => c.id === chefId);
  });
  
  const addToCart = (dish) => {
    chefStore.addToCart(dish);
    console.log('Plat ajouté au panier:', dish.name);
  };
  </script>
  
  <style scoped>
  .dish-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
  }
  </style>  
  