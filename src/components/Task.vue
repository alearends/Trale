<template>
    <div class="task-container rounded py-1 my-2" >
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <div>
                <i class="fas fa-sort handle" :style="{color: clr}"></i>
                <span class="" :style="[taskFromParent.is_complete ? {'text-decoration':'line-through', color: clr } : {'text-decoration':'none', } ]" >{{task}}</span>
            </div>
            <div>
                <input type="checkbox" v-model="taskFromParent.is_complete" >
                <i class="fas fa-trash" @click="handleDeleteTask(taskId)" :style="{color: clr}"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBoardStore } from "../store/board";
import { useTaskStore } from "../store/task";
import { ref } from "vue";

const editId = ref(null);
const is_complete = ref(false);
const newTitle = ref('');

const board = useBoardStore();
const taskStore = useTaskStore();

const props = defineProps (["task", "clr", "boardId", "taskId", "taskFromParent"]);
const emits = defineEmits(["refresh"]);

const taskId = props.taskId;
const task = props.task; 

const handleDeleteTask = (taskId) => {
    taskStore.deleteTask(taskId);
    emits('refresh');
};

const changeIsComplete = async () => {
    if(taskFromParent.is_complete == true){
        console.log(taskFromParent.is_complete);
        await taskStore.completeTask(taskFromParent.task_id)
        await taskStore.fetchTasks();
    };
};

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
    border-top: 3px solid red;
    border-radius: 4px;
}

.task-container{
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

.task-done{
    text-decoration:line-through;
}

</style>

