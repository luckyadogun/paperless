<template>
  <div>
    <div class="mx-8 md:mx-0 text-theme-secondary" style="font-family: 'Inter', sans-serif;">
      <h1 class="font-black md:font-semibold text-4xl md:text-5xl tracking-tighter mt-16 md:mt-0 md:mb-16">
        Signup or Login
      </h1>

      <div class="my-10">
        <button
          class="md:flex md:justify-center border-2 border-gray-300 px-10 py-5 w-full rounded-full text-left focus:outline-none mb-5"
        >
          <span class="flex items-center font-bold text-lg">
            <img class="mr-6" src="~/assets/images/google.svg" alt="" />
            Continue with Google
          </span>
        </button>

        <button
          class="md:flex md:justify-center border-2 border-gray-300 px-10 py-5 w-full rounded-full text-left focus:outline-none mb-5"
        >
          <span class="flex items-center font-bold text-lg">
            <img class="mr-6 " src="~/assets/images/facebook.svg" alt="" />
            Continue with Facebook
          </span>
        </button>

        <div class="flex items-center justify-center border-gray-300 mb-5">
          <hr class="border-1 w-1/3 mr-2" />
          <p class="text-sm font-bold text-opacity-50 text-theme-secondary">
            OR
          </p>
          <hr class="border-1 w-1/3 ml-2" />
        </div>

        <input
          class="border-2 border-gray-300 px-10 py-5 w-full rounded-full focus:outline-none mb-5"
          type="email"
          placeholder="Enter your email address"
        />
        <button
          class="bg-theme-primary text-white font-bold px-10 py-5 w-full rounded-full focus:outline-none mb-5"
        >
          Continue with Email
        </button>

        <p class="text-center text-sm tracking-tighter md:px-12 lg:px-20 xl:px-24">
          By continuing with Google, Facebook, or Email, you agree to Paperless’
          <span class="font-bold"><a href="#">Terms of Service</a></span>
          and
          <span class="font-bold"><a href="#">Privacy Policy</a></span
          >.
        </p>
      </div>
    </div>
  </div>
</template>
