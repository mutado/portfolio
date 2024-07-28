<template>
  <div class="flex flex-col">
    <time-line :items="companies">
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
        <company-card :company="item"/>
      </template>
    </time-line>
  </div>
</template>
<script lang="ts" setup>
import useData from '@/composables/data'
import TimeLine from '@/components/TimeLine.vue'
import DatePresenter from '@/components/DatePresenter.vue'
import CompanyCard from '@/components/cards/CompanyCard.vue'

const { companies } = useData()
</script>
