<template>
    <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded">
      <component :is="icon" class="w-20 h-20" />
      <h2 class="text-3xl font-semibold mb-2">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    title: {
      type: String,
      default: "Default title",
    },
    description: {
      type: String,
      default: "Default description",
    },
    icon: {
      type: String,
      default: "IconMarkdown",
    },
  });
  </script>
  
  <style scoped>
  /* Estilos personalizados para el componente Service */
  </style>
  