<template>
    <div id="mobile" class="text-theme-secondary">
        <h1 class="text-3xl font-bold leading-none mb-6">
            Ship your startup idea
            to real users, with real code.
            No coding skills required
        </h1>
        <p class="text-sm mb-8 font-medium ">
            Tweak our fully customizable mobile app scaffolds to fit your concept. 
            Launch, validate your idea and gain real world feedback in <span class="font-black">30 days or less!</span>
        </p>
        <div class="mb-20">
            <InviteForm />
        </div>
        
        <p class="text-center tracking-tighter font-bold text-xl mb-6">How Paperless Works</p>
        
        <div class="h-auto w-full py-8 px-2" id="how_it_works">
            <div id="item-1" class="flex justify-center items-center mb-12" v-for="item in cardItems" :key="item.id">
                <div class="mr-5 shadow-xl rounded-full h-16 w-20 flex items-center justify-center bg-white">
                    <img src="~/assets/images/idea.svg" class="h-10 items-center" alt="">
                </div>
                <div class="shadow-xl rounded-lg h-24 w-full flex items-center justify-start bg-white px-4 text-sm leading-tight font-bold">
                    {{ item.text }}
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            cardItems: [
                { id: 1, url: '~/assets/images/idea.svg', text: "Create a project similar to popular apps eg: Uber for X. Youtube for Y"},
                { id: 2, url: '~/assets/images/idea.svg', text: "Tweak the app to fit your use-case and target outcome"},
                { id: 3, url: '~/assets/images/idea.svg', text: "Get notified when ready. Launch to the world and learn from your dashboard"},
            ] 
        }
    }

}
</script>

<style>
    #mobile {
        font-family: 'Inter', sans-serif;
    }

    #how_it_works {
        font-family: 'Actor', sans-serif;
    }
</style>