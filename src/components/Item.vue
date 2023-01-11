<template>
    <div class="item-container rounded py-1 my-2" :style="{backgroundColor: priorityClr}">
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <span><i class="fas fa-sort" :style="{color: clr}"></i>{{ item.title }}</span>
            <span>
                <i class="fas fa-check" :style="{color: clr}"></i>
                <i class="fas fa-trash"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps (["item", "clr"]);


// PARA PREGUNTAR A IRONHACK
// const priorityClr = computed(() => {
//     if(this.item.title == 'low'){
//         return '#C6F6D5';
//     }else if(this.item.title == 'medium'){
//         return '#FEEBC8';
//     }else if(this.item.title == 'high'){
//         return '#FECACA';
//     }else{return '#FFFFFF';}
// });



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
    color: gray;
    margin-left: .5em;
    cursor: pointer;
}
</style>