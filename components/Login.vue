<template>
  <div>
    <div
      id="mobile"
      class="text-theme-secondary md:hidden"
      style="font-family: 'Inter', sans-serif"
    >
      <Header />
      <LoginForm />
    </div>

    <div 
      id="webx" class="hidden md:block h-screen">
      <HeaderWebBlue />  

      <div class="flex w-full mt-10">
        <div class="md:w-auto lg:w-full xl:w-2/4 px-20">
          <LoginForm />
        </div>
        <div class="hidden xl:w-2/4"></div>
      </div>    
    </div>
  </div>
</template>

<style>
  
@media only screen and (min-width: 1280px) {
  #webx{
      background: border-box;
      background-image: url('https://res.cloudinary.com/zencoder/image/upload/v1606309681/hand_km845m.svg');
      background-repeat: no-repeat;
      background-size: 700px;
      background-position: right;
      top: 2%;
      right: 10%;
      bottom: 2%;
      left: 2%;
  }
}
</style>