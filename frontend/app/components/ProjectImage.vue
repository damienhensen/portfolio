<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <div class="border-border border-b pb-12">
    <img
      :src="project.cover.src"
      :alt="project.cover.alt"
      class="bg-surface aspect-video w-full"
    />
  </div>
</template>
