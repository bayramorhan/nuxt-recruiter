<script setup>
const darkMode = useDarkMode();
useHead({
  htmlAttrs: {
    class: `h-full overflow-y-scroll`,
  },
  bodyAttrs: {
    class: "h-full",
  },
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col"
    :class="[darkMode && 'dark', darkMode ? 'bg-gray-900' : 'bg-gray-100']"
  >
    <layout-navigation />
    <div class="min-h-full py-4 flex-1">
      <main>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>

    <footer class="border-t py-6 dark:bg-gray-900 dark:border-gray-800 mt-4">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2">
          <div>
            <p class="text-gray-400 text-sm">
              <span class="font-bold">recrut.io</span> Demo Application &middot;
              <nuxt-link
                href="https://github.com/bayramorhan/nuxt-recruiter"
                target="_blank"
                title="Show GitHub Repository"
                class="hover:text-gray-600"
                >View on GitHub</nuxt-link
              >
            </p>
          </div>
          <div class="text-right text-gray-400 text-sm">
            ©2022 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
