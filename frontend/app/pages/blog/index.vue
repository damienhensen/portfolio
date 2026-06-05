<script setup lang="ts">
const activeTags = ref<string[]>([]);

const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog").order("date", "DESC").all(),
);

const tags = computed(() => {
  const allTags = posts.value?.flatMap((post) => post.tags ?? []) ?? [];
  return [...new Set(allTags)].sort();
});

const filteredPosts = computed(() => {
  const all = posts.value ?? [];

  if (!activeTags.value.length) return all;

  return all.filter((post) =>
    post.tags?.some((tag) => activeTags.value.includes(tag)),
  );
});
</script>

<template>
  <BlogsHero />
  <Filters v-model:activeTags="activeTags" :tags="tags" />
  <BlogsList :posts="filteredPosts" />
  <AboutMe />
  <ContactCTA />
</template>
