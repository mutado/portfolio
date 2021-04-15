<template>
  <div class="timeline-date">
    <span>{{ this.project.time }}</span>
  </div>
  <div class="timeline-content">
    <h3 class="project-title">
      <router-link :to="'/projects/'+project.name">{{ this.project.title }}</router-link>
    </h3>
    <small v-if="this.project.slogan != ''" class="project-subtitle">{{
      this.project.slogan
    }}</small>
    <p>{{ this.project.description }}</p>
    <small
      v-for="skill in this.project.skills"
      v-bind:key="skill"
      class="glass badge"
      >{{ skill }}</small
    >
  </div>
</template>
<script>
export default {
  props: ["project"],
};
</script>