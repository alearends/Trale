<template>
    <HomeNavBar />
    <div>
        <!-- Error Handling -->
        <div v-if="errorMsg" class="mb-10 p-4 rounded bg-gray-100 shadow-md m-4 text-center">
            <p class="text-red-500 font-semibold text-center">{{ errorMsg }}</p>
        </div>

        <!-- Register -->
        <form @submit.prevent="register" class="bg-gray-100 shadow-md rounded px-16 pt-6 pb-8 m-4">
            <h2 class="text-2xl font-bold text-trale mb-4">Register</h2>
            <!-- Formulario aquí -->
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-[Nunito]" for="username">
                    Nombre de usuario
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" v-model="username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-[Nunito]" for="email">
                    Dirección de correo electrónico
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" required v-model="email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-[Nunito]" for="password">
                    Crea una Contraseña
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" required v-model="password">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold font-[Nunito]" for="verifypassword">
                    Reescribe la contraseña
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="verifypassword" type="password" required v-model="verifyPassword">
            </div>
            <div class="flex items-center justify-between mb-6 md:px-64">
                <button
                    class="bg-trale text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-transparent font-[Nunito]"
                    type="submit">
                    Registrarse
                </button>
                <div class="text-center">
                    <router-link
                        class="my-6 md:my-0 text-l wordmark-color font-bold hover:text-trale duration-500 cursor-pointer font-[Nunito]"
                        :to="{ name: 'Login' }">¿Ya tienes una cuenta?<span class="text-trale hover:wordmark-color">
                            Login</span></router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase/supabase";
import { useRouter } from "vue-router";
import HomeNavBar from "../components/HomeNavBar.vue";

//Create data/vars
const router = useRouter();
const username = ref(null);
const email = ref(null);
const password = ref(null);
const verifyPassword = ref(null);
const errorMsg = ref(null);

//Register function

const register = async () => {
    if (password.value === verifyPassword.value) {
        try {
            const { error } = await supabase.auth.signUp({
                email: email.value,
                password: password.value,
            });
            if (error) throw error;
            router.push({ name: "Login" });
        } catch (error) {
            errorMsg.value = error.message;
            setTimeout(() => {
                errorMsg.value = null;
            }, 5000);
        }
        return;
    }
    errorMsg.value = "Error: Passwords do not match";
    setTimeout(() => {
        errorMsg.value = null;
    }, 5000);
};

// return { email, password, verifyPassword, errorMsg, register };

</script>

<style scoped>
.bg-trale {
    background-color: #0067A3;
}

.text-trale {
    color: #0067A3;
}

.wordmark-color {
    color: #2A4657;
}

.bg-nav {
    background-color: #E5E7EB;
}
</style>


