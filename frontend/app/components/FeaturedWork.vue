<template>
  <section class="my-12">
    <div class="flex flex-col gap-4 lg:flex-row justify-between mb-8">
      <div class="flex flex-col">
        <h2 class="text-text font-heading text-2xl font-bold">Featured Work</h2>
        <p>Some of the projects I'm most proud of.</p>
      </div>
      <NuxtLink
        to="/projects"
        class="hover:text-text flex items-center gap-2 self-end font-medium uppercase transition-all"
        >View all projects <Icon name="heroicons:arrow-right" class="text-lg"
      /></NuxtLink>
    </div>

    <div class="flex flex-col gap-4">
      <PrimaryProjectCard />
      <div class="grid md:grid-cols-2 gap-4">
          <SecondaryProjectCard />
          <SecondaryProjectCard />
      </div>
    </div>
  </section>
</template>
