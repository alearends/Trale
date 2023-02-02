<template>
    <!-- firt Mobile: XS Size -->
    <nav class="p-3 bg-gray-100 shadow md:flex md:justify-between">
        <div class="flex justify-between">
            <span class="text-3xl font-[Nunito] wordmark-color font-extrabold items-center ">
                <img class="h-12 inline cursor-pointer" src="../assets/logo-trale-png-reverse.png" alt="trello logo">
                Trale
            </span>
            <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
            </span>
        </div>

        <ul
            class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gray-100 md:bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 font-[Nunito]">
            <router-link class="mx-4 my-6 md:my-0 text-xl wordmark-color font-bold hover:text-trale hover:font-bold duration-500" :to="{name: 'Home'}">Home</router-link>
            <router-link class="mx-4 my-6 md:my-0 text-xl wordmark-color font-bold hover:text-trale hover:font-bold duration-500" :to="{name: 'Register'}">Register</router-link>
            <router-link class="mx-4 my-6 md:my-0 text-xl wordmark-color font-bold hover:text-trale hover:font-bold duration-500" :to="{name: 'Login'}">Login</router-link>
            <router-link class="mx-4 my-6 md:my-0 text-xl wordmark-color font-bold hover:text-trale hover:font-bold duration-500" :to="{name: 'Home'}">Logout</router-link>
            <router-link :to="{name: 'TheTrale'}" custom v-slot="{navigate}">
            <button
                class="bg-trale text-white font-bold font-[Nunito] py-1 px-2 rounded focus:outline-none focus:shadow-outline hover:bg-wordmark-color hover:border-gray-100 hover:text-white duration-200 border-solid border-2 border-transparent"
                @click="navigate" role="link" type="submit" title="start to work">
                Start Now
            </button>
        </router-link>
        </ul>
    </nav>
</template>

<script setup>
import router  from '../router/index';
import { supabase } from '../supabase/supabase';
import { useRouter } from 'vue-router';

function Menu(e) {
    e.name === 'menu' ? e.name = "close" : e.name = "menu"
}

//Logout function
const logout = async () => {
    await supabase.auth.signOut();
    router.push({name: "Home"});
};


</script>

<style scoped>

.wordmark-color {
    color: #445D73;
}

.bg-trale {
    background-color: #445D73;
}


</style>