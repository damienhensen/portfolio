<script setup lang="ts">
import type { Collections } from "@nuxt/content";

defineProps<{
  posts: Collections["blog"][];
}>();
</script>

<template>
  <section class="pb-12">
    <div class="grid flex-col gap-4 sm:grid-cols-2 md:flex">
      <BlogItem v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </section>
</template>
