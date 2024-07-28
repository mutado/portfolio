<template>
  <generic-card :title="school.name">
    <template #description>
      {{ school.location }}
    </template>
    <tag-pill
      v-for="tag in [
        school.type ?? null,
        school.field_of_study ?? null,
      ].filter((t) => t)"
      :key="tag"
    >
      {{ tag }}
    </tag-pill>
  </generic-card>
</template>

<script lang="ts" setup>
import GenericCard from '@/components/cards/GenericCard.vue'
import type { Company, School } from '@/composables/data'
import type { PropType } from 'vue'
import TagPill from '@/components/TagPill.vue'

defineProps({
  school: {
    type: Object as PropType<School>,
    required: true,
  },
})
</script>

<style scoped></style>
