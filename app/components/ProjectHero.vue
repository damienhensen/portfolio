<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <section class="py-12 lg:pt-24">
    <div
      class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
    >
      <div class="max-w-3xl">
        <div class="mb-4 flex flex-wrap gap-2 text-xs">
          <Tag v-for="tag in project?.tags" :key="tag" :tag="tag" />
        </div>

        <h1
          class="text-text font-heading text-2xl font-bold md:text-3xl lg:text-4xl"
        >
          {{ project.title }}
        </h1>

        <p class="mt-4 max-w-2xl">{{ project.description }}</p>
      </div>

      <div
        class="flex flex-col gap-4 text-center uppercase sm:flex-row lg:shrink-0"
        v-if="project.demo?.live || project.demo?.source"
      >
        <NuxtLink
          v-if="project.demo?.live"
          :to="project.demo.live"
          target="_blank"
          class="bg-text text-background border-text flex items-center justify-center gap-2 border-2 px-8 py-4 font-medium"
        >
          <Icon name="heroicons:arrow-top-right-on-square" class="text-lg" />
          Live Demo
        </NuxtLink>

        <NuxtLink
          v-if="project.demo?.source"
          :to="project.demo.source"
          target="_blank"
          class="bg-background text-text border-border hover:border-border-hover flex items-center justify-center gap-2 border-2 px-8 py-4 font-medium transition"
        >
          <Icon name="mdi:github" class="text-lg" />
          Source Code
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
