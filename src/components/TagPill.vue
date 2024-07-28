<template>
  <v-button
    :active="removable"
    class="flex items-center gap-1 text-sm whitespace-nowrap"
  >
    <slot />
    <svg
      v-if="removable"
      class="h-4 w-4"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  </v-button>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue'

defineProps({
  removable: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
