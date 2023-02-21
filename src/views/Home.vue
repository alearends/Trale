<template>
    <HomeHeader />
    <div class="flex flex-col justify-center items-center w-full overflow-hidden bg-nav pb-24">
        <div class="flex flex-col items-center w-96 gap-5 sm:w-full md:w-1/2">
            <h5 class="font-[Nunito] italic text-9xl wordmark-color font-bold">Trale</h5>
            <p class="font-[Nunito] italic text-4xl text-center text-trale font-bold white-space-nowrap">
                Prioritized Task List for Agile Individuals</p>
            <div class="flex flex-row items-center justify-around gap-5">
                <router-link :to="{ name: 'Register' }" custom v-slot="{ navigate }">
                    <button
                        class="text-white text-lg bg-wordmark font-bold px-3 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-trale hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito]"
                        @click="navigate" role="link" type="submit" title="Registrarse en Trale">
                        Register New User
                    </button>
                </router-link>
                <router-link :to="{ name: 'Login' }" custom v-slot="{ navigate }">
                    <button
                        class="text-white text-lg bg-wordmark font-bold px-3 py-2 rounded focus:outline-none focus:shadow-outline  hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito] hover:bg-trale"
                        @click="navigate" role="link" type="submit" title="Usar Trale">
                        Start to Use
                    </button>
                </router-link>
            </div>
        </div>
    </div>
    <HomeFooter />
</template>



<script setup>
//vue


//components
import HomeNavBar from "../components/HomeNavBar.vue";
import HomeFooter from "../components/HomeFooter.vue";
import HomeHeader from "../components/HomeHeader.vue";

//supabase

//stores

</script>

<style scoped>
.border-bg-gif {
    border-color: #445D73;
}

.text-bg-gif {
    color: #445D73;
}

.bg-gif {
    background-color: #445D73;
}

.bg-nav{
    background-color:#F3F3F3;
}
</style>

