<template>
  <!-- <section id="Hero" class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <h1 class="text-4xl">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <slot name="description" />
  </section> -->
  <div :style="{
    width: '300px'
  }">

    <div
      class="w-full p-8 rounded shadow-2xl bg-red-600 card"
      ref="target"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out ',
      }"
    >
      <h1 class=" font-bold">algo por aqui</h1>
    </div>
  </div>
  <div
    class="w-screen h-screen bg-gradient-to-b from-black to-green-500/60 from-80% flex items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />

    <div style="color: white">Hola</div>
    <a ref="logo" href="https://learnvue.co">sdasdasd</a>
  </div>
</template>
<script setup lang="ts">
import { useMouse, useWindowSize, useMouseInElement } from "@vueuse/core";

const { x, y } = useMouse();
const { width, height } = useWindowSize();

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



const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));

const dinstance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
);

const size = computed(() => Math.max(300 - dinstance.value, 150));
</script>
<style scoped lang="scss">
// .card {
//   width: 400px;
//   height: 300px;
//   background-color: aliceblue;
// }
</style>
