<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type ProjectsCollectionItem = Collections["projects"];

const props = defineProps<{ project: ProjectsCollectionItem }>();
</script>

<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-4 text-2xl font-bold">Architecture</h2>

    <div
      class="bg-surface border-border mx-auto flex flex-col rounded border lg:flex-row"
    >
      <div class="max-w-2xl px-4 py-8 md:pr-4 md:pl-8">
        <h2 class="text-text font-heading mb-2 text-2xl font-bold">
          {{ project.architecture.title }}
        </h2>
        <div class="mb-4 flex flex-col gap-2">
          <p>
            {{ project.architecture.description }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <Tag v-for="tag in project.architecture.tags" :key="tag" :tag="tag" />
        </div>
      </div>
      <div class="flex-1 px-4 py-8 md:pr-8 md:pl-4">
        <div class="bg-background p-4">
          <div class="border-border flex justify-between border-b pb-2">
            <span>{{ project.code?.filename }}</span>
            <button class="hover:text-text cursor-pointer transition-all">
              <Icon name="icon-park-outline:copy" class="text-xl" />
            </button>
          </div>
          <pre class="overflow-x-auto py-4">{{ project.code?.content }}</pre>
        </div>
      </div>
    </div>
  </section>
</template>
