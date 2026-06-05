<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <section class="py-12">
    <div class="flex flex-col gap-16 lg:flex-row lg:gap-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-text font-heading text-2xl font-bold">
          {{ project.problem.title }}
        </h2>

        <p>
          {{ project.problem.text }}
        </p>

        <ul class="flex flex-col gap-2">
          <li
            class="flex items-center gap-2"
            v-for="problem in project.problem.points"
          >
            <Icon
              name="heroicons:exclamation-circle"
              class="text-xl text-red-400"
            />
            {{ problem }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-text font-heading text-2xl font-bold">
          {{ project.solution.title }}
        </h2>

        <p>
          {{ project.solution.text }}
        </p>

        <ul class="flex flex-col gap-2">
          <li
            class="flex items-center gap-2"
            v-for="solution in project.solution.points"
          >
            <Icon
              name="heroicons:check-circle"
              class="text-xl text-green-400"
            />
            {{ solution }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
