<template>
  <div id="mobile__header" :style="{backgroundImage: `url(${backgroundImagePath})`}">
      <Logo />
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImagePath: '@assets/images/main.svg'
    }
  }

}
</script>

<style>

</style>