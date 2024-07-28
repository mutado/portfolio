<template>
  <button
    :class="[
      active
        ? 'bg-white/10 border-white/60 hover:border-white/80 hover:bg-white/20'
        : 'bg-white/0 border-white/40 hover:border-white/60 hover:bg-white/10',
    ]"
    class="border rounded-full px-2 transition-colors duration-200"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: undefined,
  },
})

function onClick() {
  if (props.href) {
    window.open(props.href, '_blank', 'noopener')
  } else {
    emit('click')
  }
}
</script>

<style scoped></style>
