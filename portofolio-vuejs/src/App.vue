<template>
  <div id="app" class="bg-gray-50  min-h-screen">
    <Navbar />

    <main>
      <section id="home" class="h-screen flex items-center justify-center">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Home Section</h1>
      </section>
      <section id="about" class="h-screen flex items-center justify-center">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white">About Section</h1>
      </section>
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>