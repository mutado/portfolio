<template>
  <span>
    {{ startDateFormatted }}
  </span>
  -
  <span v-if="end">
    {{ endDateFormatted }}
  </span>
  <span v-else>present</span>
  <span v-if="isSameYear">
    {{ " "+startDate.year() }}
  </span>
</template>

<script lang="ts" setup>
import moment from 'moment/moment'
import { computed, onMounted, type PropType } from 'vue'

const props = defineProps({
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String as PropType<string | null>,
    default: '',
  },
})

const startDate = computed(() => {
  return moment(props.start)
})

const endDate = computed(() => {
  return props.end ? moment(props.end) : null
})

const isSameYear = computed(() => {
  return startDate.value.year() === endDate?.value?.year()
})

const startDateFormatted = computed(() => {
  return startDate.value.format(isSameYear.value ? 'MMM' : 'MMM YYYY')
})

const endDateFormatted = computed(() => {
  return endDate?.value?.format(isSameYear.value ? 'MMM' : 'MMM YYYY')
})

onMounted(() => {
  if (startDate.value.isAfter(endDate.value)) {
    throw new Error('start date is after end date')
  }
})
</script>

<style scoped></style>
