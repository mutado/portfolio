<template>
  <main class="flex grow items-center justify-center">
    <div
      class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto,1fr,1fr] grid-flow-row gap-16"
    >
      <div class="md:col-span-2 lg:col-span-1">
        <img
          alt="Nazar Potipaka Photo"
          class="h-48 w-48 rounded-full"
          src="@/assets/Avatar.png"
        />
      </div>
      <div class="flex flex-col gap-5">
        <section class="flex flex-col gap-3">
          <h1 class="font-playfair text-5xl">hello!</h1>
          <p>
            I'm Nazar Potipaka, a
            <b>full-stack</b>
            developer.
          </p>
          <p>
            With more than three years of expertise in full-stack development, I
            specialize in creating efficient and user-friendly web apps. My
            knowledge of Laravel and Vue.js was developed through practical work
            experience on a variety of projects, including inventory management
            systems and event management platforms. Working together with teams
            to produce excellent solutions. With a Bachelor's degree in Computer
            Science and a strong programming foundation from IT Academy STEP, I
            excel at API creation, testing, and user experience optimization. My
            love for innovation motivates me to always improve my abilities and
            contribute to important projects.
          </p>
        </section>
        <section class="flex flex-col gap-3">
          <h2 class="font-playfair text-3xl">experience</h2>
          <ul class="flex flex-col gap-2.5">
            <router-link
              v-for="company in data.companies.slice(0, 3)"
              :key="company.slug"
              :to="`/companies/${company.slug}`"
              as="li"
              class="flex flex-col gap-0.5 group"
            >
              <h3
                class="font-playfair text-xl group-hover:underline underline-offset-4"
              >
                {{ company.name }}
              </h3>
              <p>
                {{ company.positions?.[0]?.title }}
              </p>
              <p class="lowercase text-sm">
                <time>{{ moment(company.start_date).format('MMM YYYY') }}</time>
                -
                <time v-if="company.end_date">
                  {{ moment(company.end_date).format('MMM YYYY') }}
                </time>
                <span v-else>present</span>
              </p>
            </router-link>
          </ul>

          <router-link
            v-if="data.companies.length > 3"
            class="font-playfair text-xl hover:underline underline-offset-4"
            to="/companies"
          >
            view all ({{ data.companies.length }})
          </router-link>
        </section>
      </div>
      <div class="flex flex-col gap-5">
        <section class="flex flex-col gap-3">
          <h2 class="font-playfair text-3xl">education</h2>
          <ul class="flex flex-col gap-2.5">
            <router-link
              v-for="school in data.schools.slice(0, 3)"
              :key="school.slug"
              :to="`/schools/${school.slug}`"
              as="li"
              class="flex flex-col gap-0.5 group"
            >
              <h3
                class="font-playfair text-xl group-hover:underline underline-offset-4"
              >
                {{ school.name }}
              </h3>
              <p>
                {{ school.degree }}
              </p>
              <p class="lowercase text-sm">
                <time>{{ moment(school.start_date).format('MMM YYYY') }}</time>
                -
                <time v-if="school.end_date">
                  {{ moment(school.end_date).format('MMM YYYY') }}
                </time>
                <span v-else>present</span>
              </p>
            </router-link>
          </ul>

          <router-link
            v-if="data.schools.length > 2"
            class="font-playfair text-xl hover:underline underline-offset-4"
            to="/schools"
          >
            view all ({{ data.schools.length }})
          </router-link>
        </section>
        <section class="flex flex-col gap-3">
          <h2 class="font-playfair text-3xl">top skills</h2>
          <ul class="flex flex-col gap-2.5">
            <router-link
              v-for="([key, count], i) in Object.entries(getSkills())
                .sort(([_a, a], [_b, b]) => b - a)
                .slice(0, 5)"
              :key="key"
              :to="`/skills/${key}`"
              as="li"
              class=""
            >
              <tag-pill class="text-base">
                <tag-presenter :tag="key" />
                <small>({{ count }})</small>
              </tag-pill>
            </router-link>
          </ul>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="font-playfair text-3xl">languages</h2>
          <ul class="flex flex-col gap-2.5">
            <li
              v-for="language in data.languages"
              :key="language.slug"
              class="flex gap-2 items-end"
            >
              <h3 class="font-playfair text-xl">
                {{ language.name }}
              </h3>
              <small>
                {{ language.level }}
              </small>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import data from '@/data.json'
import moment from 'moment'
import { getSkills } from '@/utils/helpers'
import TagPill from '@/components/TagPill.vue'
import TagPresenter from '@/components/TagPresenter.vue'

console.log(data)
</script>
