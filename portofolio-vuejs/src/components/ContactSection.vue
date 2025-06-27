<script setup>
import { ref } from 'vue';

// Data untuk form, diikat dengan v-model
const form = ref({
  name: '',
  email: '',
  message: '',
});

// Data untuk link kontak/sosial media
const socialLinks = ref([
  { name: 'tubagusaldimy@gmail.com', url: 'mailto:tubagusaldimy@gmail.com', iconSvg: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>` },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tubagusaldi', iconSvg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>` },
  { name: 'GitHub', url: 'https://github.com/TubagusAldiMY', iconSvg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-23.3 2.6-57.5 0 0 21.9-7 72.1 25.6C228.8 125 258.9 123 288.6 123c29.7 0 59.9 2.1 88.1 6.1 50.2-32.6 72.1-25.6 72.1-25.6 13.7 34.2 5.2 51 2.6 57.5 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 390.1 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>` },
]);

// Fungsi yang dijalankan saat form di-submit
const handleSubmit = () => {
  // PENTING: Ini adalah placeholder.
  // Di dunia nyata, Anda akan mengirim data ini ke backend atau layanan pihak ketiga.
  console.log('Data Formulir:', form.value);
  alert(`Terima kasih, ${form.value.name}! Pesan Anda telah "dikirim". (Cek konsol browser)`);

  // Reset form setelah submit
  form.value = {
    name: '',
    email: '',
    message: '',
  };
};
</script>

<template>
  <section id="contact" class="py-20 sm:py-32 bg-gray-100 ">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 ">Mari Terhubung</h2>
        <p class="mt-4 text-lg text-gray-600 ">
          Punya pertanyaan, proposal, atau hanya ingin menyapa? Saya siap mendengarkan.
        </p>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white  p-8 rounded-2xl shadow-lg">

        <div class="flex flex-col justify-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Info Kontak</h3>
          <p class="text-gray-600 mb-6">
            Anda juga bisa menemukan saya atau mengirim email langsung melalui link di bawah ini.
          </p>
          <div class="space-y-4">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" class="flex items-center group">
              <span class="flex-shrink-0 w-10 h-10 bg-gray-100  rounded-full flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-blue-100 /50">
                <div v-html="link.iconSvg" class="w-6 h-6 text-gray-600 transition-colors duration-300 group-hover:text-blue-600 "></div>
              </span>
              <span class="font-semibold text-gray-700 group-hover:text-blue-600  transition-colors duration-300">{{ link.name }}</span>
            </a>
          </div>
        </div>

        <div class="w-full">
          <form @submit.prevent="handleSubmit">
            <div class="space-y-5">
              <div>
                <label for="name" class="font-semibold text-sm text-gray-700">Nama Lengkap</label>
                <input v-model="form.name" type="text" id="name" name="name" required class="mt-2 block w-full px-4 py-2 bg-gray-100  border border-gray-200 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition">
              </div>
              <div>
                <label for="email" class="font-semibold text-sm text-gray-700">Alamat Email</label>
                <input v-model="form.email" type="email" id="email" name="email" required class="mt-2 block w-full px-4 py-2 bg-gray-100  border border-gray-200 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition">
              </div>
              <div>
                <label for="message" class="font-semibold text-sm text-gray-700">Pesan Anda</label>
                <textarea v-model="form.message" id="message" name="message" rows="5" required class="mt-2 block w-full px-4 py-2 bg-gray-100  border border-gray-200 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
              </div>
              <button type="submit" class="w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-blue-500">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>