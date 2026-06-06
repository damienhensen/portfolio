<script setup lang="ts">
const route = useRoute();

const { data: project } = await useAsyncData(() =>
  queryCollection("projects").path(route.path).first(),
);
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
