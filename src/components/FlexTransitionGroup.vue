<template>
  <transition-group
    @before-leave="transitionLeave"
  >
    <slot />
  </transition-group>
</template>

<script lang="ts" setup>
function transitionLeave(el: Element) {
  if (el instanceof HTMLElement) {
    const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)

    el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
    el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
    el.style.width = width
    el.style.height = height
  }
}
</script>

<style scoped></style>
