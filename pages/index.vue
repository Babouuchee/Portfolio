<!-- Home page displaying major infos about me, who I am and a preview of my projects -->
<script>
export default {
    data() {
        return {
            Projects: [
                {
                    name: 'AREA',
                    description: 'Web and mobile application that automates tasks for you with your favorite services like Google or Github',
                    tech: ['Nuxt', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
                    image: 'area.png',
                    github: 'https://github.com/Epitouche/Area51'
                },
                {
                    name: 'Air-Type',
                    description: `Based on the series of R-Type games, it is a 2D Shoot'em up multiplayer game that lets you demolish enemies in space`,
                    tech: ['C++', 'Raylib Library', 'ECS'],
                    image: 'rtype.png',
                    github: 'https://github.com/Karumatrix/R-Type'
                },
                {
                    name: 'Survivor',
                    description: `The Survivor was a 2 week project as a group of 4 trying to please the awaits of a particularly annoying client`,
                    tech: ['React', 'TypeScript', 'Next.js'],
                    image: 'survivor.png',
                    github: 'https://github.com/IchiiDev/survivor'
                },
            ]
        }
    }
}
</script>
<template>
    <div class="min-h-screen text-white" :style="{ backgroundColor: '#EBE0C9' }">
        <div class="pt-52 items-center justify-center flex flex-col text-orange-700">
            <h1 class="font-custom font-bold text-9xl">Hi! I'm Baptiste.</h1>
            <h1 class="font-custom font-bold text-9xl">A student developer.</h1>
            <h2 class="pt-24 text-xl">I'm passionate about creating things that comes to life</h2>
            <h2 class="mt-12 p-1 px-3 text-2xl rounded-xl bg-orange-200">I'm looking for an internship in web or software development, <NuxtLink to="/Contact" class="font-bold hover:text-orange-500">Contact me</NuxtLink> !</h2>
        </div>
        <div class="pt-24 mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div v-for="(project, index) in Projects" :key="index" class="mb-8 flex items-center justify-between">
                <div class="bg-white/50 backdrop-blur-sm p-4 shadow-md rounded-xl text-orange-600">
                    <h3 class="text-xl font-semibold">{{ project.name }}</h3>
                    <img :src="project.image" :alt="project.name" class="w-full h-60 object-cover rounded-md my-3">
                    <div class="mt-4">
                        <span v-for="tech in project.tech" class="px-3 py-1 mr-2 text-sm bg-orange-200 text-orange-800 rounded-full">{{ tech }}</span>
                    </div>
                    <p class="text-orange-600 my-4">{{ project.description }}</p>
                </div>
            </div>
        </div>
        <div class="pb-24 items-center justify-center flex flex-col">
            <h3 class="text-orange-700 text-xl">See more of my projects <NuxtLink to="/Projects" class="font-bold hover:text-orange-500">here</NuxtLink></h3>
        </div>
    </div>
</template>
