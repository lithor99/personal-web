<template>
  <div class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Network Animation Background -->
    <div class="fixed inset-0 z-0">
      <canvas id="networkCanvas" class="absolute inset-0 w-full h-full"></canvas>
      <div id="nodesContainer" class="absolute inset-0 pointer-events-none"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Navigation Bar -->
      <!-- <header class="bg-gray-800/80 backdrop-blur-sm">
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
      <section class="relative text-center py-10  bg-black/0 backdrop-blur-none">
        <div class="container mx-auto">
          <div
            class="bg-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-yellow-500/20"
            style="width: 183px; height: 183px;">
            <div
              class="bg-[url('/images/me.jpg')] bg-cover bg-center rounded-full mx-auto flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              style="width: 180px; height: 180px;" @click="openModal">
            </div>
          </div>
          <h1 class="text-5xl font-bold mt-10 text-yellow-500 animate-pulse">LITHOR XIAYE</h1>
          <p class="p-4 text-gray-200 text-xl max-w-2xl backdrop-blur-sm bg-black/0 rounded-lg mx-auto mt-2"
            style="width: 100%; max-width: 800px;">
            <span>
              👋 Hello, my name is LITHOR XIAYE, I am a software developer. I graduated from National University of
              Laos,
              Faculty of Natural Sciences, Department of Computer Science.<br>I have more than <span
                class="text-yellow-500 font-bold">{{ new
                  Date().getFullYear() -
                  2021 }}</span> years of experience. I can help you solve all your business problems by software
              applocation. Please
              contact me if you need 🤗
            </span>
          </p>
          <div class="flex items-center justify-center mt-4">
            <div v-for="social in sosialLinks" :key="social.id"
              class="bg-yellow-500 rounded-full mx-1 items-center relative inline-block group hover:cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
              @click="social.action" style="width: 35px; height: 35px;">
              <div class="bg-gray-900 rounded-full mx-auto flex items-center justify-center"
                style="width: 33px; height: 33px;">
                <Icon :icon="social.icon" :class="social.iconClass" />
              </div>
              <div
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-no-wrap z-20">
                {{ social.tooltip }}
              </div>
            </div>
          </div>
        </div>

        <!-- CV Section -->
        <div class="flex justify-center items-center">
          <div class="px-10 py-4 mt-8 rounded-lg text-white backdrop-blur-sm bg-black/0 border border-white/10"
            style="width: 100%; max-width: 800px;">
            <h2 class="text-2xl font-bold mb-6 text-center text-yellow-600">Curriculum Vitae</h2>
            <div class="flex flex-col mb-2 sm:flex-row gap-4 justify-center items-center">
              <!-- View CV Button -->
              <button @click="viewCV"
                class="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50 flex items-center gap-2 min-w-[150px] justify-center">
                <Icon icon="mdi:eye" class="w-5 h-5" />
                <span>View CV</span>
                <div
                  class="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </button>

              <!-- Download CV Button -->
              <button @click="downloadCV"
                class="group relative bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2 min-w-[150px] justify-center">
                <Icon icon="mdi:download" class="w-5 h-5" />
                <span>Download CV</span>
                <div
                  class="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Programming Skill Section -->
        <div class="flex justify-center items-center">
          <div class="px-10 py-4 mt-8 rounded-lg text-white backdrop-blur-sm bg-black/0 border border-white/10"
            style="width: 100%; max-width: 800px;">
            <h2 class="text-2xl font-bold mb-4 text-center text-yellow-600">Programming Skills</h2>

            <div v-for="skill in skills" :key="skill.name" class="mb-4">
              <div class="flex justify-between">
                <div class="flex items-center justify-start">
                  <Icon :icon="skill.icon" class="w-5 h-5 mr-2"></Icon>
                  <span class="font-medium text-sm">{{ skill.name }}</span>
                </div>
                <span class="font-medium text-sm">{{ skill.percentage }}%</span>
              </div>
              <div class="bg-gray-300/30 h-4 rounded-full mt-2 backdrop-blur-sm">
                <div
                  class="bg-gradient-to-r from-pink-400 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out shadow-lg"
                  :style="{ width: skill.percentage + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Work Experience -->
        <div class="flex justify-center items-center">
          <div class="w-max backdrop-blur-sm bg-black/0 rounded-lg p-6 mt-8 mx-4 border border-white/10">
            <h2 class="text-2xl font-bold text-center text-yellow-600">Work Experience</h2>
            <div class="max-w-4xl mx-auto mt-6 text-left">
              <ul class="list-disc list-inside space-y-2">
                <li class="hover:bg-yellow-500/5 p-4 rounded-lg transition-colors duration-300">
                  <strong class="text-yellow-400">Front-end and Mobile Application Developer at Simple Tech CO.,
                    LTD</strong> - 2025 to Present
                  <p class="text-gray-300 ml-5 mt-2">Develop, manage and support various web and mobile applications for
                    Kamphaeng Saen University, Savannakhet University, Northern College of Finance, Southern College of
                    Finance and Academy of Finance and Accounting. Using NuxtJS, ReactJS, Flutter, NestJS with
                    PostgreSQL
                    and MongoDB
                    Database.</p>
                </li>
                <li class="hover:bg-yellow-500/5 p-4 rounded-lg transition-colors duration-300">
                  <strong class="text-yellow-400">Full Stack Developer at Agricultural Promotion Bank CO., LTD
                    (APB)</strong> - 2023 to 2025
                  <p class="text-gray-300 ml-5 mt-2">Develop, manage, and support various web and mobile applications
                    for
                    clients.
                    Development frameworks include Flutter, NuxtJS, ReactJS, NodeJS, NestJS, Golang and Database by
                    MySQL.
                  </p>
                </li>
                <li class="hover:bg-yellow-500/5 p-4 rounded-lg transition-colors duration-300">
                  <strong class="text-yellow-400">Frelance Software Developer</strong> - 2022 to 2023
                  <p class="text-gray-300 ml-5 mt-2">Develop, manage and support various web and mobile applications for
                    clients. Using NuxtJS, Flutter, NodeJS with SQL Server and MySQL Database.</p>
                </li>
                <li class="hover:bg-yellow-500/5 p-4 rounded-lg transition-colors duration-300">
                  <strong class="text-yellow-400">Software Developer at Souvanny Home Center Public Company</strong> -
                  2021 to 2022
                  <p class="text-gray-300 ml-5 mt-2">Develop, manage and support various web and mobile applications for
                    clients. Using C#, Flutter, PostgreSQL Database.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Portfolio Section -->
        <div class="container mx-auto text-center">
          <div class="backdrop-blur-sm bg-black/0 rounded-lg px-8 py-6 mt-8 mx-4 border border-white/10">
            <div class="text-yellow-600 text-2xl font-bold">Portfolio</div>
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="project in projects" :key="project.id"
                class="bg-yellow-600 shadow-md rounded-lg p-2 hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 backdrop-blur-sm"
                @click="openLink(project.link)">
                <img :src="project.image" :alt="project.title" class="rounded" />
                <h3 class="mt-4 text-xl font-bold">{{ project.title }}</h3>
                <p class="text-gray-600 mt-2">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-yellow-600/90 text-center text-white py-4 backdrop-blur-sm">
        <p class="text-gray-800">&copy; 2025 LITHOR XIAYE. All rights reserved.</p>
      </footer>
    </div>

    <!-- Profile Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click="closeModal">
      <!-- Modal Content -->
      <div v-if="isModalOpen"
        class="relative bg-yellow-500 rounded-none shadow-2xl max-w-2xl max-h-[90vh] overflow-hidden hover:scale-105 transition-transform duration-300"
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

