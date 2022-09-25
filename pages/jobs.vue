<script setup>
definePageMeta({
  layout: "default",
});

const availableJobs = [
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

const selectedJob = ref(availableJobs[0]);
</script>

<template>
  <section class="space-y-4 mt-2.5">
    <h2 class="font-semibold dark:text-gray-300">Available Jobs</h2>
    <div class="bg-white border rounded dark:bg-gray-800 dark:border-gray-700">
      <div class="grid grid-cols-12">
        <div class="col-span-4 border-r dark:border-gray-700">
          <div
            class="divide-y dark:divide-gray-700 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900"
          >
            <div
              v-for="job in availableJobs"
              :key="job.title"
              class="p-4 cursor-pointer"
              :class="[
                selectedJob?.title === job.title
                  ? 'bg-indigo-50 dark:bg-gray-900'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-900',
              ]"
              @click="selectedJob = job"
            >
              <div class="flex space-x-2.5 items-start">
                <img :src="job.logo" class="w-10" alt="" />
                <div class="space-y-1">
                  <h3
                    class="font-semibold block text-sm line-clamp-1 text-gray-800 dark:text-gray-300"
                  >
                    {{ job.title }}
                  </h3>
                  <div
                    class="text-sm text-gray-600 font-medium dark:text-gray-500"
                  >
                    {{ job.employer }}
                  </div>
                  <div class="text-xs text-gray-500">{{ job.location }}</div>

                  <div class="text-xs text-gray-400 mt-2.5">{{ job.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-8">
          <div class="p-6">
            <div class="flex space-x-2.5 items-start">
              <img :src="selectedJob.logo" class="w-10" alt="" />
              <div class="space-y-1">
                <h3
                  class="font-semibold block text-base line-clamp-1 text-gray-800 dark:text-gray-300"
                >
                  {{ selectedJob.title }}
                </h3>
                <div class="flex items-center job-meta text-sm">
                  <div class="text-gray-600 dark:text-gray-500 font-medium">
                    {{ selectedJob.employer }}
                  </div>
                  <div class="text-gray-500">
                    {{ selectedJob.location }}
                  </div>
                  <div class="text-gray-500">
                    {{ selectedJob.time }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.job-meta div:not(:last-of-type):after {
  content: "\00B7";
  margin-right: 8px;
  margin-left: 8px;
}
</style>
