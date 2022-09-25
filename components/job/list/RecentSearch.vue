<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const searchList = [
  {
    id: 1,
    text: "frontend developer",
    newResults: false,
  },
  {
    id: 2,
    text: "web developer",
    newResults: false,
  },
  {
    id: 3,
    text: "react developer",
    newResults: 2,
  },
];
</script>

<template>
  <div
    class="py-6 bg-white border rounded space-y-4 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center justify-between px-6">
      <h2 class="font-semibold dark:text-gray-300">Your Recent Searches</h2>
      <button
        type="button"
        class="text-xs font-medium bg-gray-100 px-4 py-2 rounded text-gray-500 hover:shadow dark:bg-gray-900 dark:hover:text-gray-400"
      >
        Clear Search History
      </button>
    </div>

    <ul class="text-sm divide-y dark:divide-gray-700">
      <li
        class="font-medium text-gray-800 dark:text-gray-300 py-3.5 px-6"
        v-for="searchItem in searchList"
        :key="searchItem.id"
      >
        <MagnifyingGlassIcon class="w-4 inline mr-1" /> {{ searchItem.text }}
        &middot;
        <span v-if="!searchItem.newResults" class="text-gray-400 text-xs"
          >No new results since your last search</span
        >
        <span v-else class="text-teal-600 text-xs">2 new results</span>
      </li>
    </ul>

    <div class="px-6">
      <nuxt-link
        to="/"
        class="text-teal-600 text-sm font-medium hover:underline"
        >Show more</nuxt-link
      >
    </div>
  </div>
</template>
