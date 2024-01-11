<template>
  <main class="w-screen h-screen bg-gradient-to-b from-white dark:from-black to-green-500/60 from-80%  relative overflow-hidden">
    <button
    @click="toggleDark()"
    class="px-4 py-2 text-white bg-green-500 rounded dark:bg-purple-500 dark:text-green"
  >
    toggle dark mode
  </button>
    <ContentDoc />
    <div
      class="absolute bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />
  </main>
</template>
<script lang="ts" setup>
import {
  useMouse,
  useWindowSize,
  useMouseInElement,
  useDark,
  useToggle,
} from "@vueuse/core";


const { x, y } = useMouse();
const { width, height } = useWindowSize();

const target = ref(null);

const isDark = useDark();
const toggleDark = useToggle(isDark);

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