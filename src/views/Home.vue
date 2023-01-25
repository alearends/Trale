<template>
        <div class="flex w-full overflow-hidden relative">
        <div class="relative float-left w-full flex justify-center items-center">
            <img src="../assets/geopliegue.jpg" class="block w-full bg-cover" alt="..." />
            <div class="flex flex-col-reverse items-center absolute z-30">
                <img src="../assets/anima-trale-v2.gif" class="block w-4/5 bg-cover rounded " alt="..." />
                <div class=" flex flex-col items-center absolute bottom-3 z-50 w-full">
                    <p class="font-[Nunito] text-xl text-white font-bold absolute bottom-64 white-space-nowrap">
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
                <h5 class="font-[Nunito] italic text-9xl text-white font-bold z-20">Trale</h5>
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
    border-color: #0278BD;
}

.text-bg-gif {
    color: #0278BD;
}

.bg-gif {
    background-color: #0278BD;
}
</style>