<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <div
    class="border-border bg-surface flex flex-col rounded border md:flex-row group"
  >
    <div class="order-2 flex-1 p-8 md:order-1">
      <Tag :tag="project?.type" :tiny="true" />
      <h3 class="text-text font-heading my-2 text-2xl font-bold">
        {{ project?.title }}
      </h3>
      <p class="mb-4 line-clamp-3">{{ project?.description }}</p>
      <div class="mb-6 flex flex-wrap gap-2">
        <Tag v-for="tag in project?.tags" :key="tag" :tag="tag" />
      </div>
      <div class="flex">
        <NuxtLink
          :to="project?.path"
          class="bg-text text-background border-text block border-2 px-12 py-4 font-medium"
          >View Details</NuxtLink
        >
      </div>
    </div>
    <div
      class="relative order-1 h-60 overflow-hidden md:order-2 md:h-auto md:w-2/5 rounded-r"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${project.cover.src})` }"
      />

      <div class="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition" />
    </div>
  </div>
</template>
