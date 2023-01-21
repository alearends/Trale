<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <!-- Error Handling -->
        <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-nav shadow-lg">
            <p class="text-red-500">{{ errorMsg }}</p>
        </div>

        <!-- Register -->
        <h2 class="text-2xl text-white mb-4">Register</h2>
        <form @submit.prevent="register" method="post" class="bg-gray-100 shadow-md rounded px-16 pt-6 pb-8 m-4">
            <!-- Formulario aquí -->
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-[Nunito]" for="username">
                    Nombre de usuario
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" v-model="username" required>
                </label>
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-[Nunito]" for="email">
                    Dirección de correo electrónico
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" name="email" type="email" required v-model="email" placeholder="e-mail">
                </label>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 font-[Nunito]" for="password">
                    Crea una Contraseña
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" name="password" type="password" required v-model="password"
                        placeholder="password">
                </label>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold font-[Nunito]" for="verifypassword">
                    Reescribe la contraseña
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="verifypassword" name="verifypassword" type="password" required v-model="verifyPassword"
                        placeholder="please repeat password">
                </label>
            </div>
            <div class="flex items-center justify-between mb-6 md:px-64">
                <button
                    class="bg-trale text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-transparent font-[Nunito]"
                    type="submit" title="Registrarse en Trale">
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
import { useUserStore } from "../store/user";

//Create data/vars
const userStore = useUserStore();
const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');
const verifyPassword = ref('');
const errorMsg = ref(null);

//Register function (useUserStore)

const register = async () => {
    if (password.value === verifyPassword.value) {
        try {
            const { error } = await userStore.signUp(email.value, password.value);
            if (error) throw error;
            router.push({ name: "Login" });
            // console.log("los 2 passwords son iguales");
        } catch (error) {
            errorMsg.value = error.message;
        }
    }
    errorMsg.value = "Error: Passwords do not match";
    setTimeout(() => {
        errorMsg.value = null;
    }, 5000);
}

//Register function (original)

// const register = async () => {
//     if(password.value === verifyPassword.value){
//         try{
//             const {error} = await supabase.auth.signUp({
//                 email: email.value,
//                 password: password.value,
//             });
//             if (error) throw error;
//             router.push({name: "Login"});
//         } catch (error) {
//             errorMsg.value = error.message;
//         }
//     }
//     errorMsg.value = "Error: Passwords do not match";
//     setTimeout(() => {
//         errorMsg.value = null;
//     }, 5000);
// };

// const validateForm = () => {
//             if (this.password !== this.verifyPassword) {
//                 return false;
//             }
//             return true;
//         };

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


