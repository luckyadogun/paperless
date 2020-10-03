<template>
  <div id="invite">
      <div class="flex">
          <input
          v-model.lazy="email"
          type="email"
          placeholder="Enter your email address"
          class="w-full bg-gray-300 focus:outline-none h-16 rounded-l-lg text-xs">

          <button @click="validateEmail(email)" class="bg-theme-primary h-16 w-64 text-white font-bold rounded-r-lg text-center focus:outline-none">
              Get Invited
          </button>  
      </div>

      <div v-if="notificationVisible" class="mt-5 text-sm font-bold">
          <p v-if="response.success.set" class="bg-green-200 text-xs text-center p-4 rounded-lg">
              {{ response.success.message }}
          </p>  
          <p v-else-if="response.failed.set" class="bg-red-200 text-xs text-center p-4 rounded-lg">
              {{ response.failed.message }}
          </p>  
      </div>

      
  </div>
</template>

<script>
export default {

  data () {
    return {
      email: '',
      emailValidated: false,
      response: {
        success: { message: "Successful! Check your email for a message from us.😎", set: true },
        failed: { message: "Ooops! Something went wrong somewhere. Try again!😞", set: false },        
      },
      notificationVisible: false
    }
  },

  methods: {
    subscribeUser: function (email) {     
      
      // install mailchimp dependency
      // add user to the list.

      if (email /* check if response from mailchimp server is true */) {
        this.displayNotification({success:true, failed:false});
      } else {
        this.response.failed.message = "You already have an account with us!😜"
        this.displayNotification({success:false, failed:true});
      }      
    },

    displayNotification: function({success, failed}={}) {
      this.response.success.set = success;
      this.response.failed.set = failed;
      this.notificationVisible = true;
      return setTimeout( () => this.notificationVisible = false, 5000)
    },

    validateEmail: function(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (re.test(email) === true) {
        this.subscribeUser(email);
      } else {
        this.displayNotification({success:false, failed:true});
      }
      this.email = ''
    }
  },


}
</script>

<style>
  input, ::-webkit-input-placeholder {
    font-weight: bold;
    text-indent: 10px;
    color: #284268;
  }
</style>