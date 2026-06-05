<script setup lang="ts">
import type { Collections } from "@nuxt/content";

defineProps<{
  featuredProject?: Collections["projects"];
  projects: Collections["projects"][];
}>();
</script>

<template>
  <section class="pt-18 pb-12 lg:pt-6">
    <div class="flex flex-col gap-4">
      <PrimaryProjectCard v-if="featuredProject" :project="featuredProject" />
      <div class="grid gap-4 md:grid-cols-2" v-if="projects?.length">
        <SecondaryProjectCard v-for="project in projects" :project="project" />
      </div>
    </div>
  </section>
</template>
