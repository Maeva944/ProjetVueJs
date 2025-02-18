<template>
    <div class="cart-container">
      <h1>Votre Panier</h1>
      <div v-if="cart.length > 0">
        <ul>
          <li v-for="(item, index) in cart" :key="item.id" class="cart-item">
            <h2>{{ item.name }}</h2>
            <p>Prix : {{ item.price }} €</p>
            <p>Quantité : {{ item.quantity }}</p>
            <button @click="removeFromCart(item.id)">Retirer</button>
          </li>
        </ul>
        <div class="total">
          Total : {{ totalPrice }} €
        </div>
        <button class="checkout-btn" @click="checkout">Valider le panier</button>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useChefStore } from '../stores/chefStore';
  
  const chefStore = useChefStore();
  
  // Récupération du panier depuis le store
  const cart = computed(() => chefStore.cart);
  
  // Calcul du prix total du panier
  const totalPrice = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  });
  
  // Supprimer un article du panier
  const removeFromCart = (dishId) => {
    chefStore.removeFromCart(dishId);
  };
  
  // Valider le panier (checkout)
  const checkout = () => {
    console.log('Paiement en cours...');
    // Ici, tu pourrais implémenter une logique de paiement
    chefStore.clearCart();
  };
  </script>
  
  <style scoped>
  .cart-container {
    padding: 20px;
  }
  
  .cart-item {
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
  }
  
  .total {
    font-weight: bold;
    margin-top: 20px;
  }
  
  .checkout-btn {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .checkout-btn:hover {
    background-color: #0056b3;
  }
  </style>
  