<script setup>
import { Switch } from "@headlessui/vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { debouncedWatch } from "@vueuse/core";

const colorMode = useColorMode();
const enabled = useDarkMode(false);

debouncedWatch(
  enabled,
  () => {
    colorMode.preference = enabled.value ? "dark" : "light";
  },
  { debounce: 100 }
);

onMounted(() => {
  if (
    colorMode.preference === "dark" ||
    (colorMode.preference !== "light" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    enabled.value = true;
  }
});
</script>

<template>
  <Switch
    v-model="enabled"
    :class="[
      enabled ? 'bg-gray-500' : 'bg-gray-200',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
      ]"
    >
      <span
        :class="[
          enabled
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <SunIcon class="h-3 w-3 text-gray-400" />
      </span>
      <span
        :class="[
          enabled
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <MoonIcon class="h-3 w-3 text-gray-400" />
      </span>
    </span>
  </Switch>
</template>
