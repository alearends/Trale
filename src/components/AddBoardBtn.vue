<template>
    <span>
        <button @click="showModal = true"
            class="bg-trale font-bold text-white font-[Nunito] py-1 px-2 rounded focus:outline-none focus:shadow-outline hover:bg-resalta hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-transparent"
            type="submit"> + add board
        </button>
        <Modal v-if="showModal" 
        title="Add Board" 
        labelA="Board Title" 
        labelB="Board Color"
        inputBtype="color"
        typeModal="board" 
        @close="showModal = false" 
        @submit="handleSubmit" />
    </span>
</template>

<script setup>
import { ref } from "vue";
import Modal from '../components/Modal.vue';

const emits = defineEmits(["addBoard"]); 

data: () => ({
    showModal
})

const showModal = ref(false);
function handleSubmit(data) {
    emits("addBoard", data);
    this.showModal = false;
}

</script>

<style scoped>

</style>