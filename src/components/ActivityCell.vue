<template>
  <div
    :key="date"
    v-tooltip="{
      content:
        moment(date).format('MMM DD, YYYY') +
        ' - ' +
        Math.round(hours) +
        ' hours',
      placement: 'top',
    }"
    :class="{
      'animate-pulse-white': act.placeholder,
    }"
    :style="{
      borderColor: isToday ? 'lightblue' : undefined,
      backgroundColor: placeholder
        ? undefined
        : `rgba(255,255,255,${hours / 8})`,
      animationDelay: `${placeholder ? Math.floor(index / 7) / 100 : 0}s`,
    }"
    class="h-4 w-4 border border-white/10 transition-colors duration-1000 text-xs"
  ></div>
</template>

<script lang="ts" setup>
import moment from 'moment/moment'

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  isToday: {
    type: Boolean,
    default: false,
  },
  hours: {
    type: Number,
    required: true,
  },
  placeholder: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped></style>
