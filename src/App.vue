<template>
  <div id="main">
    <sidebar class="sidebar"></sidebar>
    <div id="content" class="glass">
      <header>
        <h2>{{ currentRouteName() }}</h2>
      </header>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <component :is="Component" @event-test="$emit('new-test-event')" />
        </transition>
      </router-view>
    </div>
  </div>
  <footer-component class="footer"></footer-component>
</template>

<script>
export default {
  methods: {
    currentRouteName() {
      return this.$route.name;
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#main {
  display: flex;
}

#content {
  width: 100%;
  margin: 0 0 0 5px;
}
.sidebar {
  width: 20%;
  margin: 0 5px 0 0;
}
.footer {
  margin: 10px 0 0 0;
}

.glass header {
  background: var(--color-glass);

  margin-top: 0;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
}

.glass header > *:first-child {
  margin: 0;
}

@media screen and (max-width: 1200px) {
  #main {
    flex-direction: column;
  }

  #main > * {
    width: 100% !important;
  }

  #content,
  .sidebar,
  .footer {
    margin: 5px 0;
  }
}
</style>
