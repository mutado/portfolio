<template>
  <div class="grow flex justify-center flex-col gap-2">
    <h1 class="text-8xl font-mono">404</h1>
    <p class="text-xl font-playfair">Page en route...</p>
    <small class="text-sm w-full max-w-prose">
      The page you are looking for does not exist or still under construction.
      I'm sorry for the inconvenience.
      <router-link to="/">
        <span class="underline">Return to home</span>
      </router-link>
    </small>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
