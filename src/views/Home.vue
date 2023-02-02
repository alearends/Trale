<template>
    <div class="flex w-full overflow-hidden relative">
        <div class="relative float-left w-full flex justify-center items-center">
            <img src="../assets/BackGround-Trale-smaller.jpg" class="block w-full bg-cover" alt="..." />
            <div class="flex flex-row gap-10 absolute z-30">
                <div class="flex flex-col items-center w-96 gap-5">
                    <h5 class="font-[Nunito] italic text-7xl wordmark-color font-bold z-50 pt-4">Trale</h5>
                    <p class="font-[Nunito] italic text-3xl text-center text-trale font-bold white-space-nowrap">
                        Prioritized Task List for Agile Individuals</p>
                    <div class="flex flex-row items-center z-50 w-full justify-around">
                        <router-link :to="{ name: 'Register' }" custom v-slot="{ navigate }">
                            <button
                                class="text-white text-xs bg-wordmark font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-trale hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito]"
                                @click="navigate" role="link" type="submit" title="Registrarse en Trale">
                                Register New User
                            </button>
                        </router-link>
                        <router-link :to="{ name: 'Login' }" custom v-slot="{ navigate }">
                            <button
                                class="text-white text-xs bg-wordmark font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline  hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito] hover:bg-trale"
                                @click="navigate" role="link" type="submit" title="Usar Trale">
                                Start to Use
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="block my-0 mx-auto">
                    <img src="../assets/Screen_Trale-transparente.png" class="block w-96 bg-cover" alt="">
                    <img src="../assets/anima-trale-v2.gif" class="block w-80 absolute top-8 right-8 rounded z-50" alt="..." />
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="relative position-relative w-full h-screen overflow-hidden">
        <img src="../assets/geopliegue.jpg" class="block w-full h-full object-cover" alt="..." />
        <div class="relative position-absolute flex flex-col items-center justify-center h-full">
            <div class="relative position-absolute flex flex-row justify-between h-1/2">
                <div class="relative position-absolute flex flex-col items-center justify-center">
                    <h5 class="font-[Nunito] italic text-8xl text-gray-900 font-bold">Trale</h5>
                    <p class="font-[Nunito] text-2xl text-yellow-500 font-bold white-space-nowrap">
                        Prioritized Task List for Agile Individuals</p>
                    <div class="relative position-absolute flex flex-row justify-between">
                    <router-link :to="{ name: 'Register' }" custom v-slot="{ navigate }">
                            <button
                                class="text-white font-bold px-4 mr-5 rounded focus:outline-none focus:shadow-outline hover:bg-gif hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito]"
                                @click="navigate" role="link" type="submit" title="Registrarse en Trale">
                                Register New User
                            </button>
                        </router-link>
                        <router-link :to="{ name: 'Login' }" custom v-slot="{ navigate }">
                            <button
                                class="text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gif hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito]"
                                @click="navigate" role="link" type="submit" title="Usar Trale">
                                Start to Use
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="relative position-absolute">
                    <img src="../assets/anima-trale-v2.gif" class="block w-1/2 object-cover rounded" alt="..." />
                </div>
            </div>
        </div>
    </div> -->


</template>



<script setup>
//vue

//components
import HomeNavBar from "../components/HomeNavBar.vue";

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
</style>