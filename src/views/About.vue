<template>
    <HomeNavBar />
    <div class="flex flex-col justify-between shadow-md rounded px-auto pt-6 pb-8 m-4 bg-gray-100">
        <h2 class="mx-2 mb-2 font-bold text-trale text-2xl ">About us</h2>
        <p class="mx-2 wordmark-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora debitis magnam voluptas vero porro, quasi temporibus rerum iure cum perspiciatis illum, aut accusantium sequi neque, eum itaque quae dolor.</p>

    </div>
</template>

<script setup>
import HomeNavBar from '../components/HomeNavBar.vue';

</script>

<style scoped>
.text-trale{
    color: #0067A3;
}

.wordmark-color {
    color: #2A4657;
}
</style>