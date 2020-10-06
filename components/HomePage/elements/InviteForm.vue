<template>
  <div id="invite">
      <form name="invite-form" class="flex" netlify>
            <input
            v-model.lazy="email"
            type="email"
            placeholder="Enter your email address"
            class="w-full bg-gray-300 focus:outline-none h-16 rounded-l-lg text-md">

            <button v-on:click.prevent="execute()" class="bg-theme-primary h-16 w-64 text-white font-bold rounded-r-lg text-center focus:outline-none">
                Get Invited
            </button>  
      </form>

      <div v-if="data.notificationVisible" class="mt-5 text-sm font-bold">
          <p v-if="data.response.success.set" class="bg-green-200 text-xs text-center p-4 rounded-lg">
              {{ data.response.success.message }}
          </p>  
          <p v-else-if="data.response.failed.set" class="bg-red-200 text-xs text-center p-4 rounded-lg">
              {{ data.response.failed.message }}
          </p>  
      </div>

      
  </div>
</template>

<script>
import {validateEmail, subscribeUser} from '~/helpers/store/storeHelper';

export default {

  computed: {
    data: function(){
      this.$store.commit('inviteFormData')
      return this.$store.state.inviteFormItems
    },

    email: {
      get () {
        return this.$store.state.inviteFormItems.email
      },

      set (value) {
        this.$store.commit('updateEmail', value)
      }
    },
  },

  methods: {
    execute: function() {
      // console.log(this.data.email);
      let email = validateEmail(this.data.email);
      if (email) {
        subscribeUser(email);
        this.$store.commit('updateNotif', {success: true, failed: false})
      } else {
        this.$store.commit('updateNotif', {success: false, failed: true})
      }
    }
  }

}
</script>

<style>
  input, ::-webkit-input-placeholder {
    font-weight: bold;
    text-indent: 10px;
    color: #284268;
  }
</style>