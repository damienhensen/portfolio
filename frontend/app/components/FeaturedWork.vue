<template>
  <section class="pt-24 pb-12 lg:py-12">
    <div class="mb-8 flex flex-col justify-between gap-4 lg:flex-row">
      <div class="flex flex-col">
        <h2 class="text-text font-heading mb-2 text-2xl font-bold">
          Featured Work
        </h2>
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
      <div class="grid gap-4 md:grid-cols-2">
        <SecondaryProjectCard />
        <SecondaryProjectCard />
      </div>
    </div>
  </section>
</template>
