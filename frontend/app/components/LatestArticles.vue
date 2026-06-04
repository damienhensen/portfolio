<script setup lang="ts">
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryCollection("blog").order("date", "DESC").limit(3).all(),
);
</script>

<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-4 text-2xl font-bold">
      Latest Articles
    </h2>

    <div class="flex flex-col gap-6">
      <LatestArticle v-for="post in posts" :key="post.path" :post="post" />
    </div>
  </section>
</template>
