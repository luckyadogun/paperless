<template>
  <div>
    <div class="mx-8 md:mx-0 text-theme-secondary" style="font-family: 'Inter', sans-serif;">
      <h1 class="font-black md:font-semibold text-4xl md:text-5xl tracking-tighter mt-16 md:mt-0 md:mb-16">
        Complete your profile        
      </h1>
      <p class="text-xl md:-mt-16 mt-1">with <strong>johndoe@gmail.com</strong></p>

      <div class="my-16">
        <input
          class="border-2 border-gray-300 px-10 py-6 w-full rounded-full focus:outline-none mb-5"
          type="email"
          placeholder="Enter your full name here"
        />
        <input
          class="border-2 border-gray-300 px-10 py-6 w-full rounded-full focus:outline-none mb-5"
          type="password"
          placeholder="*********************"
        />
        <div class="my-3 mb-10">
          <div class="flex items-center mb-2">
            <img class="mr-4" src="~/assets/images/good.svg" alt="">
            <p>Password must be at least 8 characters long.</p>
          </div>
          <div class="flex items-center mb-2">
            <img class="mr-4" src="~/assets/images/good.svg" alt="">
            <p>Avoid using abcdefgh, 12345678, password or similar.</p>
          </div>
        </div>
        <button
          class="bg-theme-primary text-white text-xl font-bold px-10 py-5 w-full rounded-full focus:outline-none mb-5"
        >
          Sign Up
        </button>

        <p class="text-center text-sm tracking-tighter md:px-12 lg:px-20 xl:px-24">
          By continuing with Google, Facebook, or Email, you agree to Paperless’
          <span class="font-bold"><a href="#">Terms of Service</a></span>
          and
          <span class="font-bold"><a href="#">Privacy Policy</a></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

