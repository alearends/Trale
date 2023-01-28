<!-- Freno de emergencia:  -->

<template>
    <div class="flex justify-center content-center items-center fixed top-0 left-0 h-screen w-screen bg-gray-900/50 modal-content">
        <div class="bg-white p-3 w-9/10 max-w-sm rounded shadow-md ">
            <p class="title font-bold text-lg text-trale">{{title}}</p>
            <div class="flex flex-col w-full box-border my-4 mx-0">
                <label class="text-trale font-bold">{{labelA}}</label>
                <input type="text" v-model="inputA" class="p-1 mb-2 rounded border border-gray-400 w-300">
                <label class="text-trale font-bold">{{labelB}}</label>
                <input :type="inputBtype" v-model="inputB" class="p-1 mb-1 rounded border border-gray-400 w-auto"> 
            </div>
            <p class="flex justify-end gap-1 text-right">
                <button @click="handleCloseBtnClick" class="border-none py-1 px-2 rounded font-bold uppercase text-sm bg-wordmark-color text-white">Cancel</button>
                <button 
                @click="submit" 
                class="border-none py-1 px-2 rounded font-bold uppercase text-sm bg-trale text-white">Submit</button>
            </p>
        </div>
    </div>
</template>

<!-- inputA = Board Title  - inputB = Board Color -->

<script setup>
import { ref } from "vue";
import {useBoardStore} from '../store/board'
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
import Task from "./Task.vue";

const board = useBoardStore()
const task = useTaskStore()
const user = useUserStore()

const props = defineProps(["title", "labelA", "labelB", "inputBtype", "typeModal", "boardId"]);
const emits = defineEmits(["close", "submit", "inputA", "inputB"]);
const inputA = ref("");
const inputB = ref("");

function handleCloseBtnClick(){
    emits("close");
}
console.log(props.boardId);

// const data = ()=>({
//     inputA,
//     inputB
// })

async function getUser() {
    const myUser = await user.fetchUser()
    return myUser;
}

// const theBoard = board.getBoard();



//createTasks(title, is_complete, user_id, board_id)

async function submit(){
    // emits("submit", {inputA, inputB});
    const myUser = await getUser()
    if(props.typeModal === "board"){
        await board.createBoards(inputA.value, myUser.id, inputB.value);
        emits("close");
        refreshPage();
    } else if(props.typeModal === "task") {
        console.log(inputA.value, props.boardId);
        try {await task.createTasks(inputA.value, props.boardId);
        emits("close");
        // refreshPage();
    }catch(error){
        console.log(error.message)
    }

}}

function refreshPage(){
    location.reload()
}

</script>

<style scoped>
.modal-content{
    backdrop-filter: blur(5px);
}
.bg-trale {
    background-color: #0067A3;
}
.text-trale{
    color: #0067A3
}
.bg-wordmark-color {
    background-color: #2A4657;
}
input[type="color"]{
    padding: .1em .5em;
}
</style>