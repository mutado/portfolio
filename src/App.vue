<script lang="ts" setup>
import { RouterView } from 'vue-router'
import useActivity from '@/utils/activity'

useActivity()
</script>

<template>
  <router-view />
</template>
