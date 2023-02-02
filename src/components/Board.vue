<template>
    <div class="flex flex-col py-2 bg-white border-gray-300 rounded board-color-trale"
        :style="{ borderColor: boardFromParent.color }">
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <span class="font-bold wordmark-color">{{ boardFromParent.title }}</span>
            <span class="flex flex-row items-center">
                <AddTaskBtn :boardId="id" />
                <!-- <button class="bg-trale text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline duration-200 border-none font-[Nunito]">+
                    Add Task</button> -->
                <button type="button">
                    <i class="fa-solid fa-ban" @click="handleBoardDelete(id)"></i>
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
            </div> -->

                    <Task v-for="(task) in tasks" :key="task.task_id" :taskFromParent="task" :task="task.title" :boardId="id"
                        :taskId="task.task_id" :clr="boardFromParent.color" @refresh="getAllTasks" />

            <!-- <Task v-for="(task, task_id) in tasks" :key="task_id" :task="task.title" :boardId="id" :taskId="task_id"
                :clr="boardFromParent.color" @refresh="getAllTasks" /> -->
            <!-- <Task v-for="(task, task_id) in tasks" :key="task_id" :task="task.title" :boardId="id" :taskId="task_id"
                :clr="boardFromParent.color" @refresh="getAllTasks" /> -->
        </div>
    </div>
</template>

<script>
import Task from "../components/Task.vue";
import AddTaskBtn from "./AddTaskBtn.vue";
import draggable from "vuedraggable";
import { useBoardStore } from "../store/board";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
import { supabase } from "../supabase/supabase";




export default {
    components: {
        Task,
        AddTaskBtn,
        draggable
    },

    props: {
        boardFromParent: { type: Object },
        id: { type: Number },
        task_id: { type: Number }
    },

    data() {
        return {
            tasks: [],
            id: this.id,
            task_id: this.task_id,
            boardFromParent: this.boardFromParent
        };
    },

    computed: {
        board() {
            return useBoardStore();
        },
        userStore() {
            return useUserStore();
        },
        taskStore() {
            return useTaskStore();
        },
        boardStore() {
            return useBoardStore();
        }
    },

    mounted() {
        this.getAllTasks();
    },

    methods: {
        async getAllTasks() {
            try {
                console.log("esta tarea esta Montada!");
                const res = await this.board.getBoard(this.id);
                const tasksRes = await this.taskStore.fetchTasks(
                    this.boardFromParent.id
                );
                if (tasksRes) {
                    this.tasks = tasksRes;
                    console.log(this.tasks);
                }
                console.log(tasksRes);
            } catch (error) {
                console.log(error);
            }
        },
        async handleBoardDelete() {
            await this.board.deleteBoards(this.id);
            this.refreshPage();
        },
        refreshPage() {
            location.reload();
        },
        log(evt) {
            window.console.log(evt);
        },
        clone(el) {
            return {
                name: el.name + " cloned"
            };
        },
        replace() {
            this.list = [{ name: "another design task" }];
        },
        add() {
            this.list.push({ name: "a design task" });
        },
        handleChange() {
            console.log('changed');
        },
        inputChanged(value) {
            this.activeNames = value;
        },
        getComponentData() {
            return {
                onChange: this.handleChange,
                onInput: this.inputChanged,
                wrap: true,
                value: this.activeNames
            };
        }

        // async onDragEnd(data) {
        //     for (let i = 0; i < data.length; i++) {
        //         try {
        //             const result = await supabase.query(`
        //             UPDATE tasks
        //             SET sort_order = ${i}
        //             WHERE task_id = '${data[i].task_id}'
        //             `);
        //             console.log(result.data);
        //         } catch (err) {
        //             console.log(err);
        //         }
        //     }
        // }
    }
};

</script>


<style scoped>

.board-color-trale {
    border-top: 5px solid red;
    border-radius: 6px;
}

.fa-ban {
    color: red;
    margin-left: .75em;
    cursor: pointer;
}

</style>