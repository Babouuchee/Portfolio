<script>
export default {
    data() {
        return {
            pages: [
                { link: '/', name: 'Home' },
                { link: '/Projects', name: 'Projects' },
                { link: '/AboutMe', name: 'About me' },
                { link: '/Contact', name: 'Contact' }
            ]
        };
    }
};
</script>
<template>
    <nav class="fixed top-0 left-0 w-full flex items-center justify-center pt-10 pb-6" aria-label="Navbar section">
        <ul class="font-bold text-gray-600 rounded-full bg-white bg-opacity-40 backdrop-blur-sm p-3 py-3">
            <li>
                <NuxtLink v-for="page in pages"
                class="py-1.5 px-6 transition-all duration-300 ease-in-out"
                exact-active-class="rounded-full bg-orange-300"
                :data-active="$route.path === page.link"
                :to="page.link">{{ page.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
/* Add sliding animation */
[data-active="true"] {
    background-color: #f97316; /* bg-orange-300 */
    transition: background-color 0.3s ease-in-out;
}
</style>
