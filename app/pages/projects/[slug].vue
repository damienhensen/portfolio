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

// Project data
const contentPath = computed(() =>
  route.path !== "/" && route.path.endsWith("/")
    ? route.path.slice(0, -1)
    : route.path,
);

const { data: project } = await useAsyncData(
  `project-${contentPath.value}`,
  () => queryCollection("projects").path(contentPath.value).first(),
);

// SEO
useSeoMeta({
  title: `${project.value?.title} | Damien Hensen`,
  description: project.value?.description,

  ogTitle: project.value?.title,
  ogDescription: project.value?.description,
  ogType: "article",
  ogUrl: `https://damienhensen.nl${route.path}`,
  twitterCard: "summary_large_image",

  // Add if every project has a cover
  ogImage: project.value?.cover?.src
    ? `https://damienhensen.nl${project.value?.cover.src}`
    : undefined,
  twitterImage: project.value?.cover?.src
    ? `https://damienhensen.nl${project.value?.cover.src}`
    : undefined,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: project.value?.title,
        description: project.value?.description,
        codeRepository: project.value?.demo?.source,
        url: `https://damienhensen.nl${route.path}`,
        author: {
          "@type": "Person",
          name: "Damien Hensen",
          url: "https://damienhensen.nl/about"
        },
        programmingLanguage: project.value?.tags,
      }),
    },
  ],
});
</script>

<template>
  <div v-if="project">
    <ProjectHero :project="project" />
    <ProjectImage v-if="project.cover" :project="project" />
    <ProjectProblemAndSolution :project="project" />
    <ProjectArchitecture
      v-if="project.architecture || project.code"
      :project="project"
    />

    <ProjectScreenshots
      v-if="project.screenshots?.length"
      :images="project.screenshots"
    />

    <ProjectTechnicalAnalysis
      v-if="project.technicalAnalysis"
      :project="project"
    />
    <ProjectLessons v-if="project.technicalAnalysis" :project="project" />
    <AboutMe />
    <ContactCTA />
  </div>
</template>
