<template>
<!-- VueDraggable Component -->
<div class="flex flex-row justify-between items-center m-4">
    <div class="flex flex-col md:w-1/3 p-2 mx-4 bg-white border-gray-300 rounded">
        <h3 class="font-bold wordmark-color font-[Nunito]">Sprint Backlog</h3>
        <draggable class="max-w-xs flex flex-col list-none list-inside m-2 font-[Nunito] rounded" :list="arrSprintBacklog" group="tasks"
            @change="log" v-model="arrSprintBacklog" task-key="name">
            <template #task="{ element, index }">
                <div class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-100 border text-gray-800 -mt-px font-[Nunito] rounded">
                    {{ element.name }}{{ index }}
                </div>
            </template>
        </draggable>
    </div>
    <div class="flex flex-col md:w-1/3 p-2 mx-4 bg-white border-gray-300 rounded">
        <h3 class="font-bold wordmark-color font-[Nunito]">Design Process</h3>
        <draggable class="max-w-xs flex flex-col list-none list-inside m-2 font-[Nunito] rounded" :list="arrDesingProcess" group="tasks"
            @change="log" v-model="arrDesingProcess" task-key="name">
            <template #task="{ element, index }">
                <div
                    class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-100 border text-gray-800 -mt-px font-[Nunito] rounded">
                    {{ element.name }}{{ index }}</div>
            </template>
        </draggable>
    </div>
    <div class="flex flex-col md:w-1/3 p-2 mx-4 bg-white border-gray-300 rounded">
        <h3 class="font-bold wordmark-color font-[Nunito]">Design End</h3>
        <draggable class="max-w-xs flex flex-col list-none list-inside m-2 font-[Nunito] rounded" :list="arrDesingEnd" group="tasks"
            @change="log" v-model="arrDesingEnd" task-key="name">
            <template #task="{ element, index }">
                <div
                    class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-100 border text-gray-800 -mt-px font-[Nunito] rounded">
                    {{ element.name }}{{ index }}</div>
            </template>
        </draggable>
    </div>
</div>


</template>

<script>
import draggable from "vuedraggable";

export default {
name: 'App',
display: "App",
order: 1,
components: {
    draggable
},
data() {
    return {
        arrSprintBacklog: [
            { name: "an agile task", id: 3 },
            { name: "another agile task", id: 4 },
            { name: "another agile task", id: 5 },
        ],
        arrDesingProcess: [
            { name: "a design task", id: 1 },
            { name: "another design task", id: 2 },
        ],
        arrDesingEnd: [
            { name: "a design end", id: 1 },
            { name: "another design end", id: 2 },
        ],
    };
},
methods: {
    add: function () {
        this.list.push({ name: "a design task" });
    },
    replace: function () {
        this.list = [{ name: "another design task" }];
    },
    clone: function (el) {
        return {
            name: el.name + " cloned"
        };
    },
    log: function (evt) {
        window.console.log(evt);
    }
}
};
</script>

<style scoped>
.bg-trale {
    background-color: #445D73;
}
</style>




