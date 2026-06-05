<script setup lang="ts">
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
