<template>
    <HeaderLayout />
    <router-view></router-view>
</template>
<script setup langu="ts">
import HeaderLayout from './layout/headerLayout.vue';
import { onMounted } from 'vue';
import { useChefStore } from './stores/chefStore';
import chefsData from '../data.json';

const chefStore = useChefStore();

onMounted(() => {
  chefStore.loadChefs(chefsData); 
});
</script>
<style></style>
