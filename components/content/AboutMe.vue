<template>
  <section id="aboutme" :class="[type]">
    <ContentSlot :use="$slots.title" unwrap="p" />

    <slot name="description" />



    <TargetComponent>
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
      />
    </TargetComponent>
  </section>
</template>
<script setup lang="ts">
defineProps(['type'])
</script>
<style scoped lang="scss"></style>
