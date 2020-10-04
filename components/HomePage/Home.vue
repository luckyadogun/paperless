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
          backgroundImage:  `url(${backgroundPinkieAsset})`, 
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

      <div id="testimonial" class="px-16 xl:px-24 py-6 h-40 w-3/6 mb-20 xl:text-xl lg:text-lg md:hidden lg:block"
        :style="{ 
          backgroundImage:  `url(${backgroundQuoteAsset})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top -20px',
          backgroundSize: '60px 100px'
        }">
        <img @click="changeQuote()" class="ml-auto mb-4" :src="`${arrowAsset}`" alt="arrow">
        <p class="leading-6 font-medium mb-4">
          {{ currentQuote.text }}
        </p>
        <p class="quote-author ml-auto">
          {{ currentQuote.author }}
        </p>
      </div>
     
    </div>
  </div>
</template>

<script>
import backgroundPinkieAsset from '~/assets/images/pinkie.svg'
import backgroundQuoteAsset from '~/assets/images/quote.svg'
import arrowAsset from '~/assets/images/arrow.svg'

export default {
  data() {
    return {
      backgroundPinkieAsset,
      backgroundQuoteAsset,
      arrowAsset,
      quotes: [
        {text: 'I still cannot believe we launched ZaraSoft and got funding ' + 
        'from our users with no investors! I just wish I found these ' + 
        'guys earlier than I did. Cheers!', author: 'Mark Uchemba - ZaraSoft'}, 

        {text: "I just can't get enough of Paperless. I want to get a T-Shirt " + 
        "with Paperless on it so I can show it off to everyone. I love " + 
        "your system. I wish I would have thought of it first. I wish I " + 
        "would have thought of it first.", author: 'Michael Uba - Darader'},

        {text: 'It really saves me time and effort. Paperless is exactly what our business has been lacking.',
        author: 'Steve - DigiSoft'}
        
        ],
      currentQuote: {
        text: 'Paperless is awesome! It\'s exactly what I\'ve been looking for. Paperless is the real deal!',
        author: 'Mark Uchemba - ZaraSoft'
        }
    }
  },

  methods: {
    changeQuote: function (){
      this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      return this.currentQuote;
    }
  }
}
</script>

<style>
  #testimonial {
    font-family: 'Abel', sans-serif;
  }

  .quote-author {
    font-family: 'Abhaya Libre', serif;
    float: right;
  }
</style>