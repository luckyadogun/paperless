<template>
    <div class="md:bg-white py-8 w-full text-theme-secondary" style="font-family: 'Inter', sans-serif;">
        <p class="text-center tracking-tighter font-black text-xl md:text-2xl mb-4 md:mb-2">How Paperless Works</p>
        <div class="md:flex h-auto w-full py-8 px-2 md:px-8 mb-2" id="how_it_works" style="font-family: 'Actor', sans-serif;">
            <div id="item-1" class="flex justify-center items-center mb-12 md:-mb-4" v-for="item in cardItems" :key="item.id">
                <div class="mr-5 md:mx-8 shadow-xl md:shadow-none rounded-full h-16 w-20 md:w-32 lg:w-24 flex items-center justify-center bg-white">
                    <img :src="require(`~/assets/images/${item.url}`)" class="h-10 items-center" alt="">
                </div>
                <div class="text-theme-secondary shadow-xl md:shadow-none rounded-lg h-24 md:h-40 lg:h-32 w-full flex items-center justify-start bg-white px-4 text-sm leading-tight font-bold">
                    {{ item.text }}
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
    name: 'how-it-works',
    computed: {
        cardItems: function() {
            this.$store.commit('howItWorksItems')
            return this.$store.state.paperlessProcess
        }
    }
}
</script>