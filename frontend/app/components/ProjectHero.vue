<template>
  <section class="py-12 lg:pt-24">
    <div
      class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
    >
      <div class="max-w-3xl">
        <div class="mb-4 flex flex-wrap gap-2 text-xs">
          <span class="bg-surface border-border border px-3 py-1">Vue</span>
          <span class="bg-surface border-border border px-3 py-1"
            >Spring Boot</span
          >
          <span class="bg-surface border-border border px-3 py-1">S3</span>
        </div>

        <h1
          class="text-text font-heading text-2xl font-bold md:text-3xl lg:text-4xl"
        >
          FixMyCity
        </h1>

        <p class="mt-4 max-w-2xl">
          FixMyCity is a full-stack issue reporting platform that allows
          citizens to report public space problems, upload images, track issue
          progress, and receive status updates. The platform includes role-based
          administration, interactive maps, secure image storage, email
          notifications, and a REST API built with Spring Boot.
        </p>
      </div>

      <div
        class="flex flex-col gap-4 text-center uppercase sm:flex-row lg:shrink-0"
      >
        <NuxtLink
          to="/"
          class="bg-text text-background border-text flex items-center justify-center gap-2 border-2 px-8 py-4 font-medium"
        >
          <Icon name="heroicons:arrow-top-right-on-square" class="text-lg" />
          Live Demo
        </NuxtLink>

        <NuxtLink
          to="/"
          class="bg-background text-text border-border hover:border-border-hover flex items-center justify-center gap-2 border-2 px-8 py-4 font-medium transition"
        >
          <Icon name="mdi:github" class="text-lg" />
          Source Code
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
