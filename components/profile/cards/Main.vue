<script setup>
import { PencilSquareIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="bg-white rounded overflow-hidden pt-6 pb-4 border relative dark:bg-gray-800 dark:border-gray-700"
  >
    <button
      class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 hover:dark:text-gray-400"
    >
      <PencilSquareIcon class="w-5" />
    </button>
    <div class="flex flex-col items-center justify-center space-y-4">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        class="w-24 h-24 rounded-full object-cover mx-auto ring-2 ring-offset-2 ring-teal-600 object-top"
        alt=""
      />
      <div class="flex flex-col items-center justify-center">
        <nuxt-link
          to="/"
          class="text-center font-medium inline-block dark:text-gray-200"
          >Peter Griffin</nuxt-link
        >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Web Developer at Google Inc.
        </p>
      </div>
    </div>

    <!-- Metrics ./components/profile/cards/metrics -->
    <profile-cards-metrics></profile-cards-metrics>

    <div class="pt-4 text-center">
      <nuxt-link
        to="/"
        class="text-xs text-teal-600 font-medium hover:underline"
        >Complete your profile to get more views</nuxt-link
      >
    </div>
  </div>
</template>
