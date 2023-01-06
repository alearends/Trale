<template>
    <!-- firt Mobile: XS Size -->
    <nav class="p-3 bg-gray-100 shadow md:flex md:items-center md:justify-between">
        <ul
            class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gray-100 md:bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 font-[Nunito]">
            <router-link class="mx-4 my-6 md:my-0 text-xl wordmark-color font-bold hover:text-trale duration-500" :to="{name: 'Home'}">Home</router-link>
            <router-link class="mx-4 my-6 md:my-0 text-xl wordmark-color font-bold hover:text-trale duration-500" :to="{name: 'Home'}">Logout</router-link>
            <!-- <button
                class="bg-trale text-white font-bold font-[Nunito] py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:border-gray-100 hover:text-gray-100 duration-200 border-solid border-2 border-transparent"
                type="submit">
                Get Trale for free
            </button> -->
        </ul>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-[Nunito] wordmark-color font-extrabold items-center ">
                <img class="h-12 inline cursor-pointer" src="../assets/logo-trale-png-reverse.png" alt="trello logo">
                Trale
            </span>
            <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
            </span>
        </div>
    </nav>
</template>

<script setup>
function Menu(e) {
    e.name === 'menu' ? e.name = "close" : e.name = "menu"
}

//Logout function
const logout = async () => {
    await supabase.auth.signOut();
    router.push({name: "Home"});
};


</script>

<style scoped>
.bg-nav {
    background-color: #E5E7EB;
}

.text-nav{
    color: #E5E7EB;
}

.wordmark-color {
    color: #2A4657;
}

.dropbtn {
    border: none;
    background: none;
}

.bg-trale {
    background-color: #0067A3;
}

.text-trale{
    color: #0067A3
}
</style>