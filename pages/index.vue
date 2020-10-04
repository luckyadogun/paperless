<template>
  <div id="app" 
    class="md:bg-theme-tertiary h-full"
    :style="{ 
          backgroundImage:  `url(${screenResized})`, 
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
import Vue from 'vue';
import backgroundManAsset from '~/assets/images/man.png'

export default {
  data() {
    return {
      backgroundManAsset,
      backgroundImageBlank: ''
    }
  },

  computed: {
    screenResized: function(){           
      if (process.browser) {
        if (window.screen.width < 768){
         return this.backgroundImageBlank;
        } else if (window.screen.width > 768) {
          return this.backgroundManAsset;
        }

        window.onresize = () => {console.log('resized')}
      }
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Abhaya+Libre:wght@700&family=Actor&family=Inter:wght@300;900&family=PT+Sans:wght@700&display=swap');

</style>
