<template>
  <div>
    <div 
      id="mobile" 
      v-bind:style="{ 
          backgroundImage:  `url(${backgroundImagePath})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
      }">
      <div 
        class="md:hidden p-8">
          <Logo />
      </div>
    </div>
    
    <!-- web -->
    <div 
      id="web">
      <div 
        class="hidden md:block p-8">
        <Logo />
      </div>
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