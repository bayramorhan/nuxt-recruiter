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
    description:
      "<p>Donec sit amet volutpat est. Sed tempus fringilla metus pretium suscipit. Curabitur nunc mi, dignissim at ex et, maximus dapibus nibh. Sed faucibus ante sed nibh laoreet vulputate. Donec turpis odio, aliquam venenatis commodo nec, volutpat et lectus. Maecenas fermentum eget nibh ut pretium. Quisque consectetur bibendum ex eget blandit. Integer ut nulla at eros lobortis dignissim. Morbi vitae facilisis neque, quis suscipit tortor.</p><p>Donec aliquet enim tellus, semper pulvinar lectus fringilla et. Nullam ex massa, aliquam et mi sit amet, viverra aliquam mi. Phasellus suscipit viverra tortor, efficitur lacinia purus feugiat id. Aenean vehicula, elit eget tristique pellentesque, lorem mauris euismod velit, sit amet consequat orci nibh nec diam. Morbi et ex malesuada, laoreet mauris id, porta lorem. Pellentesque laoreet, eros a mollis vehicula, sapien ante varius est, id volutpat est metus non nisl. Fusce ac sollicitudin ex. Nulla faucibus arcu ut justo maximus, vitae mattis neque vehicula. Proin faucibus ex eu interdum tristique. Mauris quis felis sagittis, porta elit accumsan, pharetra eros. Quisque in gravida purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>",
  },
  {
    title: "Senior React Developer (Hybrid)",
    employer: "Asgardia Software",
    location: "Istanbul, Turkey (Hybrid)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/asgardia.png",
    description:
      "<p>Aliquam convallis urna eu ornare mollis. Duis faucibus convallis sollicitudin. Maecenas tortor leo, dictum nec consequat sit amet, rutrum quis leo. Nam orci lectus, facilisis non risus vel, varius ultricies erat. Ut euismod elit vel risus semper efficitur. Aliquam ultricies neque a justo vestibulum accumsan. Phasellus egestas congue nisi at tincidunt. In ullamcorper, sem gravida cursus vehicula, turpis elit placerat enim, sed volutpat massa massa id erat. Sed dapibus dolor eget velit hendrerit interdum. Vivamus ullamcorper purus sed placerat pulvinar.</p><p>Aenean porttitor interdum dolor. Integer at metus tristique, suscipit libero id, congue enim. Suspendisse scelerisque congue dui vel ornare. Nullam sollicitudin interdum quam, id pharetra leo fermentum quis. Maecenas facilisis vel sapien sit amet maximus. Maecenas mollis rhoncus tempor. Mauris egestas eros eu dolor posuere consequat. Nullam ullamcorper ante ac justo volutpat, at porttitor ante venenatis. Nullam in rhoncus erat. Sed eros ex, pharetra eget est ut, interdum laoreet nisl. Sed posuere eget turpis nec faucibus. Fusce ut lectus mi.</p>",
  },
  {
    title: "Junior Web Frontend & UI/UX Developer (Office)",
    employer: "Fossa Inc.",
    location: "Istanbul, Turkey (Office)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/fossa.png",
    description:
      "<p>Ut auctor dui porttitor sollicitudin maximus. Sed placerat aliquet sem, sit amet ultrices nibh euismod eget. Maecenas ex metus, convallis et erat sit amet, porta accumsan orci. Pellentesque eleifend nec sem ut iaculis. Nam turpis urna, pretium sit amet bibendum ut, aliquam ut ante. Curabitur interdum sapien et leo porttitor rhoncus. Mauris et orci quis lacus dapibus dapibus. Suspendisse eu leo egestas, auctor eros et, consectetur massa. Proin ac volutpat nisi, sed blandit ex. Sed ac ante dui. Nulla iaculis augue tortor, non vestibulum ante elementum vel.</p><p>Cras nec ultrices eros, in mattis diam. Praesent luctus commodo mi, in mattis ipsum tempor sed. Aliquam rutrum iaculis gravida. Praesent erat justo, molestie placerat ornare scelerisque, viverra at turpis. Etiam cursus eget sem et varius. Etiam et pretium magna, vitae consectetur ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dignissim vel nisi vitae dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi purus, aliquet vel odio nec, commodo dapibus turpis. Ut pellentesque ut leo non ultricies. Vivamus vel augue nec quam finibus hendrerit eget ut est.</p><p>Aenean sagittis eros dolor, id semper sapien feugiat eget. Phasellus imperdiet posuere tempor. Fusce sodales, odio non congue suscipit, ipsum lectus euismod mauris, ac posuere sem erat id risus. Aenean non sagittis metus. Sed placerat eros ut mauris molestie, ac hendrerit nulla vestibulum. Sed dignissim lorem id erat hendrerit, non mollis ligula interdum. Nulla pulvinar leo at justo malesuada dignissim. Nullam in viverra arcu, sed lobortis magna. Aliquam posuere blandit blandit.</p>",
  },
  {
    title: "Senior Javascript Developer (Remote)",
    employer: "Muszica Corporation",
    location: "Istanbul, Turkey (Remote)",
    time: "2 weeks ago",
    logo: "https://uilogos.co/img/logomark/muszica.png",
    description:
      "<p>Nullam imperdiet orci id eros posuere, a pulvinar metus lobortis. Pellentesque ut pellentesque justo. Morbi orci lorem, iaculis a semper vel, rhoncus ac mauris. Nulla facilisi. Fusce at eros ligula. Nulla eu velit ut velit dictum dapibus sit amet dignissim ante. Maecenas lacinia consequat ante a auctor. In malesuada tincidunt nunc ut tristique.</p><p>Donec eget aliquam ipsum, vitae posuere libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor, felis faucibus iaculis aliquam, nunc mi porttitor odio, quis ultrices nunc sem ut ligula. Vivamus finibus pretium lorem id tempus. Nullam nunc nisl, tristique eget lectus non, semper sodales ex. Donec ullamcorper auctor lacus a imperdiet. Ut sollicitudin accumsan nunc non varius. Praesent erat dolor, posuere in dapibus et, malesuada ut mi. Duis hendrerit sollicitudin congue. Nam sed condimentum nisl. Quisque eget facilisis lorem. Vestibulum a dui at sem aliquam lobortis. Integer tempus bibendum ante, sit amet bibendum augue sagittis vel.</p>",
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
            class="divide-y dark:divide-gray-700 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900"
          >
            <div
              v-for="job in availableJobs"
              :key="job.title"
              class="p-4 cursor-pointer"
              :class="[
                selectedJob?.title === job.title
                  ? 'bg-indigo-50 dark:bg-gray-900'
                  : 'hover:bg-gray-50 dark:hover:bg-[#233043]',
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
          <div>
            <div
              class="flex space-x-2.5 items-start border-b px-6 py-6 dark:border-gray-700"
            >
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
                </div>
                <div class="text-gray-500 text-xs">
                  {{ selectedJob.time }}
                </div>
              </div>
            </div>
            <!-- Job Description -->
            <div
              class="text-gray-500 dark:text-gray-400 text-sm p-6 space-y-6"
              v-html="selectedJob.description"
            ></div>
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
