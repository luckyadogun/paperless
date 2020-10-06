import backgroundManAsset from '~/assets/images/man.png'

export const state = () => ({
    // set the data
    paperlessProcess: [
        { id: 1, url: 'idea.svg', text: "Create a project similar to popular apps eg: Uber for X. Youtube for Y"},
        { id: 2, url: 'user-interface.svg', text: "Tweak the app to fit your use-case and target outcome"},
        { id: 3, url: 'rocket.svg', text: "Get notified when ready. Launch to the world and learn from your dashboard"},
    ],

    inviteFormItems: {
        email: '',
        emailValidated: false,
        response: {
            success: false ,
            failed: false ,     
            message: ""   
        },
        notificationVisible: false
    },

    backgroundImagesItems: {
        backgroundManAsset,
        backgroundImageBlank: ''
    }
})


export const mutations = {
    howItWorksItems(state) {
        state.paperlessProcess
    },

    inviteFormData(state) {
        state.inviteFormItems
    },

    updateEmail (state, email) {
        state.inviteFormItems.email = email
    },

    updateNotif (state, payload) {
        state.inviteFormItems.notificationVisible = true
        state.inviteFormItems.response.success = payload.success
        state.inviteFormItems.response.failed = payload.failed 
        state.inviteFormItems.response.message = payload.message 

        state.inviteFormItems.email = ''  
        // setTimeout( () => state.inviteFormItems.notificationVisible = false, 5000)     
    },

    backgroundImage (state) {
        state.backgroundImagesItems
    }
}

export const actions = {

}

