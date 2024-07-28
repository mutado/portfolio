<template>
  <div class="pb-10 flex flex-col gap-4 shrink-0 grow overflow-auto w-0">
    <div>
      <div class="flex justify-between">
        <h3 v-if="title" class="text-lg">
          {{ title }}
        </h3>
        <ul></ul>
      </div>
      <p v-if="description || $slots.description" class="text-gray-300 max-w-prose">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
    <div
      v-if="$slots.default"
      class="flex flex-wrap gap-x-4 gap-y-2 items-start overflow-x-auto"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
})
</script>

<style scoped></style>
