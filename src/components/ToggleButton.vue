<template>
  <v-button
    :active="modelValue ?? false"
    @click="toggle"
    class="flex items-center gap-2"
  >
    <span
      class="rounded-full flex items-center justify-center border border-white/60 h-4 w-4"
    >
      <svg
        v-if="modelValue"
        class="h-3 w-3"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
    <input
      ref="input"
      :checked="modelValue ?? false"
      hidden="hidden"
      type="checkbox"
      @input="emit('update:modelValue', $event.target?.checked)"
      @click.stop
    />
    <slot />
  </v-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VButton from '@/components/VButton.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const input = ref<HTMLInputElement | null>(null)

function toggle() {
  input.value?.click()
}
</script>

<style scoped></style>
