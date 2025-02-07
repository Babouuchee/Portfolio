<script>
export default {
    props: {
        project: Object
    },
    methods: {
        closePopup(event) {
            if (event.target === this.$refs.overlay) {
                this.$emit('close');
            }
        }
    }
};
</script>
<template>
    <div ref="overlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" @click="closePopup">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
            <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">&times;</button>
            <h2 class="text-2xl font-bold mb-4">{{ project.name }}</h2>
            <img :src="project.image" :alt="project.name" class="w-full h-60 object-cover rounded-md mb-4">
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap">
                <span v-for="tech in project.tech" class="px-3 py-1 mr-2 mb-2 text-sm bg-orange-200 text-orange-800 rounded-full">{{ tech }}</span>
            </div>
            <a :href="project.github" target="_blank" class="bg-orange-600 inline-block text-white px-4 py-2 rounded-full hover:bg-orange-700">
                <div class="flex items-center space-x-2">
                    <Icon name="mdi:github" class="w-8 h-8"/>
                    <span>View on Github</span>
                </div>
            </a>
        </div>
    </div>
</template>
