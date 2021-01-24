<template>
  <div id="about">
    <h3>Hello, my name is Nazar.</h3>
    <p>
      A developer from Ukraine that loves building Progressive Web Applications
      and something beautiful.
    </p>
    <hr />
    <p>
      I primarily use <b>PHP</b> but picking up a new framework or language is
      not a problem for me. I have decent programming experience, and I'm
      comfortable developing on the front-end or back-end.
    </p>
    <hr />
    <nav>
      <router-link to="/portfolio" class="glass btn">Portfolio</router-link>
      <router-link to="/skills" class="glass btn">Skills</router-link>
    </nav>
  </div>
</template>
<style scoped>
#about {
  padding: 5px 20px;
  text-align: left;
}
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, var(--hr-gradient));
}

nav {
  display: flex;
  justify-content: center;
}
</style>
