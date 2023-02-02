<template>
    <span>
        <button @click="showModal = true"
            class="bg-trale text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline duration-200 border-none font-[Nunito]"
            type="submit"> + Add Task</button>
        
        <Modal v-if="showModal" 
        title="Add Task" 
        labelA="Enter Task" 
        labelB="Enter Priority" 
        inputBtype="text" 
        typeModal="task"
        :boardId="props.boardId" 
        @close="showModal = false" 
        @submit="handleSubmit" />
    </span>
</template>

<script setup>
import { ref } from "vue";
import Modal from './Modal.vue';
const emits = defineEmits(["addTask"]);
const props = defineProps(["boardId"])

data: () => ({
    showModal
})

const showModal = ref(false);
function handleSubmit(data) {
    emits("addTask", {...data, boardId});
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
.text-trale {
    color: #445D73;
}
.bg-wordmark-color {
    background-color: #445D73;
}
</style>