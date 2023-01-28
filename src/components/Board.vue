<template>
    <div class="flex flex-col py-2 bg-white border-gray-300 rounded board-color-trale"
        :style="{ borderColor: boardFromParent.color }">
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <span class="font-bold wordmark-color">{{ boardFromParent.title }}</span>
            <span class="flex flex-row items-center">
                <AddTaskBtn :boardId="props.id" />
                <!-- <button class="bg-trale text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline duration-200 border-none font-[Nunito]">+
                    Add Task</button> -->
                <button type="button">
                    <i class="fa-solid fa-ban" @click="handleBoardDelete (props.id)"></i>
                </button>
            </span>
        </div>
        <h3 class="text-gray-500 text-lg text-center m-4" v-if="tasks.length == 0">No tasks yet!!</h3>
        <div class="flex flex-col mx-4" v-else>
            <!-- <div class="task-container rounded py-1 my-2" v-for="(task, index) in board.tasks" :key="index">
                <div class="flex flex-row justify-between items-center mx-2 my-1">
                    <span><i class="fas fa-sort"></i>{{ task.title }}</span>
                    <span>
                        <i class="fas fa-check"></i>
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
                freno: funciona todo bien
            </div> -->
            <Task v-for="(task, task_id) in tasks" :key="task_id" :task="task.title" :boardId="id" :taskId="task_id"
                :clr="boardFromParent.color" @refresh="getAllTasks" />
        </div>
    </div>
</template>

<script setup>
import Task from "../components/Task.vue";
import AddTaskBtn from "./AddTaskBtn.vue";
import draggable from "vuedraggable";
import { useBoardStore } from "../store/board";
import { useTaskStore } from '../store/task';
import { useUserStore } from '../store/user';
import { ref, onMounted } from "vue";

const board = useBoardStore();
const taskk = useTaskStore();
const userStore = useUserStore();
const taskStore = useTaskStore();
const boardStore = useBoardStore();

const tasks = ref([]);

const props = defineProps(["boardFromParent", "id", "task_id"]);
console.log(props.id)

// board_id = props.id

async function getAllTasks(){
    const res = await board.getBoard(props.id);
        const tasksRes = await taskk.fetchTasks(props.boardFromParent.id);
        if(tasksRes) {
            tasks.value = tasksRes;
            console.log(tasks.value)
        }
        console.log(tasksRes)
}

onMounted(async () => {
    try {
        console.log("esta tarea esta Montada!")
        await getAllTasks()
       // tasksRes.data ? tasks.value = tasksRes.data : ''
        // tasks.value = res;
    } catch (error) {
        console.log(error);
    }
});

const emits = defineEmits(['refresh'])

const handleBoardDelete = async () => {
    await board.deleteBoards(props.id);
    // emits('refresh');
    refreshPage();
};

function refreshPage(){
    location.reload()
}

// EventBus.$on("deleteBoard", (boardId) =>{
//     this.boards.splice(boardId, 1)
// })



</script>

<style scoped>
.bg-trale {
    background-color: #0067A3;
}
.text-bg-nav {
    color: #E5E7EB;
}
.border-bg-trale {
    border-color: #0067A3;
}
.board-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5em;
}
.board-color-trale {
    border-top: 5px solid red;
    border-radius: 6px;
}
.task-container {
    box-shadow: 0 3px 6px rgba(0, 0, 0, .15);
}
.fa-ban {
    color: red;
    margin-left: .75em;
    cursor: pointer;
}
.fa-trash {
    color: gray;
    margin-left: .75em;
    cursor: pointer;
}
.fa-sort {
    margin-right: .5em;
    cursor: move;
}
.fa-check {
    color: gray;
    margin-left: .5em;
    cursor: pointer;
}
</style>