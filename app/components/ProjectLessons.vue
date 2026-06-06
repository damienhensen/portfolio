<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-4 text-2xl font-bold">
      {{ project.lessons.title }}
    </h2>

    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="lesson in project.lessons.items"
        class="bg-surface border-border mx-auto flex flex-col rounded border lg:flex-row"
      >
        <div class="px-4 py-8 md:pr-4 md:pl-8">
          <h2 class="text-text font-heading mb-2 text-2xl font-bold">
            {{ lesson.title }}
          </h2>
          <div class="flex flex-col gap-2">
            <p>
              {{ lesson.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
