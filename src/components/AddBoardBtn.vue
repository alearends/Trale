<template>
    <span>
        <button @click="showModal = true"
            class="bg-trale font-bold text-white font-[Nunito] py-1 px-2 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-transparent"
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
.bg-nav {
    background-color: #F3F3F3;
}

.text-nav {
    color: #F3F3F3;
}

.wordmark-color {
    color: #445D73;
}

.dropbtn {
    border: none;
    background: none;
}

.bg-trale {
    background-color: #445D73;
}

/* .bg-trale {
    background-color: #0067A3;
} */

.text-trale {
    color: #445D73;
}

.bg-wordmark-color {
    background-color: #445D73;
}
</style>