<script lang="ts" setup></script>

<template>
  <transition
    appear
    enter-active-class="transition-opacity duration-200 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <main class="grow flex flex-col justify-center items-center">
      <nav>
        <h1
          class="font-playfair text-[70px] sm:text-[100px] md:text-[160px] cursor-default select-none"
        >
          portfolio
        </h1>
        <ul class="flex flex-col sm:flex-row gap-8">
          <li>
            <router-link
              class="btn"
              to="/about"
            >
              about
            </router-link>
          </li>
          <li>
            <router-link
              class="btn"
              to="/activity"
            >
              activity
            </router-link>
          </li>
          <li>
            <router-link
              class="btn"
              to="/projects"
            >
              projects
            </router-link>
          </li>
          <li>
            <router-link
              class="btn"
              to="/contact"
            >
              contact
            </router-link>
          </li>
        </ul>
      </nav>
    </main>
  </transition>
</template>
