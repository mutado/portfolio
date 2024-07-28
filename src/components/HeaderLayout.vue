<template>
  <transition
    appear
    enter-active-class="transition-opacity duration-2000 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-2000 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <nav class="flex flex-col lg:flex-row items-start sm:items-stretch gap-10">
      <router-link
        class="font-playfair text-6xl xs:text-7xl sm:text-8xl cursor-default select-none"
        to="/"
      >
        portfolio
      </router-link>
      <div class="flex sm:flex-col justify-between items-start">
        <transition-group
          :css="false"
          appear
          class="flex flex-col sm:flex-row gap-8 main-nav mt-4"
          tag="ul"
          @enter="
            (el, done) => {
              animate(
                el,
                {
                  opacity: [0, 1],
                },
                {
                  delay: el.dataset.index * 0.1,
                  duration: 0.2,
                  easing: 'ease-in',
                }
              ).finished.then(() => {
                done()
              })
            }
          "
        >
          <li
            v-for="(route, i) in routes"
            :key="route.name"
            :data-index="i"
            class="relative group text-base"
          >
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </transition-group>
        <transition-group
          :css="false"
          appear
          class="flex flex-col sm:flex-row gap-1 sub-nav ml-2 text-white-mute/75"
          tag="ul"
          @enter="
            (el, done) => {
              animate(
                el,
                {
                  opacity: [0, 1],
                },
                {
                  delay: el.dataset.index * 0.1,
                  duration: 0.2,
                  easing: 'ease-in',
                }
              ).finished.then(() => {
                done()
              })
            }
          "
          @leave="
            (el, done) => {
              animate(
                el,
                {
                  opacity: [1, 0],
                },
                {
                  delay: 0.5 - el.dataset.index * 0.1,
                  duration: 0.2,
                  easing: 'ease-out',
                }
              ).finished.then(() => {
                done()
              })
            }
          "
        >
          <li
            v-for="(child, i) in activeRoute?.children"
            :key="child.name"
            :data-index="i + routes.length / 2"
          >
            <router-link
              :to="{ name: child.name }"
              class="text-sm"
            >
              {{ child.name }}
            </router-link>
          </li>
        </transition-group>
      </div>
    </nav>
  </transition>
  <router-view v-slot="{ Component }">
    <transition
      appear
      enter-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { animate } from 'motion'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const routes = [
  { name: 'about', path: '/about' },
  {
    name: 'experience',
    path: '/experience',
    children: [
      { name: 'projects', path: '/projects' },
      { name: 'companies', path: '/companies' },
      { name: 'education', path: '/education' },
      // { name: 'skills', path: '/skills' },
    ],
  },
  { name: 'activity', path: '/activity' },
  { name: 'contact', path: '/contact' },
]

const route = useRoute()
const activeRoute = computed(() =>
  routes.find((r) => route.matched.some((m) => m.name === r.name))
)
</script>

<style lang="postcss" scoped>
li {
  @apply flex flex-col;
}

.main-nav li a {
  @apply px-4 py-1;
}

.sub-nav li a {
  @apply px-2 py-1;
}

li a::after {
  content: '';
  @apply block bg-white h-0.5 w-full transform origin-left transition-transform duration-200;
}

li a:not(.router-link-active) {
}

li:not(:hover) a:not(.router-link-active)::after {
  @apply scale-x-0;
}
</style>
