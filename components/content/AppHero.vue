<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          <slot name="description" />
        </p>
       
      </div>
      <div class="xs:mt-4 lg:mt-0 lg:col-span-5 lg:flex">
        <TargetComponent>
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </TargetComponent>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
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
<style scoped lang="scss">
// .card {
//   width: 400px;
//   height: 300px;
//   background-color: aliceblue;
// }
</style>
