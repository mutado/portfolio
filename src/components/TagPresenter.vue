<template>
  {{ skills[props.tag]?.label ?? props.tag }}
</template>

<script lang="ts" setup>
import useData from '@/composables/data'

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
})

const {
  skills
} = useData()
</script>

<style scoped></style>
