<template>
    <!-- EnterTask Component -->
    <div class="container m-4">
        <div class="flex flex-row justify-between items-center">
            <div class="w-1/3 inline-block">
                <input class="font-[Nunito] form-input py-3 px-4 block w-full border-gray-400 rounded-md " v-model="EnternewTask"
                    placeholder="Enter Task" @keyup.enter="add" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from "../store/task";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);

const title = ref("");
const is_complete = ref(false);
const newTitle = ref("");
const editId = ref(null);
const completeId = ref(false)


</script>

<style scoped>
.bg-trale {
    background-color: #0067A3;
}
</style>