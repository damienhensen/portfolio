<template>
  <ProjectHero />
  <ProjectImage />
  <ProjectProblemAndSolution />
  <ProjectArchitecture />
  <ProjectScreenshots :images="screenshots" />
  <ProjectTechnicalAnalysis />
  <ProjectLessons />
  <AboutMe />
  <ContactCTA />
</template>

<script setup lang="ts">
import type { Screenshot } from "~/types/Screenshot";

const screenshots: Screenshot[] = [
  {
    src: "/images/projects/fixmycity/dashboard.png",
    alt: "FixMyCity dashboard",
  },
  { src: "/images/projects/fixmycity/map.png", alt: "FixMyCity map view" },
  {
    src: "/images/projects/fixmycity/profile.png",
    alt: "FixMyCity profile page",
  },
];
</script>
