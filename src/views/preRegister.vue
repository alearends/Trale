<template>
    <HomeNavBar />
    <div>
        <!-- Error Handling -->
        <div v-if="errorMsg" class="mb-10 p-4 rounded bg-gray-100 shadow-md m-4 text-center">
            <p class="text-red-500 font-semibold text-center">{{ errorMsg }}</p>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>