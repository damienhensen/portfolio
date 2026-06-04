<template>
  <div class="border-border flex flex-col rounded border">
    <div class="bg-surface h-60"></div>
    <div class="p-8">
      <span class="font-heading text-xs font-medium uppercase"
        >Full-stack Application</span
      >
      <h3 class="text-text font-heading mb-2 text-2xl font-bold">FixMyCity</h3>
      <p class="mb-4">
        A full-stack issue reporting platform for reporting public space
        problems, managing issue statuses, and handling user notifications.
      </p>
      <div class="mb-6 flex gap-2 flex-wrap">
        <span class="bg-surface border-border rounded border px-3 py-1"
          >Spring Boot</span
        >
        <span class="bg-surface border-border rounded border px-3 py-1"
          >Vue</span
        >
        <span class="bg-surface border-border rounded border px-3 py-1"
          >Docker</span
        >
        <span class="bg-surface border-border rounded border px-3 py-1"
          >MySQL</span
        >
        <span class="bg-surface border-border rounded border px-3 py-1"
          >JWT</span
        >
      </div>
      <div class="flex">
        <NuxtLink
          to="/"
          class="bg-text text-background border-text block border-2 px-12 py-4 font-medium"
          >View Details</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
