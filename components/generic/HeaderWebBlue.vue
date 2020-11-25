<template>
  <div>
    <div 
      id="mobile" 
      :style="{ 
          backgroundImage:  `url(${backgroundMainAsset})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top -20px right -30px',
          backgroundSize: '120px 120px'
      }">
      <div 
        class="md:hidden p-8">
          <Logo />
      </div>
    </div>
    
    <!-- web -->
    <div id="web" class="hidden md:block md:py-8 md:px-10 lg:px-20 lg:py-10">
      <nav class="flex items-center justify-between">
        <Logo />
        <div class="md:hidden flex justify-center text-theme-secondary tracking-tighter items-center font-black" style="font-family: 'Inter', sans-serif;">
          <NuxtLink to="/">
            <p class="mr-20 text-sm lg:text-lg">How it Works</p>
          </NuxtLink>

          <NuxtLink to="/">
            <button 
              class="border-theme-primary focus:outline-none tracking-tight font-bold px-6 py-2 rounded-full border-2 border-solid text-xs lg:text-lg text-white">
              Get Started
              </button>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import backgroundMainAsset from '~/assets/images/main.svg'

export default {
  data() {
    return {
      backgroundMainAsset
    }
  }
}
</script>