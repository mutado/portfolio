<template>
  <generic-card :title="company.name">
    <template #description>
      {{ company.location }}
    </template>
    <tag-pill
      v-for="tag in [
        company.remote ? 'Remote' : 'On-site',
        company.team_size ? `${company.team_size} people` : null,
        company.type ?? null,
      ].filter((t) => t)"
      :key="tag"
    >
      {{ tag }}
    </tag-pill>
  </generic-card>
</template>

<script lang="ts" setup>
import GenericCard from '@/components/cards/GenericCard.vue'
import type { Company } from '@/composables/data'
import type { PropType } from 'vue'
import TagPill from '@/components/TagPill.vue'

defineProps({
  company: {
    type: Object as PropType<Company>,
    required: true,
  },
})
</script>

<style scoped></style>
