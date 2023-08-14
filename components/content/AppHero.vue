<template>
  <section id='Hero' class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <h1 class="text-4xl"><slot name="title" /></h1>
      <slot name="description" />
  </section>
  </template>
  <script setup lang='ts'></script>
  <style scoped lang='scss'></style>