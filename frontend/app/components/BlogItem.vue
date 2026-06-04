<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type BlogCollectionItem = Collections["blog"];

const props = defineProps<{ post: BlogCollectionItem }>();

const formattedDate = computed(() => formatDate(props.post.date));

const readingTime = computed(() =>
  calculateReadingTime(JSON.stringify(props.post.body)),
);
</script>

<template>
  <NuxtLink
    :to="post.path"
    class="border-border bg-surface rounded border p-8 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0 md:py-12"
  >
    <article
      class="flex flex-col justify-between gap-4 md:flex-row md:items-start md:gap-12"
    >
      <div class="flex justify-between">
        <p>{{ formattedDate }}</p>
        <p class="flex items-center gap-1 md:hidden">
          <Icon name="heroicons:clock" />
          <span>{{ readingTime }} min read</span>
        </p>
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <h2 class="text-text font-heading text-xl font-medium">
          {{ post.title }}
        </h2>

        <div class="flex flex-wrap gap-2 md:hidden">
          <Tag v-for="tag in post.tags" :key="tag" :tag="tag" :tiny="true" />
        </div>

        <p class="line-clamp-3 md:line-clamp-none">
          {{ post.description }}
        </p>
        <p class="hidden items-center gap-1 md:flex">
          <Icon name="heroicons:clock" />
          <span class="text-sm">{{ readingTime }} min read</span>
        </p>
      </div>
      <div class="hidden flex-wrap gap-2 md:flex">
        <Tag v-for="tag in post.tags" :key="tag" :tag="tag" />
      </div>
    </article>
  </NuxtLink>
</template>
