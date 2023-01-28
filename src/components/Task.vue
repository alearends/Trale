<template>
    <div class="task-container rounded py-1 my-2" >
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <span><i class="fas fa-sort" :style="{color: clr}"></i>{{ task }}</span>
            <span>
                <i class="fas fa-check" :style="{color: clr}"></i>
                <i class="fas fa-trash" @click="deleteTask(task.id)"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
import { useBoardStore } from "../store/board";
import { useTaskStore } from '../store/task';

const board = useBoardStore();
const taskk = useTaskStore();

// board_id = props.id

const props = defineProps (["task", "clr", "boardId"]);

const emits = defineEmits(['refresh'])

const handleTaskDelete = async() => {
    // await taskk.removeTasks(props.id, task_id);
    await taskk.deleteTask(taskk.id);
    emits('refresh');
};

const deleteTask = (taskId) => {
    taskk.deleteTask(taskId);
}

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
    color: gray;
    margin-left: .5em;
    cursor: pointer;
}
</style>

