<!-- List of all projects I have made -->
<!-- AREA, R-Type, Survivor, AdventOfCode, Gomoku (Cryptography) -->
<script setup>
const Projects = ref([
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
        name: 'AdventOfCode',
        description: `10 exercices each day of the beginning of december of 2024, the rest of the exercices will come`,
        tech: ['Python', 'Algorithm'],
        image: 'adventofcode.png',
        github: 'https://github.com/Babouuchee/AdventOfCode2024'
    },
    {
        name: 'Survivor',
        description: `The Survivor was a 2 week project as a group of 4 trying to please the awaits of a particularly annoying client`,
        tech: ['React', 'TypeScript', 'Next.js'],
        image: 'survivor.png',
        github: 'https://github.com/IchiiDev/survivor'
    },
    {
        name: 'Gomoku',
        description: `An AI with a MiniMax algorithm that plays Go better than an average persone ;)`,
        tech: ['Python', 'AI'],
        image: 'gomoku.png',
        github: 'https://github.com/Karumatrix/gomoku'
    }
])
</script>
<!-- To do later: Details of projects by clicking on it -> pop up in the middle -->
<template>
    <div class="min-h-screen" :style="{ backgroundColor: '#EBE0C9' }">
        <div class="py-44">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div v-for="(project, index) in Projects" :key="index" class="mb-8 flex items-center justify-between">
                        <div class="bg-gray-800 p-4 shadow-md rounded-xl text-white">
                            <h3 class="text-xl font-semibold">{{ project.name }}</h3>
                            <img :src="project.image" :alt="project.name" class="w-full h-60 object-cover rounded-md my-3">
                            <div class="mt-4">
                                <span v-for="tech in project.tech" class="px-3 py-1 mr-2 text-sm bg-orange-200 text-orange-800 rounded-full">{{ tech }}</span>
                            </div>
                            <p class="text-gray-200 my-4">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
