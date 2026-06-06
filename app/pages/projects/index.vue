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
  title: "Projects | Damien Hensen",
  description:
    "Browse a collection of full-stack software engineering projects built with technologies such as Laravel, Nuxt, Spring Boot, Docker, MySQL, and more.",
  ogTitle: "Projects | Damien Hensen",
  ogDescription:
    "Explore portfolio projects covering web development, backend systems, deployment, and software architecture.",
  ogType: "website",
  ogUrl: `https://damienhensen.nl${route.path}`,
  twitterCard: "summary_large_image",
});

// Projects data
const activeTags = ref<string[]>([]);

const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").all(),
);

const tags = computed(() => {
  const allTags =
    projects.value?.flatMap((project) => project.tags ?? []) ?? [];
  return [...new Set(allTags)].sort();
});

const filteredProjects = computed(() => {
  const all = projects.value ?? [];

  if (!activeTags.value.length) return all;

  return all.filter((project) =>
    project.tags?.some((tag) => activeTags.value.includes(tag)),
  );
});

const featuredProject = computed(() =>
  filteredProjects.value.find((project) => project.featured),
);

const normalProjects = computed(() =>
  filteredProjects.value.filter((project) => !project.featured),
);
</script>

<template>
  <ProjectsHero />
  <Filters v-model:activeTags="activeTags" :tags="tags" />
  <ProjectsList :featuredProject="featuredProject" :projects="normalProjects" />
  <AboutMe />
  <ContactCTA />
</template>
