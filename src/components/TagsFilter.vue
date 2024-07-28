<template>
  <v-button
    ref="dropdownContainer"
    :active="dropdownActive"
    class="text-sm flex items-center gap-1 h-full"
    @click="dropdownActive = !dropdownActive"
  >
    <svg
      class="h-4 w-4"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
    Filter by Skill
    <teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <ul
          v-if="dropdownActive"
          ref="dropdown"
          :style="dropdownPosition"
          class="bg-black-soft/75 z-20 divide-y divide-white/25 flex flex-col right-0 top-full mt-2 backdrop-blur rounded-xl border border-white-soft/25 h-64 overflow-auto w-48 absolute"
        >
          <li
            v-for="skill in skills"
            :key="skill.key"
            class="text-start px-3 cursor-pointer select-none bg-transparent hover:bg-black py-1 flex justify-between items-center"
            @click="() => toggleTag(skill.key)"
          >
            <div class="flex items-center gap-1">
              <span class="h-3 w-3">
                <svg
                  v-if="props.modelValue?.includes(skill.key)"
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
              <span>
                {{ skill.label }}
              </span>
            </div>
            <span class="text-xs">
              {{ skill.count }}
            </span>
          </li>
        </ul>
      </transition>
    </teleport>
  </v-button>
</template>

<script lang="ts" setup>
import { type PropType, ref } from 'vue'
import FlexTransitionGroup from '@/components/FlexTransitionGroup.vue'
import VButton from '@/components/VButton.vue'
import useData from '@/composables/data'
import { onClickOutside, whenever } from '@vueuse/core'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Array as PropType<string[] | null>,
    default: () => [],
  },
})

const dropdownPosition = ref<{
  top: string
  left?: string
  right?: string
}>({
  top: '0px',
  left: '0px',
  right: '0px',
})
const dropdownContainer = ref<InstanceType<typeof VButton> | null>(null)
const dropdown = ref<InstanceType<typeof FlexTransitionGroup> | null>(null)
const dropdownActive = ref(false)
onClickOutside(dropdown, () => {
  dropdownActive.value = false
})

whenever(
  () => dropdownActive.value,
  () => {
    const { bottom, left, right, width } =
      dropdownContainer.value!.$el.getBoundingClientRect()
    dropdownPosition.value = {
      top: `${bottom}px`,
      [left < window.innerWidth / 2 ? 'left' : 'right']: `${
        left < window.innerWidth / 2 ? left : window.innerWidth - right
      }px`,
    }
  }
)

const { skills } = useData()

function toggleTag(tag: string) {
  const index = props.modelValue?.indexOf(tag) ?? -1
  if (index === -1) {
    emit('update:modelValue', [...(props.modelValue ?? []), tag])
  } else {
    emit('update:modelValue', props.modelValue?.filter((t) => t !== tag) ?? [])
  }
}
</script>

<style scoped></style>
