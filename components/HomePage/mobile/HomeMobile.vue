<template>
    <div>
        <div class="text-4xl">
            <MainTitle />
        </div>

        <div class="text-md leading-none mb-8 font-medium ">
            <SubTitle />
        </div>

        <div class="mb-20">
            <InviteForm />
        </div>
        
        <div>
            <p class="text-center tracking-tighter font-black text-xl mb-4">How Paperless Works</p>
            <div class="h-auto w-full py-8 px-2 mb-8" id="how_it_works" style="font-family: 'Actor', sans-serif;">
                <div id="item-1" class="flex justify-center items-center mb-12" v-for="item in cardItems" :key="item.id">
                    <div class="mr-5 shadow-xl rounded-full h-16 w-20 flex items-center justify-center bg-white">
                        <img :src="require(`~/assets/images/${item.url}`)" class="h-10 items-center" alt="">
                    </div>
                    <div class="shadow-xl rounded-lg h-24 w-full flex items-center justify-start bg-white px-4 text-sm leading-tight font-bold">
                        {{ item.text }}
                    </div>
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
                { id: 1, url: 'idea.svg', text: "Create a project similar to popular apps eg: Uber for X. Youtube for Y"},
                { id: 2, url: 'user-interface.svg', text: "Tweak the app to fit your use-case and target outcome"},
                { id: 3, url: 'rocket.svg', text: "Get notified when ready. Launch to the world and learn from your dashboard"},
            ] 
        }
    }

}
</script>
