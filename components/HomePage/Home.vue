<template>
  <div class="mt-8">
    <div id="mobile" class="md:hidden">
      <div class="p-8">
        <HomeMobile />
      </div>
      <MobileNotificationBar />
    </div>
    <div id="web" class="hidden md:block p-8">
      <h1>Web Version</h1>
    </div>
  </div>
</template>

<script>
import backgroundImagePath from '~/assets/images/main.svg'

export default {
  data() {
    return {
      backgroundImagePath
    }
  }
}
</script>
