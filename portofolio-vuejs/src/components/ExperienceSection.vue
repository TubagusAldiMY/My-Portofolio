<script setup>
import { ref } from 'vue';

const experiences = ref([
  {
    id: 1,
    role: 'Bangkit Study Independent - Machine Learning',
    company: 'Bangkit Academy',
    duration: 'Februari 2024 - Juni 2024',
    description: [
      'Belajar dasar-dasar Machine Learning dan penerapannya dalam proyek nyata.',
      'Membangun model prediksi menggunakan Python dan TensorFlow.',
      'Mengikuti kursus online dan menyelesaikan proyek akhir.',
    ],
  },
]);
</script>

<template>
  <section id="experience" class="py-20 sm:py-32 bg-gray-50 " v-scroll-animation>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 ">Perjalanan Karier Saya</h2>
        <p class="mt-4 text-lg text-gray-600 ">
          Pengalaman profesional yang membentuk saya hingga hari ini.
        </p>
      </div>

      <div class="relative max-w-2xl mx-auto">
        <div class="hidden md:block absolute top-0 h-full w-0.5 bg-gray-200  left-1/2 transform -translate-x-1/2"></div>

        <div v-for="(exp, index) in experiences" :key="exp.id" class="relative mb-12">
          <div class="md:flex items-center" :class="{'md:flex-row-reverse': index % 2 !== 0}">

            <div class="md:w-1/2 p-1">
              <div class="bg-gray-50  p-6 rounded-xl shadow-md border border-gray-200 ">
                <p class="text-sm font-semibold text-blue-600  mb-1">{{ exp.duration }}</p>
                <h3 class="text-xl font-bold text-gray-900 ">{{ exp.role }}</h3>
                <p class="text-md text-gray-700  mb-4">{{ exp.company }}</p>
                <ul class="list-disc list-inside text-sm text-gray-600  space-y-2">
                  <li v-for="(desc, i) in exp.description" :key="i">{{ desc }}</li>
                </ul>
              </div>
            </div>

            <div class="hidden md:flex items-center justify-center w-1/2">
              <div class="absolute w-4 h-4 bg-white  rounded-full border-2 border-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>