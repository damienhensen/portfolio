<template>
  <div
    class="border-border bg-surface flex flex-col rounded border md:flex-row"
  >
    <div class="order-2 flex-1 p-8 md:order-1">
      <span class="font-heading text-xs font-medium uppercase"
        >Full-stack Application</span
      >
      <h3 class="text-text font-heading mb-2 text-2xl font-bold">FixMyCity</h3>
      <p class="mb-4">
        A full-stack issue reporting platform for reporting public space
        problems, managing issue statuses, and handling user notifications.
      </p>
      <div class="mb-6 flex flex-wrap gap-2">
        <span class="bg-surface border-border border px-3 py-1"
          >Spring Boot</span
        >
        <span class="bg-surface border-border border px-3 py-1">Vue</span>
        <span class="bg-surface border-border border px-3 py-1">Docker</span>
        <span class="bg-surface border-border border px-3 py-1">MySQL</span>
        <span class="bg-surface border-border border px-3 py-1">JWT</span>
      </div>
      <div class="flex">
        <NuxtLink
          to="/projects/project"
          class="bg-text text-background border-text block border-2 px-12 py-4 font-medium"
          >View Details</NuxtLink
        >
      </div>
    </div>
    <div
      class="bg-background order-1 h-60 md:order-2 md:h-auto md:w-9/20"
    ></div>
  </div>
</template>