// CV Methods
const viewCV = () => {
  window.open('/documents/cv.pdf', '_blank');
};

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/documents/cv.pdf';
  link.download = 'LITHOR_XIAYE_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Network Animation Class
class NetworkAnimation {
  constructor() {
    this.canvas = document.getElementById('networkCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.nodesContainer = document.getElementById('nodesContainer');
    this.nodes = [];
    this.connections = [];
    this.maxConnections = 100;
    this.nodeCount = 50;

    this.init();
    this.createNodes();
    this.animate();
    this.handleResize();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createNodes() {
    for (let i = 0; i < this.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    this.createHTMLNodes();
  }

  createHTMLNodes() {
    this.nodes.forEach((node, index) => {
      const nodeElement = document.createElement('div');
      nodeElement.className = `node absolute w-2 h-2 bg-yellow-500 rounded-full`;
      nodeElement.style.left = `${node.x}px`;
      nodeElement.style.top = `${node.y}px`;
      nodeElement.style.opacity = node.opacity;
      nodeElement.style.animation = `pulse 2s infinite ${Math.random() * 2}s`;
      nodeElement.id = `node-${index}`;
      this.nodesContainer.appendChild(nodeElement);
    });
  }

  updateNodes() {
    this.nodes.forEach((node, index) => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x <= 0 || node.x >= this.canvas.width) {
        node.vx *= -1;
        node.x = Math.max(0, Math.min(this.canvas.width, node.x));
      }
      if (node.y <= 0 || node.y >= this.canvas.height) {
        node.vy *= -1;
        node.y = Math.max(0, Math.min(this.canvas.height, node.y));
      }

      // Update HTML element position
      const nodeElement = document.getElementById(`node-${index}`);
      if (nodeElement) {
        nodeElement.style.left = `${node.x}px`;
        nodeElement.style.top = `${node.y}px`;
      }
    });
  }

  drawConnections() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    this.ctx.lineWidth = 1;

    let connectionCount = 0;

    for (let i = 0; i < this.nodes.length && connectionCount < this.maxConnections; i++) {
      for (let j = i + 1; j < this.nodes.length && connectionCount < this.maxConnections; j++) {
        const node1 = this.nodes[i];
        const node2 = this.nodes[j];
        const distance = Math.sqrt(
          Math.pow(node2.x - node1.x, 2) +
          Math.pow(node2.y - node1.y, 2)
        );

        if (distance < 120) {
          const opacity = Math.max(0, (120 - distance) / 120 * 0.2);
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;

          this.ctx.beginPath();
          this.ctx.moveTo(node1.x, node1.y);
          this.ctx.lineTo(node2.x, node2.y);
          this.ctx.stroke();

          connectionCount++;
        }
      }
    }

    // Draw nodes on canvas for glow effect
    this.nodes.forEach(node => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * 0.1})`;
      this.ctx.fill();
    });
  }

  animate() {
    this.updateNodes();
    this.drawConnections();
    requestAnimationFrame(() => this.animate());
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }
}

// Initialize network animation on mounted
onMounted(() => {
  // Mouse interaction
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Add magnetic effect to nearby nodes
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
      const rect = node.getBoundingClientRect();
      const nodeX = rect.left + rect.width / 2;
      const nodeY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(mouseX - nodeX, 2) +
        Math.pow(mouseY - nodeY, 2)
      );

      if (distance < 80) {
        const scale = Math.max(1, 1.5 - distance / 80);
        node.style.transform = `scale(${scale})`;
        node.style.opacity = Math.min(1, 1 - distance / 160);
      } else {
        node.style.transform = 'scale(1)';
        node.style.opacity = '0.4';
      }
    });
  });

  // Initialize animation
  new NetworkAnimation();

  // Add click ripple effect
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'absolute pointer-events-none z-30';
    ripple.style.left = `${e.clientX - 25}px`;
    ripple.style.top = `${e.clientY - 25}px`;
    ripple.innerHTML = `
      <div class="w-12 h-12 border-2 border-yellow-400 rounded-full animate-ping opacity-75"></div>
    `;
    document.body.appendChild(ripple);

    setTimeout(() => {
      if (document.body.contains(ripple)) {
        document.body.removeChild(ripple);
      }
    }, 1000);
  });
});
</script>

<style scoped>
@keyframes pulse {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.node {
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.network-canvas {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>