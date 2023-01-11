<template>
    <div class="flex flex-col py-2 bg-white border-gray-300 rounded board-color-trale" :style="{borderColor: board.color}">
        <div class="flex flex-row justify-between items-center mx-2 my-1">
            <span class="font-bold wordmark-color">{{ board.title }}</span>
            <span class="flex flex-row items-center">
                <button
                    class="bg-trale text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline duration-200 border-none font-[Nunito]">+
                    Add Item</button>
                <i class="fa-solid fa-ban"></i>
            </span>
        </div>
        <h3 class="text-gray-500 text-lg text-center m-4" v-if="board.items.length == 0">No items yet!!</h3>
        <div class="flex flex-col mx-4" v-else>
            <!-- <div class="item-container rounded py-1 my-2" v-for="(item, index) in board.items" :key="index">
                <div class="flex flex-row justify-between items-center mx-2 my-1">
                    <span><i class="fas fa-sort"></i>{{ item.title }}</span>
                    <span>
                        <i class="fas fa-check"></i>
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div> -->
            <Item v-for="(item, index) in board.items" :key="index" :item="item" :clr="board.color" />
        </div>
    </div>
</template>

<script setup>
import Item from  "./Item.vue"
const props = defineProps(["board"]);

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
    color: gray;
    margin-left: .5em;
    cursor: pointer;
}
</style>