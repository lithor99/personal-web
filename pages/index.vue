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
    <section class="relative bg-gray-900 text-center py-10">
      <div class="container mx-auto">
        <div class=" bg-yellow-500 rounded-full mx-auto flex items-center justify-center"
          style="width: 183px; height: 183px;">
          <div
            class="bg-[url('/images/me.jpg')] bg-cover bg-center rounded-full mx-auto flex items-center justify-center"
            style="width: 180px; height: 180px;">
          </div>
        </div>
        <h1 class="text-5xl font-bold mt-8">👋 LITHOR 🤗</h1>
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto">
          Hello, my name is LITHOR XIAYE, I am a software developer. I graduated from National University of Laos,
          Faculty of Natural Sciences. Department of Computer Science. I have more than 4 years of experience. I am a
          freelance developer. I can help you solve all your business problems. Please contact us if you need.
        </p>
        <div class="flex items-center justify-center mt-4">
          <div class=" bg-yellow-500 rounded-full mx-1 items-center relative inline-block group" @click="callMe()"
            style="width: 35px; height: 35px;">
            <div class=" bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon icon="el:phone-alt" class="w-6 h-6 text-yellow-500" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              Call
            </div>
          </div>
          <div class=" bg-yellow-500 rounded-full mx-1 items-center relative inline-block group"
            @click="openLink('https://web.whatsapp.com/')" style="width: 35px; height: 35px;">
            <div class=" bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon icon="flowbite:whatsapp-solid" class="w-7 h-7 text-yellow-500" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              Whatsapp
            </div>
          </div>
          <div class=" bg-yellow-500 rounded-full relative inline-block group mx-1 items-center"
            @click="openLink('https://www.facebook.com')" style="width: 35px; height: 35px;">
            <div class=" bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon icon="mdi:facebook" class="w-7 h-7 text-yellow-500" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              Facebook
            </div>
          </div>
          <div class=" bg-yellow-500 rounded-full mx-1 items-center relative inline-block group"
            @click="openLink('https://www.gmail.com')" style="width: 35px; height: 35px;">
            <div class=" bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon icon="foundation:mail" class="w-7 h-7 text-yellow-500" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              Email
            </div>
          </div>
          <div class=" bg-yellow-500 rounded-full mx-1 items-center relative inline-block group"
            @click="openLink('https://github.com/lithor99')" style="width: 35px; height: 35px;">
            <div class=" bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon icon="line-md:github-loop" class="w-7 h-7 text-yellow-500" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              Github
            </div>
          </div>
          <div class=" bg-yellow-500 rounded-full mx-1 items-center relative inline-block group"
            @click="openLink('https://gitlab.com/leethor99')" style="width: 35px; height: 35px;">
            <div class=" bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon icon="bi:gitlab" class="w-6 h-6 text-yellow-500" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              Gitlab
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programming Skill Section -->
    <section class="bg-white text-black py-10">
      <div class="flex justify-center items-center">
        <div>
          <img src="/images/world-it2.png" alt="Michiel" class="rounded-lg shadow-white"
            style="width: 100%; max-width: 500px;" />
        </div>
        <div class="p-6 bg-white rounded-lg" style="width: 100%; max-width: 600px;">
          <h2 class="text-2xl font-bold mb-6 text-start">My Programming Skills</h2>

          <!-- JavaScript -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:javascript" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">JavaScript</span>
              </div>
              <span class="font-medium text-sm text-gray-700">100%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-1">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 100%;"></div>
            </div>
          </div>

          <!-- TypeScript -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:typescript" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">TypeScript</span>
              </div>
              <span class="font-medium text-sm text-gray-700">90%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 90%;"></div>
            </div>
          </div>

          <!-- Dart -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="logos:dart" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">Dart</span>
              </div>
              <span class="font-medium text-sm text-gray-700">100%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 100%;"></div>
            </div>
          </div>

          <!-- Flutter -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:flutter-light" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">Flutter</span>
              </div>
              <span class="font-medium text-sm text-gray-700">100%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 100%;"></div>
            </div>
          </div>

          <!-- NuxtJS -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:nuxtjs-light" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">NuxtJS</span>
              </div>
              <span class="font-medium text-sm text-gray-700">90%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 90%;"></div>
            </div>
          </div>

          <!-- ReactJS -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:react-light" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">ReactJS</span>
              </div>
              <span class="font-medium text-sm text-gray-700">80%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 80%;"></div>
            </div>
          </div>

          <!-- NodeJS -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:nodejs-light" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">NodeJS</span>
              </div>
              <span class="font-medium text-sm text-gray-700">100%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 100%;"></div>
            </div>
          </div>

          <!-- NestJS -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:nestjs-light" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">NestJS</span>
              </div>
              <span class="font-medium text-sm text-gray-700">75%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 75%;"></div>
            </div>
          </div>

          <!-- Golang -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="skill-icons:golang" class="w-5 h-5 mr-2" />
                <span class="font-medium text-sm text-gray-700">Golang</span>
              </div>
              <span class="font-medium text-sm text-gray-700">80%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 80%;"></div>
            </div>
          </div>

          <!-- Database -->
          <div class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="pepicons-pencil:database-circle-filled" class="w-5 h-5 mr-2 text-yellow-600" />
                <span class="font-medium text-sm text-gray-700">Database(MySQL, SQL Server, PostgreSQL, MariaDB,
                  MongoDB)</span>
              </div>
              <span class="font-medium text-sm text-gray-700">80%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 80%;"></div>
            </div>
          </div>

          <!-- Other -->
          <div>
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon icon="cbi:more-tv" class="w-5 h-5 mr-2 text-blue-500" />
                <span class="font-medium text-sm text-gray-700">Other</span>
              </div>
              <span class="font-medium text-sm text-gray-700">50%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div class="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full" style="width: 50%;"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="bg-gray-900 text-black py-10">
      <div class="container mx-auto text-center">
        <div class="text-yellow-600 text-2xl font-bold">Portfolio</div>
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
          <div class="bg-white shadow-md rounded-lg p-4">
            <img src="/images/project2.png" alt="Project" class="rounded" />
            <h3 class="mt-4 text-xl font-bold">Project 4</h3>
            <p class="text-gray-600 mt-2">Description of the project goes here.</p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4">
            <img src="/images/project3.png" alt="Project" class="rounded" />
            <h3 class="mt-4 text-xl font-bold">Project 5</h3>
            <p class="text-gray-600 mt-2">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-yellow-600 text-center text-white py-4">
      <p>&copy; 2025 Lithor Xiaye. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

const openLink = (url) => {
  window.open(url, '_blank');
};

const callMe = () => {
  window.location.href = 'tel:+8562078966646'
}
</script>

<style>
/* Add custom styles here if needed */
</style>
