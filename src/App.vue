<template>
  <section>
    <!-- <HomeNavBar /> -->
    <router-view class="app-main" />
    <!-- <h2 class="text-2xl mt-5 text-center text-white font-bold font-[Nunito]">The Trale</h2> -->
    <!-- <FormAuth /> -->
    <!-- <Register /> -->
    <!-- <VueDraggable /> -->
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";
// import HomeNavBar from './components/HomeNavBar.vue';
// import Register from './components/Register.vue';
// import FormAuth from './components/FormAuth.vue';

// import VueDraggable from "./components/VueDraggable.vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// onMounted(async () => {
//   console.log("Bienvenidos a mi App");
//   try {
//     await userStore.fetchUser(); // here we call fetch user
//     if (!user.value) { 
//       console.log("aun no estas logueado");
//       // redirect them to logout if the user is not there
//       router.push({ path: "/register" });
//     } else {
//       // continue to dashboard
//       console.log("ya eres de los nuestros");
//       router.push({ path: "/thetrale" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>