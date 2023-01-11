<template>
    <span>
        <button
            @click="showModal = true" class="bg-trale font-bold text-white font-[Nunito] py-1 px-2 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-transparent"
            type="submit"> + add board
        </button>
        <Modal v-if="showModal" title="Add Board" labelA="Board Title" labelB="Board Color" inputBtype="color" @close="showModal = false" @submit="handleSubmit" />
    </span>
</template>

<script setup>
import { ref } from "vue";
import Modal from '../components/Modal.vue';

const showModal = ref(false)

function handleSubmit(){
console.log("Esto funciona")
}

// function handleClick(){
//     this.showModal = true
// } 

</script>

<style scoped>
.bg-nav {
    background-color: #E5E7EB;
}

.text-nav {
    color: #E5E7EB;
}

.wordmark-color {
    color: #2A4657;
}

.dropbtn {
    border: none;
    background: none;
}

.bg-trale {
    background-color: #0067A3;
}

.text-trale {
    color: #0067A3
}

.bg-wordmark-color {
    background-color: #2A4657;
}
</style>