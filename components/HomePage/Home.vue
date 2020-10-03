<template>
  <div class="mt-8 text-theme-secondary" style="font-family: 'Inter', sans-serif;">
    <div id="mobile" class="md:hidden">
      <div class="p-8">
        <HomeMobile />
      </div>
      <MobileNotificationBar />
    </div>

    <div id="web" class="hidden md:block md:p-10 lg:px-20">
      <div class="text-4xl lg:text-5xl xl:text-6xl w-2/3" 
        style="font-family: 'Inter', sans-serif;"
        :style="{ 
          backgroundImage:  `url(${backgroundpinkieAsset})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '120px 120px'
        }">
        <MainTitle />
      </div>
      <div class="text-lg mb-8 font-medium md:w-2/3 lg:w-3/6" 
        style="font-family: 'Inter', sans-serif;">
          <SubTitle />
      </div>
      <div class="mb-20 md:w-2/3 lg:w-3/6">
          <InviteForm />
          <p class="my-5 text-sm font-bold"> We are launching to the world in 3-2-1. 
            Gain Early Access to our service and connect with our founders.
          </p>
      </div>
     
    </div>
  </div>
</template>

<script>
import backgroundpinkieAsset from '~/assets/images/pinkie.svg'

export default {
  data() {
    return {
      backgroundpinkieAsset
    }
  }
}
</script>
