<template>
  <div id="about">
    <h1>About me</h1>
    <p>
      Hello, my name is Nazar. I'm a full-stack developer that loves building
      Progressive Web Applications and something beautiful.
    </p>
    <hr />
    <section>
      <h1>Timeline</h1>
      <ul class="timeline">
        <li>
          <div class="timeline-date">
            <span>Now</span>
          </div>
          <div class="timeline-content">
            Studying Computer Science at Pomeranian Academy in Slupsk and
            working on my projects.
          </div>
        </li>
        <li>
          <div class="timeline-date">
            <span>Oct 2020</span>
          </div>
          <div class="timeline-content">
            Started my education at Pomeranian Academy in Slupsk
          </div>
        </li>
        <li>
          <div class="timeline-date">
            <span>Sep-Dec 2020</span>
          </div>
          <div class="timeline-content">
            <h3 class="project-title">
              <router-link to="/projects/bankown">Bankown</router-link>
            </h3>
            <small class="project-subtitle">Your own bank</small>
            <p>Simple Banking Application with API and Authorization</p>
          </div>
        </li>
        <li>
          <div class="timeline-date">
            <span>Jul 2020</span>
          </div>
          <div class="timeline-content">
            <h3 class="project-title">
              <router-link to="/projects/bankown">Blog</router-link>
            </h3>
            <small class="project-subtitle">Project for MassMedia Group</small>
            <p>Blog on Laravel</p>
          </div>
        </li>
        <li>
          <div class="timeline-date">
            <span>Apr-May 2020</span>
          </div>
          <div class="timeline-content">
            <h3 class="project-title">
              <router-link to="/projects/bankown">Messenger</router-link>
            </h3>
            <p>Messenger on sockets and API with Laravel server</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
#about {
  padding: 5px;
  text-align: center;
}
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, var(--hr-gradient));
}
</style>