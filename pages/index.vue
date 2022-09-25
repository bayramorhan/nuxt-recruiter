<script setup>
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="space-y-4">
    <section>
      <!-- Simple Alert ./components/ui/alerts -->
      <ui-alert-simple>
        Read our
        <nuxt-link to="/" class="text-teal-600 hover:underline"
          >documentation</nuxt-link
        >
        to learn more about our application and account types.
      </ui-alert-simple>
    </section>

    <section>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <!-- Candidate Homepage Left Sidebar -->
        <div class="col-span-12 md:col-span-4 lg:col-span-3">
          <!-- Profile Card ./components/profile/cards/main -->
          <div class="sticky top-4 space-y-4">
            <profile-cards-main />

            <!-- CTA -->
            <div class="text-center">
              <nuxt-link
                to="/"
                class="px-4 py-2 border border-teal-600 rounded-full text-teal-600 font-medium text-sm flex items-center w-full justify-center space-x-2 hover:bg-teal-600 hover:bg-opacity-10"
                ><PlusCircleIcon class="w-5" />
                <span>Post a job for free</span></nuxt-link
              >
            </div>
          </div>
        </div>
        <!-- Candidate Homepage Main Content -->
        <div class="col-span-12 md:col-span-8 lg:col-span-9 space-y-4">
          <!-- Recent Searches of Candidate -->
          <job-list-recent-search />

          <!-- Recommended For You -->
          <job-list-recommended-jobs />
        </div>
      </div>
    </section>
  </div>
</template>
