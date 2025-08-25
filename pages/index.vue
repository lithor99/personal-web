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
    <section class="relative text-center py-10 bg-gradient-to-b from-gray-700 to-gray-900">
      <div class="container mx-auto">
        <div class=" bg-yellow-500 rounded-full mx-auto flex items-center justify-center"
          style="width: 183px; height: 183px;">
          <div
            class="bg-[url('/images/me.jpg')] bg-cover bg-center rounded-full mx-auto flex items-center justify-center"
            style="width: 180px; height: 180px;" @click="openModal">
          </div>
        </div>
        <h1 class="text-5xl font-bold mt-8 text-yellow-500">LITHOR XIAYE</h1>
        <p class="p-4 text-gray-200 text-xl max-w-2xl" style="width: 100%; max-width: 800px; margin: auto;">
          <span>
            👋 Hello, my name is LITHOR XIAYE, I am a software developer. I graduated from National University of Laos,
            Faculty of Natural Sciences, Department of Computer Science.<br>I have more than <span
              class="text-yellow-500">{{ new
                Date().getFullYear() -
                2021 }}</span> years of experience. I can help you solve all your business problems by software
            applocation. Please
            contact me if you need 🤗
          </span>
        </p>
        <div class="flex items-center justify-center mt-4">
          <div v-for="social in sosialLinks" :key="social.id"
            class="bg-yellow-500 rounded-full mx-1 items-center relative inline-block group hover:cursor-pointer"
            @click="social.action" style="width: 35px; height: 35px;">
            <div class="bg-gray-900 rounded-full mx-auto flex items-center justify-center"
              style="width: 33px; height: 33px;">
              <Icon :icon="social.icon" :class="social.iconClass" />
            </div>
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
              {{ social.tooltip }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programming Skill Section -->
    <section class="bg-gradient-to-b from-gray-700 to-gray-900 text-white py-10">
      <div class="flex justify-center items-center">
        <div class="p-6 rounded-lg text-white" style="width: 100%; max-width: 800px;">
          <h2 class="text-2xl font-bold mb-6 text-center text-yellow-600">Programming Skills</h2>

          <div v-for="skill in skills" :key="skill.name" class="mb-4">
            <div class="flex justify-between">
              <div class="flex items-center justify-start">
                <Icon :icon="skill.icon" class="w-5 h-5 mr-2"></Icon>
                <span class="font-medium text-sm">{{ skill.name }}</span>
              </div>
              <span class="font-medium text-sm">{{ skill.percentage }}%</span>
            </div>
            <div class="bg-gray-300 h-4 rounded-full mt-2">
              <div
                class="bg-gradient-to-r from-pink-400 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out"
                :style="{ width: skill.percentage + '%' }"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Work Expirience -->
    <section class="bg-gradient-to-b from-gray-700 to-gray-900 text-white py-10">
      <div>
        <h2 class="text-2xl font-bold text-center text-yellow-600 mt-10">Work Experience</h2>
        <div class="max-w-4xl mx-auto mt-6">
          <ul class="list-disc list-inside space-y-4">
            <li>
              <strong>Front-end and Mobile Application Developer at Simple Tech CO., LTD</strong> - 2025 to Present
              <p class="text-gray-300 ml-5">Develop, manage and support various web and mobile applications for
                Kamphaeng Saen University, Savannakhet University, Northern College of Finance, Southern College of
                Finance and Academy of Finance and Accounting. Using NuxtJS, ReactJS, Flutter, NestJS with PostgreSQL
                and MongoDB
                Database.</p>
            </li>
            <li>
              <strong>Full Stack Developer at Agricultural Promotion Bank CO., LTD (APB)</strong> - 2023 to 2025
              <p class="text-gray-300 ml-5">Develop, manage, and support various web and mobile applications for
                clients.
                Development frameworks include Flutter, NuxtJS, ReactJS, NodeJS, NestJS, Golang and Database by MySQL.
              </p>
            </li>
            <li>
              <strong>Frelance Software Developer</strong> - 2022 to 2023
              <p class="text-gray-300 ml-5">Develop, manage and support various web and mobile applications for
                clients. Using NuxtJS, Flutter, NodeJS with SQL Server and MySQL Database.</p>
            </li>
            <li>
              <strong>Software Developer at Souvanny Home Center Public Company</strong> - 2021 to 2022
              <p class="text-gray-300 ml-5">Develop, manage and support various web and mobile applications for
                clients. Using C#, Flutter, PostgreSQL Database.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>


    <!-- Portfolio Section -->
    <section class="bg-gradient-to-b from-gray-700 to-gray-900 text-white py-10">
      <div class="container mx-auto text-center">
        <div class="text-yellow-600 text-2xl font-bold">Portfolio</div>
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id"
            class="bg-yellow-600 shadow-md rounded-lg p-2 hover:cursor-pointer" @click="openLink(project.link)">
            <img :src="project.image" :alt="project.title" class="rounded" />
            <h3 class="mt-4 text-xl font-bold">{{ project.title }}</h3>
            <p class="text-gray-600 mt-2">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-yellow-600 text-center text-white py-4">
      <p class="text-gray-800">&copy; 2025 LITHOR XIAYE. All rights reserved.</p>
    </footer>

    <!-- show profile modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="closeModal">
      <!-- Modal Content -->
      <div v-if="isModalOpen" class="relative bg-white rounded-none shadow-2xl max-w-2xl max-h-[90vh] overflow-hidden"
        @click.stop>
        <img src="/images/me.jpg" alt="Profile"
          class="w-full max-w-[600px] h-auto max-h-[600px] object-cover object-center border border-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

const sosialLinks = [
  {
    id: 'phone',
    icon: 'el:phone-alt',
    iconClass: 'w-6 h-6 text-yellow-500',
    tooltip: 'Call',
    action: () => callMe()
  },
  {
    id: 'whatsapp',
    icon: 'flowbite:whatsapp-solid',
    iconClass: 'w-7 h-7 text-yellow-500',
    tooltip: 'Whatsapp',
    action: () => openLink('https://web.whatsapp.com/')
  },
  {
    id: 'facebook',
    icon: 'mdi:facebook',
    iconClass: 'w-7 h-7 text-yellow-500',
    tooltip: 'Facebook',
    action: () => openLink('https://www.facebook.com')
  },
  {
    id: 'email',
    icon: 'foundation:mail',
    iconClass: 'w-7 h-7 text-yellow-500',
    tooltip: 'Email',
    action: () => openLink('https://www.gmail.com')
  },
  {
    id: 'github',
    icon: 'line-md:github-loop',
    iconClass: 'w-7 h-7 text-yellow-500',
    tooltip: 'Github',
    action: () => openLink('https://github.com/lithor99')
  },
  {
    id: 'gitlab',
    icon: 'bi:gitlab',
    iconClass: 'w-6 h-6 text-yellow-500',
    tooltip: 'Gitlab',
    action: () => openLink('https://gitlab.com/leethor99')
  }
];

const skills = [
  {
    name: 'JavaScript',
    icon: 'skill-icons:javascript',
    percentage: 100
  },
  {
    name: 'TypeScript',
    icon: 'skill-icons:typescript',
    percentage: 90
  },
  {
    name: 'Dart',
    icon: 'logos:dart',
    percentage: 100
  },
  {
    name: 'Flutter',
    icon: 'skill-icons:flutter-light',
    percentage: 100
  },
  {
    name: 'NuxtJS',
    icon: 'skill-icons:nuxtjs-light',
    percentage: 90
  },
  {
    name: 'ReactJS',
    icon: 'skill-icons:react-light',
    percentage: 80
  },
  {
    name: 'NodeJS',
    icon: 'skill-icons:nodejs-light',
    percentage: 100
  },
  {
    name: 'NestJS',
    icon: 'skill-icons:nestjs-light',
    percentage: 75
  },
  {
    name: 'Golang',
    icon: 'skill-icons:golang',
    percentage: 80
  },
  {
    name: 'Database (MySQL, SQL Server, PostgreSQL, MariaDB, MongoDB)',
    icon: 'pepicons-pencil:database-circle-filled',
    iconColor: 'text-yellow-600',
    percentage: 80
  },
  {
    name: 'Other',
    icon: 'cbi:more-tv',
    iconColor: 'text-blue-500',
    percentage: 50
  }
];

const projects = [
  {
    id: 1,
    title: 'ວິທະຍາໄລການເງິນພາກເໜືອ',
    description: 'ລະບົບບໍລິຫານຈັດການຫໍສະໝຸດ',
    image: '/images/nfc-library.png',
    link: 'https://library.slms-nfc.edu.la'
  },
  {
    id: 2,
    title: 'ວິທະຍາໄລການເງິນພາກໃຕ້',
    description: 'ລະບົບບໍລິຫານຈັດການຫໍສະໝຸດ',
    image: '/images/project2.png',
    link: 'https://library.slms-sfc.edu.la'
  },
  {
    id: 3,
    title: 'ວິທະຍາໄລການເງິນພາກເໜືອ',
    description: 'ລະບົບລົງ​ທະ​ບຽນເຂົ້າສອບເສັງ',
    image: '/images/nfc-entrance.png',
    link: 'https://entrance.slms-nfc.edu.la'
  },
  {
    id: 4,
    title: 'ວິທະຍາໄລການເງິນພາກໃຕ້',
    description: 'ລະບົບລົງ​ທະ​ບຽນເຂົ້າສອບເສັງ',
    image: '/images/sfc-entrance.png',
    link: 'https://entrance.slms-sfc.edu.la'
  },
  {
    id: 5,
    title: 'ມະຫາວິທະຍາໄລສະຫວັນນະເຂດ',
    description: 'ລະບົບຈັດການການຮຽນ-ການສອນຂອງນັກສຶກສາ',
    image: '/images/project3.png',
    link: 'https://student.slms-sku.edu.la'
  },
  {
    id: 6,
    title: 'ມະຫາວິທະຍາໄລຈຳປາສັກ',
    description: 'ລະບົບຈັດການການຮຽນ-ການສອນຂອງນັກສຶກສາ',
    image: '/images/project3.png',
    link: 'https://student.slms-cu.edu.la'
  }
];

const isModalOpen = ref(false)

// Methods
const openModal = () => {
  isModalOpen.value = true
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  // Restore body scroll
  document.body.style.overflow = 'auto'
}

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
