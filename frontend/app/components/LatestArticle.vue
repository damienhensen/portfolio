<script setup lang="ts">
import type { Collections } from "@nuxt/content";
type BlogCollectionItem = Collections["blog"];

const props = defineProps<{ post: BlogCollectionItem }>();

const formattedDate = computed(() => formatDate(props.post.date));
</script>

<template>
  <NuxtLink :to="post.path">
    <article class="flex flex-col gap-2">
      <div class="flex flex-col">
        <span class="font-heading font-medium uppercase">{{
          formattedDate
        }}</span>
        <h3 class="text-text text-lg font-bold">{{ post.title }}</h3>
      </div>
      <p class="line-clamp-2">
        {{ post.description }}
      </p>
    </article>
  </NuxtLink>
</template>
