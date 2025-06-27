<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Bitcoin Prediction',
    description: 'Sebuah platform web memprediksi harga Bitcoin untuk 1 hari kedepan.',
    imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=BTC+Prediction',
    tech: ['Python', 'Streamlit', 'tensorflow ', 'Pandas'],
    liveUrl: '#', // Ganti dengan link demo live
    repoUrl: 'https://github.com/TubagusAldiMY/BTC_Prediction-LSTM', // Ganti dengan link GitHub
  },
  {
    id: 2,
    title: 'Coming Soon',
    description: 'Coming Soon.',
    imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Coming+Soon',
    tech: [],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'Coming Soon.',
    imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Coming+Soon',
    tech: [],
    liveUrl: '#',
    repoUrl: '#',
  },
]);
</script>

<template>
  <section id="projects" class="py-20 sm:py-32 bg-gray-50 ">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 ">Proyek Pilihan Saya</h2>
        <p class="mt-4 text-lg text-gray-600 ">
          Beberapa karya yang saya banggakan. Lihat lebih dekat!
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <div
            v-for="project in projects"
            :key="project.id"
            class="bg-white  rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
        >
          <div class="overflow-hidden">
            <img :src="project.imageUrl" :alt="'Gambar ' + project.title" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110">
          </div>

          <div class="p-6 flex flex-col h-full">
            <div class="flex-grow">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.tech" :key="tech" class="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100   rounded-full">
                  {{ tech }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-gray-900  mb-2">{{ project.title }}</h3>
              <p class="text-gray-600  text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200 -700 flex items-center justify-end space-x-4">
              <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800   transition-colors">
                Live Demo
                <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
              <a :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-800   transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>