<script setup lang="ts">
const route = useRoute();

useHead({
  link: [
    {
      rel: "canonical",
      href: `https://damienhensen.nl${route.path}`,
    },
  ],
});

useSeoMeta({
  title: "Blog | Damien Hensen",
  description:
    "Read articles about software engineering, web development, Linux, Docker, personal projects, and the lessons learned while building them.",
  ogTitle: "Blog | Damien Hensen",
  ogDescription:
    "Technical articles, development notes, and insights from real software engineering projects.",
  ogType: "website",
  ogUrl: `https://damienhensen.nl${route.path}`,
  twitterCard: "summary_large_image",
});

// Blog data
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
