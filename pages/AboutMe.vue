<script>
export default {
    data() {
        return {
            visibleLines: 0,
            typing: true,
            selectedFile: 'profile.js',
            contentFiles: {
                'profile.js': [
                    'const profile = {',
                    '    name: "Baptiste Caulier"',
                    '    role: "Student developer"',
                    '    location: "Bordeaux, France"',
                    '    status: "Looking at the sun"',
                    '    chill_level: "███████████░░ 85%"',
                    '    current_task: "Searching for an internship"',
                    '    next_project: "Little app to keep my life perfectly organized"',
                    '    want_to_do: "A hike in summer in the mountains"',
                    '}'
                ],
                'experience.hpp': [
                    '# pragma once',
                    '',
                    '#include <iostream>',
                    '#include <vector>',
                    '',
                    'class Experience {',
                    '    private:',
                    '        struct Role {',
                    '            std::string position;',
                    '            std::string company;',
                    '            std::string period;',
                    '            std::vector<std::string> achievements;',
                    '        };',
                    '',
                    '    public:',
                    '        Role getCurrentRole() {',
                    '            return {',
                    '                "Regional Epitech Assistant",',
                    '                "Epitech",',
                    '                "September 2024 - March 2025",',
                    '                {',
                    '                    "Taught code languages to students",',
                    '                    "Helped students develop soft skills",',
                    '                    "Worked with the pedagogy team and other students"',
                    '                }',
                    '            };',
                    '        }',
                    '        Role getPreviousRole() {',
                    '            return {',
                    '                "Web developer",',
                    '                "E-Business Venture",',
                    '                "July 2023 - December 2023",',
                    '                {',
                    '                    "Developed two websites in Django",',
                    '                    "Worked with a professional team",',
                    '                }',
                    '            };',
                    '        }',
                    '    }',
                    '}',
                ],
                'education.py': [
                    'class Education:',
                    '    def __init__(self):',
                    '        self.degree = "Software Engineering Expert"',
                    '        self.university = "Epitech Bordeaux"',
                    '        self.current_year = "Third Year"',
                    '        self.graduation = 2027',
                    '        self.achievements = [',
                    '            "Architecture of complex C++ code",',
                    '            "Organization of multiple projects at once",',
                    '            "Learned multiple new languages",',
                    '        ]',
                    '',
                    '    def current_focus(self):',
                    '        return [',
                    '            "Web Development",',
                    '            "Machine Learning and AI",',
                    '            "DevOps"',
                    '        ]'
                ],
                'skills.css': [
                    '.languages {',
                    '    items: C/C++ Python JavaScript TypeScript SQL;',
                    '    favorite: C++;',
                    '}',
                    '',
                    '.frameworks {',
                    '    items: Nuxt React Vue.js Django;',
                    '    currently-learning: Nuxt;',
                    '}',
                    '',
                    '.tools {',
                    '    items: Figma Git;',
                    '    preferred-editor: VSCode;',
                    '}'
                ],
            },
            fileColors: {
                'profile.js': 'text-yellow-400',
                'experience.hpp': 'text-green-400',
                'education.py': 'text-blue-400',
                'skills.css': 'text-pink-400'
            },
            fileIcons: {
                'profile.js': 'material-symbols:person-rounded',
                'experience.hpp': 'material-symbols:work-outline',
                'education.py': 'lucide:graduation-cap',
                'skills.css': 'solar:code-bold'
            }
        }
    },
    mounted() {
        this.startTypingEffect();
    },
    methods: {
        setSelectedFile(filename) {
            this.visibleLines = 0;
            this.typing = true;
            this.selectedFile = filename;
            this.startTypingEffect();
        },
        startTypingEffect() {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                if (this.visibleLines < this.contentFiles[this.selectedFile].length) {
                    this.visibleLines++;
                } else {
                    this.typing = false;
                    clearInterval(this.timer);
                }
            }, 100);
        }
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
};
</script>

<template>
    <div class="min-h-screen text-gray-300 py-16 bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <div class="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <div class="flex-1 text-center text-sm font-mono">
                    about_me.terminal
                </div>
            </div>
            <div class="bg-gray-950 rounded-b-lg shadow-2xl border border-gray-800">
                <div class="flex border-b border-gray-800">
                    <button v-for="filename in Object.keys(contentFiles)"
                        :key="filename"
                        @click="setSelectedFile(filename)"
                        :class="`flex items-center space-x-2 px-4 py-2 text-sm font-mono transition-colors
                            ${selectedFile === filename
                            ? 'bg-gray-800 text-white border-t-2 border-orange-500' 
                            : 'text-gray-500 hover:text-gray-300'}`">
                        <Icon :name="fileIcons[filename]" :class="fileColors[filename]"/>
                        <span>{{ filename }}</span>
                    </button>
                </div>
                <div class="p-4 font-mono text-sm">
                    <div class="flex">
                        <div class="text-gray-600 pr-4 text-right select-none">
                            <div v-for="(_, index) in contentFiles[selectedFile]" :key="index">{{ index + 1 }}</div>
                        </div>
                        <div class="flex-1 overflow-x-auto">
                            <div v-for="(line, index) in contentFiles[selectedFile]"
                                :key="index"
                                :class="`transition-all duration-200
                                    ${index < visibleLines
                                        ? 'opacity-100 transform translate-y-0'
                                        : 'opacity-0 transform translate-y-2'}`"
                                style="white-space: pre;">
                                <span :class="fileColors[selectedFile]">{{ line }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4 border-t border-gray-800 flex items-center space-x-2 font-mono">
                    <Icon name="mingcute:terminal-line" class="text-green-500"/>
                    <span class="text-green-500">→</span>
                    <span class="text-green-400">
                        {{ typing ? 'Loading next module...' : 'Ready for next command' }}
                    </span>
                    <span :class="`w-2 h-5 bg-green-500 ${typing ? 'animate-pulse' : 'animate-blink'}`"></span>
                </div>
            </div>
        </div>
    </div>
</template>
