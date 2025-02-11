<template>
  <div class="bg-gray-900 text-white">
    <!-- Navigation Bar -->
    <!-- <header class="bg-gray-800">
      <nav class="container mx-auto flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold">Michiel</h1>
        <ul class="flex gap-6">
          <li><NuxtLink to="/" class="hover:text-yellow-500">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-yellow-500">About Me</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="hover:text-yellow-500">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-yellow-500">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header> -->

    <!-- Hero Section -->
    <section class="relative bg-gray-900 text-center py-20">
      <div class="container mx-auto">
        <div class=" bg-yellow-500 rounded-full mx-auto flex items-center justify-center"
          style="width: 182px; height: 182px;">
          <div class=" bg-black rounded-full mx-auto flex items-center justify-center"
            style="width: 180px; height: 180px;">
            <img src="/images/user.png" alt="Michiel" class="rounded-lg shadow-lg mx-auto"
              style="width: 140px; height: 140px;" />
          </div>
        </div>
        <h1 class="text-5xl font-bold mt-8">👋 LITHOR XIAYE 🤗</h1>
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto">
          Here’s a professional and engaging resume tailored for you, Lithor Xia, as a developer with a background from
          the National University of Laos. I've made it interesting while keeping it professional and relevant to your
          field.
        </p>
        <button class="mt-6 px-6 py-3 bg-yellow-500 text-black rounded hover:bg-yellow-600">
          Contact Me
        </button>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="bg-white text-black py-20">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="/images/user.png" alt="Michiel" class="rounded-lg shadow-lg mx-auto" />
        </div>
        <div>
          <h2 class="text-yellow-500 text-lg">About Me</h2>
          <h1 class="text-4xl font-bold mt-2">Always Strive For Better Work</h1>
          <p class="mt-4 text-gray-600">
            In addition to all the branding and marketing features and benefits, my clients get to enjoy the advantages
            of a time-tested and refined workflow that is custom-tailored to each project.
          </p>
          <button class="mt-6 px-6 py-3 bg-yellow-500 text-black rounded hover:bg-yellow-600">
            Know More
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="bg-gray-100 text-black py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-yellow-500 text-lg">Portfolio</h2>
        <h1 class="text-4xl font-bold mt-2">Some Projects</h1>
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white shadow-md rounded-lg p-4">
            <img src="/images/project1.png" alt="Project" class="rounded" />
            <h3 class="mt-4 text-xl font-bold">Project 1</h3>
            <p class="text-gray-600 mt-2">Description of the project goes here.</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <img src="/images/project2.png" alt="Project" class="rounded" />
            <h3 class="mt-4 text-xl font-bold">Project 2</h3>
            <p class="text-gray-600 mt-2">Description of the project goes here.</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <img src="/images/project3.png" alt="Project" class="rounded" />
            <h3 class="mt-4 text-xl font-bold">Project 3</h3>
            <p class="text-gray-600 mt-2">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-center text-white py-4">
      <p>&copy; 2025 Lithor Xiaye. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
/* Any specific JavaScript or Nuxt 3 configurations can be added here. */
</script>

<style>
/* Add custom styles here if needed */
</style>
