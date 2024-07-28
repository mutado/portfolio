<template>
  <flex-transition-group
    appear
    class="flex flex-col"
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-active-class="absolute transition-all duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    move-class="transition-transform duration-200"
    tag="ul"
  >
    <li
      v-for="(item, i) in items"
      :key="'item-' + item[keyBy]"
      class="flex gap-x-2"
    >
      <slot
        :item="item"
        name="before"
      />
      <div class="h-full w-4 shrink-0 grow-0 relative">
        <div class="w-4 h-4 rounded-full font-bold bg-white-mute mt-1.5"></div>
        <div
          v-if="i !== items.length - 1"
          class="h-full w-0.5 bg-white-soft absolute left-1/2 top-1.5 -translate-x-1/2"
        ></div>
      </div>
      <slot
        :item="item"
        name="after"
      />
    </li>
  </flex-transition-group>
</template>

<script generic="T" lang="ts" setup>
import FlexTransitionGroup from '@/components/FlexTransitionGroup.vue'
import type { PropType } from 'vue'

const props = defineProps({
  items: {
    type: Array as PropType<T[]>,
    required: true,
  },
  keyBy: {
    type: String,
    default: 'key',
  },
})

defineSlots<{
  before(props: { item: T }): any
  after(props: { item: T }): any
}>()
</script>

<style scoped></style>
