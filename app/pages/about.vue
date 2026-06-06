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
  title: "About | Damien Hensen",
  description:
    "Learn more about Damien Hensen, a software engineering student with professional experience building full-stack web applications using Laravel, Nuxt, Docker, and Linux.",
  ogTitle: "About | Damien Hensen",
  ogDescription:
    "Professional background, experience, education, and the journey behind the projects.",
  ogType: "profile",
  ogUrl: `https://damienhensen.nl${route.path}`,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <AboutHero />
  <TheJourney />
  <ContactCTA />
</template>
