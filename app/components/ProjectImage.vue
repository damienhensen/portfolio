<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <div
    class="border-border bg-surface flex justify-center overflow-hidden rounded-md border"
  >
    <NuxtImg
      :src="project.cover.src"
      :alt="project.cover.alt"
      class="max-h-175 w-auto"
      format="webp"
      loading="lazy"
    />
  </div>
</template>
