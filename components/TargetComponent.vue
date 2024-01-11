<template>
  <div
    class="w-full p-8 rounded shadow-2xl card"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out ',
    }"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";

const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2);

  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>
<style scoped lang="scss"></style>
