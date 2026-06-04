<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog").order("date", "DESC").all(),
);
</script>

<template>
  <section class="pb-12">
    <div class="grid flex-col gap-4 sm:grid-cols-2 md:flex">
      <BlogItem v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </section>
</template>
