<template>
  <div class="flex flex-col gap-4">
    <flex-transition-group
      class="flex flex-wrap gap-2"
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      leave-active-class="absolute transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      move-class="transition-transform duration-200"
      tag="ul"
    >
      <toggle-button
        key="toggleCommercial"
        v-model="filters.commercial"
      >
        Only commercial
      </toggle-button>
      <tag-pill
        v-for="tag in filters.tags"
        :key="'filter-tag-' + tag"
        removable
        @click="
          () => (filters.tags = filters.tags?.filter((t) => t !== tag) ?? [])
        "
      >
        <tag-presenter :tag="tag" />
      </tag-pill>
      <tags-filter
        key="tagsFilter"
        v-model="filters.tags"
        :tags="projects.flatMap((project) => project.skills)"
        class="gap-2 flex-wrap"
      ></tags-filter>
    </flex-transition-group>
    <time-line :items="filteredProjects">
      <template #before="{ item }">
        <time
          class="text-end shrink-0 grow-0 text-xs w-16 mt-1.5 text-gray-300"
        >
          <date-presenter
            :end="item.end_date"
            :start="item.start_date"
          />
        </time>
      </template>
      <template #after="{ item }">
        <project-card :project="item"/>
      </template>
    </time-line>
    <div
      v-if="
        Object.values(filters).filter(
          (v) => !!(Array.isArray(v) ? v?.length : v)
        ).length
      "
      class="flex flex-col items-center text-sm gap-3"
    >
      {{ projects.length - filteredProjects.length }} projects hidden by filters
      <button
        class="border rounded-full px-3 py-2"
        @click="clearFilters"
      >
        Clear filters
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useData from '@/composables/data'
import ToggleButton from '@/components/ToggleButton.vue'
import TagPill from '@/components/TagPill.vue'
import { computed, ref } from 'vue'
import DatePresenter from '@/components/DatePresenter.vue'
import TagsFilter from '@/components/TagsFilter.vue'
import FlexTransitionGroup from '@/components/FlexTransitionGroup.vue'
import TagPresenter from '@/components/TagPresenter.vue'
import TimeLine from '@/components/TimeLine.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'

const { projects, skills } = useData()
const filters = ref<{
  commercial?: boolean
  tags?: string[]
}>({
  commercial: false,
  tags: [],
})

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    return (
      (!filters.value.commercial || project.commercial) &&
      (!filters.value.tags?.length ||
        project.skills?.some((skill) => filters.value.tags?.includes(skill)))
    )
  })
})

function clearFilters() {
  filters.value = {}
  requestAnimationFrame(() => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

function transitionLeave(el: Element) {
  if (el instanceof HTMLElement) {
    const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)

    el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
    el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
    el.style.width = width
    el.style.height = height
  }
}
</script>

<style scoped></style>
