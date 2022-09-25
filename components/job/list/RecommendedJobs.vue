<script setup>
import { BookmarkIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

const jobs = [
  {
    title: "Senior Frontend Developer (Remote)",
    employer: "Atica Technologies Inc.",
    location: "Istanbul, Turkey (Remote)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/atica.png",
  },
  {
    title: "Senior React Developer (Hybrid)",
    employer: "Asgardia Software",
    location: "Istanbul, Turkey (Hybrid)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/asgardia.png",
  },
  {
    title: "Junior Web Frontend & UI/UX Developer (Office)",
    employer: "Fossa Inc.",
    location: "Istanbul, Turkey (Office)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/fossa.png",
  },
  {
    title: "Senior Javascript Developer (Remote)",
    employer: "Muszica Corporation",
    location: "Istanbul, Turkey (Remote)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/muszica.png",
  },
];
</script>

<template>
  <div
    class="pt-6 bg-white border rounded space-y-2 dark:bg-gray-800 dark:border-gray-700"
  >
    <!-- Card Heading -->
    <div class="px-6">
      <h2 class="font-semibold dark:text-gray-300">Recommended for you</h2>
      <p class="text-xs text-gray-400">
        According to your search history and skills
      </p>
    </div>
    <!-- Card Body -->
    <div>
      <!-- Job List -->
      <div class="divide-y dark:divide-gray-700">
        <!-- Job List Item -->
        <div
          v-for="job in jobs"
          :key="job.title"
          class="flex items-start space-x-4 relative p-6"
        >
          <img :src="job.logo" alt="" class="w-14" />

          <div>
            <nuxt-link
              to="/"
              class="font-semibold block text-teal-600 hover:underline text-sm"
              >{{ job.title }}</nuxt-link
            >
            <nuxt-link
              to="/"
              class="text-xs text-gray-600 dark:text-gray-400 font-medium hover:underline hover:text-teal-600"
              >{{ job.employer }}</nuxt-link
            >
            <p class="text-xs text-gray-500">{{ job.location }}</p>

            <p class="text-xs text-gray-400 mt-2.5">{{ job.time }}</p>
          </div>

          <div class="absolute right-8 hidden lg:flex items-center space-x-3">
            <!-- Don't show again -->
            <button type="button" class="text-gray-400 hover:text-gray-500">
              <EyeSlashIcon class="w-6" />
            </button>
            <!-- Add to bookmarks/lists -->
            <button type="button" class="text-gray-400 hover:text-gray-500">
              <BookmarkIcon class="w-6" />
            </button>
          </div>
        </div>
        <div class="border-t text-center">
          <nuxt-link
            to="/"
            class="block w-full py-4 font-medium text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-900 text-sm transition duration-200"
            >Show All</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
