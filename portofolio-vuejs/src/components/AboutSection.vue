<script setup>
import { ref } from 'vue';

// Daftar teknologi yang dikuasai. Mudah untuk di-update.
const techStack = ref([
  'HTML5 & CSS3', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'Golang', 'Git & GitHub', 'Python',
]);
</script>

<template>
  <section id="about" class="py-20 sm:py-32 bg-gray-50 " v-scroll-animation>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 \">Tentang Saya</h2>
        <p class="mt-4 text-lg text-gray-600 ">
          Sedikit lebih dalam tentang perjalanan dan keahlian saya.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div class="flex justify-center order-1 md:order-none">
          <div class="relative">
            <div class="w-64 h-80 sm:w-80 sm:h-96 bg-gray-300  rounded-xl shadow-lg transform rotate-[-6deg] transition-transform duration-500 hover:rotate-[-8deg] hover:scale-105"></div>
            <div class="absolute top-0 left-0 w-64 h-80 sm:w-80 sm:h-96 rounded-xl shadow-xl overflow-hidden transform rotate-6deg transition-transform duration-500 hover:rotate-8deg hover:scale-105">
              <img
                  src="../assets/tubsamy.png"
                  alt="Foto Andi Pratama sedang bekerja"
                  class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>

        <div class="order-none md:order-1">
          <h3 class="text-2xl font-bold text-gray-800  mb-4">
            Perjalanan Saya di Dunia Digital
          </h3>
          <p class="text-gray-600  mb-6 leading-relaxed">
            Saya adalah seorang Machine Learning Engineer dan Web Developer yang bersemangat. Sejak kecil, saya selalu tertarik dengan teknologi dan bagaimana cara kerjanya. Perjalanan saya dimulai dengan belajar HTML dan CSS, lalu berkembang ke JavaScript dan framework modern seperti Vue.js.
          </p>
          <p class="text-gray-600  mb-8 leading-relaxed">
            Saat ini, saya fokus pada pengembangan aplikasi web yang responsif dan intuitif, serta penerapan machine learning untuk menciptakan solusi yang lebih cerdas. Saya percaya bahwa teknologi harus mudah diakses dan digunakan oleh semua orang, dan itulah yang saya usahakan dalam setiap proyek yang saya kerjakan.
          </p>

          <h4 class="text-xl font-bold text-gray-800  mb-4">
            Teknologi yang Saya Kuasai
          </h4>
          <div class="flex flex-wrap gap-3">
            <span v-for="tech in techStack" :key="tech" class="px-4 py-2 text-sm font-semibold text-gray-700  bg-gray-200  rounded-full transition-colors duration-300">
              {{ tech }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


