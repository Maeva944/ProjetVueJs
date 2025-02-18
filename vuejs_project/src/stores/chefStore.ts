import { defineStore } from 'pinia';

export const useChefStore = defineStore('chefStore', {
  state: () => ({
    chefs: [] 
  }),
  actions: {
    loadChefs(chefs) { 
      this.chefs = chefs; 
    }
  }
});
