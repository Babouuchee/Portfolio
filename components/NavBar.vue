<script setup>
const pages = ref([
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '/Projects',
        name: 'Projects'
    },
    {
        link: '/AboutMe',
        name: 'About me'
    },
    {
        link: '/Contact',
        name: 'Contact'
    }
])
</script>
<template>
    <nav class="bg-gray-800 flex items-center justify-center text-white" aria-label="Navbar section">
        <NuxtLink v-for="page in pages"
            class="mx-8 hover:border-t-orange-300 border-t-2 border-transparent py-6 hover:text-orange-500"
            exact-active-class="text-orange-500 border-t-orange-300 border-t-2"
            :to="page.link">{{ page.name }}</NuxtLink>
    </nav>
</template>
