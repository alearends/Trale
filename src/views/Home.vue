<template>
    <div class="flex w-full overflow-hidden relative">
        <div class="relative float-left w-full flex justify-center items-center">
            <img src="../assets/geopliegue.jpg" class="block w-full bg-cover" alt="..." />
            <div class="flex flex-col-reverse items-center absolute z-30">
                <img src="../assets/anima-trale-v2.gif" class="block w-4/5 bg-cover rounded " alt="..." />
                <div class=" flex flex-col items-center absolute bottom-3 z-50 w-full">
                    <p class="font-[Nunito] text-xl text-white font-bold absolute bottom-64 white-space-nowrap">
                        Prioritized Task List for Agile Individuals</p>
                    <router-link :to="{ name: 'Register' }" custom v-slot="{ navigate }">
                        <button
                            class="text-white font-bold  px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gif hover:border-gray-700 hover:text-white duration-200 border-solid border-2 border-white font-[Nunito] absolute bottom-1"
                            @click="navigate" role="link" type="submit" title="Registrarse en Trale">
                            Start
                        </button>
                    </router-link>
                </div>
                <h5 class="font-[Nunito] italic text-9xl text-white font-bold z-20">Trale</h5>
            </div>
        </div>
    </div>

    <!-- <div class="flex w-full overflow-hidden relative">
  <div class="relative float-left w-full flex justify-center items-center">
    <img src="../assets/geopliegue.jpg" class="block w-full bg-cover" alt="..." />
    <div class="relative z-30">
      <img src="../assets/anima-trale-v1.gif" class="block w-4/5 bg-cover absolute z-40" alt="..." />
      <div class="relative flex flex-col items-center z-50">
        <h5 class="font-[Nunito] italic text-9xl text-white font-bold">Trale</h5>
        <p class="font-[Nunito] text-xl text-trale font-bold absolute top-20">si las rocas pueden ser flexibles, tu mente tambien</p>
        <button class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-blue-700 font-[Nunito]" type="submit" title="Registrarse en Trale">Registrarse</button>
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