<template>
  <generic-card
    :description="project.description"
    :title="project.name"
  >
    <tag-pill
      v-for="skill in project.skills"
      :key="project.key + skill"
    >
      <tag-presenter :tag="skill" />
    </tag-pill>
  </generic-card>
</template>

<script lang="ts" setup>
import GenericCard from '@/components/cards/GenericCard.vue'
import type { PropType } from 'vue'
import type { Project } from '@/composables/data'
import TagPresenter from '@/components/TagPresenter.vue'
import TagPill from '@/components/TagPill.vue'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>

<style scoped></style>
