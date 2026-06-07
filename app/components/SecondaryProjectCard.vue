<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <div class="border-border bg-surface group flex flex-col rounded border">
    <div class="relative h-60 overflow-hidden rounded-t">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${project.cover.src})` }"
      />

      <div
        class="bg-background/30 group-hover:bg-background/10 absolute inset-0 transition"
      />
    </div>
    <div class="flex flex-1 flex-col p-8">
      <Tag :tag="project?.type" :tiny="true" class="mr-auto" />
      <h3 class="text-text font-heading my-2 text-2xl font-bold">
        {{ project.title }}
      </h3>
      <p class="mb-4 line-clamp-3">
        {{ project.description }}
      </p>
      <div class="mb-6 flex flex-wrap gap-2">
        <Tag v-for="tag in project?.tags" :key="tag" :tag="tag" />
      </div>

      <NuxtLink
        :to="`${project.path}/`"
        class="bg-text text-background border-text mt-auto mr-auto block border-2 px-12 py-4 font-medium"
        >View Details</NuxtLink
      >
    </div>
  </div>
</template>
