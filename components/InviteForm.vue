<template>
  <div id="invite">
      <div class="flex">
          <input
          v-model.lazy="email"
          type="text"
          placeholder="Enter your email address"
          class="w-full bg-gray-300 focus:outline-none h-16 rounded-l-lg">

          <button @click="subscribeUser()" class="bg-theme-primary h-16 w-auto text-white px-8 font-bold rounded-r-lg text-center focus:outline-none">
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
      response: {
        success: { message: "Successful! Check your email for a message from us.", set: false },
        failed: { message: "Ooops! Something went wrong somewhere. Try again!", set: true }
      },
      notificationVisible: false
    }
  },

  methods: {
    subscribeUser: function () {      
      let emailCorrect = confirm(`Kindly confirm your email: ${this.email}!`);

      if (emailCorrect == true) {
        // install mailchimp dependency
        // add user to the list
        this.displayNotification({success:true, failed:false});
      } else {
        this.displayNotification({success:false, failed:true});
      }
      this.email = ''
    },

    displayNotification: function({success, failed}={}) {
      this.response.success.set = success;
      this.response.failed.set = failed;
      this.notificationVisible = true;
      return setTimeout( () => this.notificationVisible = false, 5000)
    }
  },


}
</script>

<style>
  input, ::-webkit-input-placeholder {
    font-weight: bold;
    text-indent: 20px;
    color: #284268;
  }
</style>