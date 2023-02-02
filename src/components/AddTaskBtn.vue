<template>
    <span>
        <button @click="showModal = true"
            class="bg-trale text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline duration-200 border-none font-[Nunito] hover:bg-resalta hover:border-gray-100 hover:text-gray-100"
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


</style>