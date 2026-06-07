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
      :width="project.cover.type === 'mobile' ? 323 : 1244"
      :height="700"
      :sizes="
        project.cover.type === 'mobile'
          ? '323px'
          : '(max-width: 768px) 100vw, 1244px'
      "
      fetchpriority="high"
      class="max-h-175 w-auto"
      format="webp"
    />
  </div>
</template>
