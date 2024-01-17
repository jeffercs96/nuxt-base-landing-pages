<template>
  <transition name="fade" mode="out-in">
    <button
      @click="toggleDark()"
      class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 "
    >
      <Icon
        :key="isDark"
        :name="
          isDark
            ? 'line-md:sunny-outline-to-moon-transition'
            : 'line-md:moon-to-sunny-outline-transition'
        "
        class="text-slate-950 dark:text-green-500"
        size="1.5em"
      />
    </button>
  </transition>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped lang="scss"></style>
