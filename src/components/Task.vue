<template>
    <div class="task-container rounded py-1 my-2" >
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <span><i class="fas fa-sort" :style="{color: clr}"></i>{{ task }}</span>
            <span>
                <i class="fas fa-check" :style="{color: clr}"></i>
                <i class="fas fa-trash" @click="getTaskId(task.id, $event)"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
import { useBoardStore } from "../store/board";
import { useTaskStore } from "../store/task";

const board = useBoardStore();
const taskStore = useTaskStore();
// const taskk = useTaskStore();

// board_id = props.id

const props = defineProps (["task", "clr", "boardId", "taskId"]);

function getTaskId (event) {
  const taskId = event.target.taskId;
  console.log(getTaskId);
}


// const emits = defineEmits(['refresh']);

// const deleteTask = (taskId) => {
//     taskStore.deleteTask(taskId);
//     emits('refresh');
// };

// const handleTaskDelete = async(taskId) => {
//     await taskStore.deleteTask(props.taskId);
// }

// const handleTaskDelete = async() => {
//   await deleteTask(this.task.task_id);
// }


// const handleTaskDelete = async($event) => {
//     const taskId = await taskStore.getTaskId($event);
//     await taskStore.deleteTask(props.taskId);
// }

// const handleTaskDelete = async(task) => {
//     const task_id = await taskStore.getTaskId(task.title);
//     await taskStore.deleteTask(task_id);
// }

// const { rows } = await supabase.from('tasks').select('id').where({ task_name: 'My Task' });
// const taskId = rows[0].id;

// const handleTaskDelete = async() => {
//     // await taskStore.removeTasks(props.id, task_id);
//     await taskStore.deleteTask(task_id);
//     emits('refresh');
// };

// const deleteTask = (task_id) => {
//     taskStore.deleteTask(task_id);
// }

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

