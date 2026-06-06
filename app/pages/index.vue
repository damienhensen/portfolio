<script setup lang="ts">
useHead({
  link: [
    {
      rel: "canonical",
      href: `https://damienhensen.nl`,
    },
  ],
});

useSeoMeta({
  title: "Damien Hensen | Software Engineer",
  description:
    "Software engineering student and full-stack developer specializing in Laravel, Nuxt, Docker, Linux, and modern web applications.",
  ogTitle: "Damien Hensen | Software Engineer",
  ogDescription:
    "Portfolio showcasing full-stack projects, technical articles, and software engineering experience.",
  ogType: "website",
  ogUrl: "https://damienhensen.nl",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Hero />
  <Facts />
  <FeaturedWork />
  <TechStack />
  <div class="flex flex-col lg:flex-row lg:gap-10">
    <WorkHistory class="flex-1" />
    <LatestArticles class="w-full lg:w-1/3" />
  </div>
  <AboutMe />
  <ContactCTA />
</template>
