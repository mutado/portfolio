<template>
  <div class="glass sidebar">
    <figure>
      <!-- <img src="@/assets/images/home.png"/> -->
      <img src="/profile.jpg" class="glass border" height="150" alt="" />
      <figcaption>
        <h3>Nazar Potipaka</h3>
        <small>Full-stack Developer</small>
      </figcaption>
    </figure>
    <nav>
      <router-link active-class="active" class="glass btn" to="/">
        Home
      </router-link>
      <router-link active-class="active" class="glass btn" to="/portfolio">
        Portfolio
      </router-link>
      <router-link active-class="active" class="glass btn" to="/projects">
        Projects
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  text-align: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

img {
  border-radius: 50%;
}
figure {
  text-align: center;
}
figcaption > * {
  margin: 0;
}

nav > * {
  width: 100%;
}
.sidebar {
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  .sidebar {
    flex-direction: row;
    /* margin-bottom: 10px; */
  }
  /* nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
  nav > * {
    flex: 1 0 45%;
  } */
}
@media screen and (max-width: 600px) {
  .sidebar {
    flex-direction: column;
  }
}
</style>