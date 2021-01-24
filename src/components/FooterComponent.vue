<template>
  <nav class="glass">
    <a
      href="https://www.github.com/mutad"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/ios/100/000000/github.png"
        height="50"
        alt="My Github Account"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/nazar-potipaka-336096171/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/ios/100/000000/linkedin-circled--v1.png"
        height="50"
      />
    </a>
    <a
      href="https://twitter.com/_mutado_"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/ios/100/000000/twitter-squared.png"
        height="50"
      />
    </a>
    <a href="mailto:mutado.nzr@gmail.com">
      <img
        src="https://img.icons8.com/ios/100/000000/apple-mail.png"
        height="50"
      />
    </a>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 10px;
}
nav > * {
  padding: 5px;
  transition: filter 0.3s;
}

nav > *:hover {
  filter: invert(0.5);
}

@media (prefers-color-scheme: dark) {
  nav > * {
    filter: invert(1);
  }
}
</style>