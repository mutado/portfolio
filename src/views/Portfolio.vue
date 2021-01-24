<template>
  <div id="portfolio">
    <ul class="timeline">
      <li v-for="project in projects" v-bind:key="project.time">
        <timeline-project-component v-bind:project="project" />
      </li>
    </ul>
  </div>
</template>

<script>
import projectsJson from "../assets/data.json";
export default {
  data() {
    return {
      projects: projectsJson,
    };
  },
};
</script>

<style>
ul.timeline {
  list-style: none;
  padding-left: 0;
}
ul.timeline li {
  display: flex;
  width: 100%;
}
ul.timeline .timeline-date {
  width: 20%;
  text-align: right;
  position: relative;

  border-right: 1px solid var(--color-secondary);
  margin-right: 30px;
  padding: 10px;

  color: var(--color-secondary);
}
ul.timeline .timeline-date::after {
  position: absolute;
  right: -4px;
  top: 16px;

  width: 7px;
  height: 7px;

  content: " ";
  border-radius: 50%;
  background-color: var(--color-text);
}
ul.timeline .timeline-content {
  text-align: left;
  width: 100%;
  padding: 8px 0 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
}
ul.timeline li:last-child .timeline-content {
  border-bottom: none;
}
ul.timeline .timeline-content > *:first-child {
  margin-top: 0;
}

.project-title {
  margin-bottom: 0;
}
.project-title > a {
  color: inherit;
}
.project-subtitle {
  margin-top: 0;
}

@media screen and (max-width: 600px) {
  ul.timeline .timeline-date::after {
    display: none;
  }
  ul.timeline .timeline-date {
    border-right: none;
    text-align: left;
    width: 100%;
  }
  ul.timeline li {
    flex-direction: column;
    border-top: 1px solid gray;
  }
  ul.timeline .timeline-content {
    padding: 10px;
    border-bottom: none;
  }
}
</style>