<template>
  <div class="flex flex-col">
    <template v-if="project">
      <section>
        <div class="flex gap-8 overflow-x-auto p-4">
          <img
            v-for="image in project.images"
            :key="image"
            :src="image"
            class="rounded-xl shadow-lg shadow-gray-700 w-[600px] h-[400px] object-contain"
          />
        </div>
      </section>
      <header class="flex gap-5 items-center">
        <h1 class="text-3xl font-bold">{{ project.name }}</h1>
        <v-button
          v-if="project.website"
          :href="project.website"
          class="flex items-center gap-1"
        >
          <icon-external class="h-4" />
          Visit website
        </v-button>
      </header>
      <p class="text-gray-300 max-w-prose">{{ project.description }}</p>
      <section>
        <h2 class="text-xl font-bold">Skills</h2>
        <ul class="flex gap-2 mt-2">
          <li
            v-for="skill in project.skills"
            :key="skill"
          >
            <tag-pill>
              <tag-presenter :tag="skill" />
            </tag-pill>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>
<script lang="ts" setup>
import useData from '@/composables/data'
import VButton from '@/components/VButton.vue'
import IconExternal from '@/components/icons/IconExternal.vue'
import TagPresenter from '@/components/TagPresenter.vue'
import TagPill from '@/components/TagPill.vue'

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
})

const { projects } = useData()
const project = projects.find((p) => p.key === props.projectId)
</script>
