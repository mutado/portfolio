<template>
  <div v-if="project != null" id="project">
    <div class="title">
      <h1>{{ project.title }}</h1>
      <small>{{ project.time }}</small>
    </div>
    <section>
      <p>
        {{ project.description }}
      </p>
      <div class="projects">
        <small
          v-for="skill in project.skills"
          v-bind:key="skill"
          class="glass badge"
          >{{ skill }}</small
        >
      </div>
    </section>
    <a v-if="project.github" :href="project.github" class="glass badge btn">GitHub</a>
    <a v-if="project.url" :href="project.url" class="glass badge btn">Open Project</a>
  </div>
</template>
<script>
import projectsJson from "../assets/data.json";

export default {
  data() {
    return {
      projects: projectsJson,
      project: null,
    };
  },
  mounted() {
    console.log(this.$route.params.name);
    this.project = this.projects.find(
      (project) => project.name == this.$route.params.name
    );

    this.projects.forEach((element) => {
      console.log(element.title);
    });
    console.log(this.project);
  },
};
</script>
<style scoped>
#project {
  padding: 10px 30px;
}
.title > h1 {
  margin: 0;
}
section{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
