<template>
    <IntoNavBar />
    <!-- VueDraggable Component -->
    <Priority />
    <div>
        <h2 class="text-bg-nav text-2xl text-center m-16" v-if="boards.length == 0">You don't have any boards</h2>
        <div class="board-container px-auto py-2 my-2 mx-4" v-else>
            <!-- <div class="flex flex-col py-2 bg-white border-gray-300 rounded board-color-trale" v-for="board in boards" :key="board.title" :style="{borderColor: board.color}">
                <div class="flex flex-row justify-between items-center mx-2 my-1">
                    <span class="font-bold wordmark-color">{{ board.title }}</span>
                    <span class="flex flex-row items-center">
                        <button
                            class="bg-trale text-white font-bold px-2 rounded focus:outline-none focus:shadow-outline duration-200 border-none font-[Nunito]">+
                            Add Item</button>
                        <i class="fa-solid fa-ban"></i>
                    </span>
                </div>
                <h3 class="text-gray-500 text-lg text-center m-4" v-if="board.items.length == 0">No items yet!!</h3>
                <div class="flex flex-col mx-4" v-else>
                    <div class="item-container rounded py-1 my-2" v-for="item in board.items" :key="item.title">
                        <div class="flex flex-row justify-between items-center mx-2 my-1">
                            <span><i class="fas fa-sort"></i>{{ item.title }}</span>
                            <span>
                                <i class="fas fa-check"></i>
                                <i class="fas fa-trash"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div> -->
            <Board v-for="(board, index) in boards" :key="index" :id="board.id" :boardFromParent="board" @refresh="getAllBoards" />
        </div>
    </div>
    <!-- <div class="flex flex-row justify-between items-center rounded px-auto pt-6 pb-8 m-4">
        <div class="flex flex-col md:w-1/3 py-2 bg-white border-gray-300 rounded">
            <h3 class="font-bold wordmark-color font-[Nunito] text-center">Sprint Backlog</h3>
            <draggable class="max-w-xs flex flex-col list-none list-inside m-2 font-[Nunito] rounded"
                :list="arrSprintBacklog" group="tasks" @change="log" v-model="arrSprintBacklog" item-key="name">
                <template #item="{ element, index }">
                    <div
                        class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-100 border text-gray-800 -mt-px font-[Nunito] rounded">
                        {{ element.name }}{{ index }}
                    </div>
                </template>
            </draggable>
        </div>
        <div class="flex flex-col md:w-1/3 py-2 mx-4 bg-white border-gray-300 rounded">
            <h3 class="font-bold wordmark-color font-[Nunito] text-center">Design Process</h3>
            <draggable class="max-w-xs flex flex-col list-none list-inside m-2 font-[Nunito] rounded"
                :list="arrDesingProcess" group="tasks" @change="log" v-model="arrDesingProcess" item-key="name">
                <template #item="{ element, index }">
                    <div
                        class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-100 border text-gray-800 -mt-px font-[Nunito] rounded">
                        {{ element.name }}{{ index }}</div>
                </template>
            </draggable>
        </div>
        <div class="flex flex-col md:w-1/3 py-2 bg-white border-gray-300 rounded">
            <h3 class="font-bold wordmark-color font-[Nunito] text-center">Design End</h3>
            <draggable class="max-w-xs flex flex-col list-none list-inside m-2 font-[Nunito] rounded"
                :list="arrDesingEnd" group="tasks" @change="log" v-model="arrDesingEnd" item-key="name">
                <template #item="{ element, index }">
                    <div
                        class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-100 border text-gray-800 -mt-px font-[Nunito] rounded">
                        {{ element.name }}{{ index }}</div>
                </template>
            </draggable>
        </div>
    </div> -->
</template>
    
<script setup>
import { ref, onMounted } from "vue";
import draggable from "vuedraggable";
import IntoNavBar from "../components/IntoNavBar.vue";
import Board from "../components/Board.vue";
import Priority from "../components/Priority.vue";
import {useBoardStore} from '../store/board';
import {useTaskStore} from '../store/task';
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const board = useBoardStore()
const task = useTaskStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const router = useRouter();

const boards = ref([]);
const tasks = ref([]);

// this.boards.push({
//     title: data.inputA,
//     color: data.inputB || "#000",
//     board_id: "",
//     tasks: [],
// })

async function getAllBoards() {
    const res = await board.fetchBoards(); 
        boards.value = res;
}

onMounted(async () =>{
    console.log("este Board esta Montado");
    try{
        await getAllBoards()
        // const resp = await task.fetchTasks();
        // tasks.value = resp;
    }catch(error){
        console.log(error);
    }
});



</script>
    
<style scoped>
.bg-trale {
    background-color: #445D73;
}

.text-bg-nav {
    color: #F3F3F3;
}

.border-bg-trale {
    border-color: #445D73;
}

.board-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5em;
}

.board-color-trale{
    border-top: 5px solid red;
    border-radius: 6px;
}

.item-container{
    box-shadow: 0 3px 6px rgba(0, 0, 0, .15);
}

.fa-ban{
    color: red;
    margin-left: .75em;
    cursor: pointer;
}

.fa-trash {
    color: gray;
    margin-left: .75em;
    cursor: pointer;
}

.fa-sort{
    margin-right: .5em;
    cursor: move;
}

.fa-check{
    color: #445D73;
    margin-left: .5em;
    cursor: pointer;
}

</style>