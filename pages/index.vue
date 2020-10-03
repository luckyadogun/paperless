<template>
  <div id="app" 
    class="md:bg-theme-tertiary h-screen"
    :style="{ 
          backgroundImage:  `url(${backgroundManAsset})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right -100px top',
      }">
    <div id="index">
      <Header />
      <Home />      
    </div>
  </div>
</template>

<script>
import backgroundManAsset from '~/assets/images/man.png'

export default {
  data() {
    return {
      backgroundManAsset
    }
  },

  beforeMount() {
    if (screen.width < 768) {
        this.backgroundManAsset = '';
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Actor&family=Inter:wght@300;900&family=PT+Sans:wght@700&display=swap');

</style>
