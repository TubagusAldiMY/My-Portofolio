<template>
  <nav class="sticky top-0 z-50 bg-white/80  backdrop-blur-md shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold text-gray-900 ">
            TubsAMY
          </a>
        </div>

        <div class="hidden md:flex md:items-center md:space-x-8">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" class="text-gray-600  hover:text-blue-600  transition-colors duration-300">
            {{ link.name }}
          </a>
        </div>

        <div class="hidden md:block">
          <a href="#contact" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
            Hubungi Saya
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-800  hover:text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-200 ">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-gray-100 " @click="toggleMenu">
            {{ link.name }}
          </a>
          <a href="#contact" class="block w-full text-left px-3 py-3 mt-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700" @click="toggleMenu">
            Hubungi Saya
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// State untuk mengontrol visibilitas menu mobile
const isMenuOpen = ref(false);

// Fungsi untuk mengubah state menu (buka/tutup)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Daftar link navigasi, supaya mudah dikelola
const navLinks = ref([
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
]);
</script>

<style scoped>
/* Transisi untuk menu mobile */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>