<script setup lang="ts">
import type { JourneyItem } from "~/types/JourneyItem";

const journey: JourneyItem[] = [
  {
    year: "2017",
    title: "Started MBO Application & Media Development",
    description:
      "Originally planned to become a game developer, but switched to web development after learning more about the industry.",
  },
  {
    year: "2020",
    title: "First Internship at 80sInteractive",
    description:
      "Worked on a website builder using Laravel and jQuery UI and gained my first professional development experience.",
  },
  {
    year: "2020",
    title: "Front-end Internship at Brick Zero",
    description:
      "Worked with WordPress, maintained websites, and built custom blocks using HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "Graduated from MBO",
    description:
      "Completed the Application & Media Development program and started working professionally as a developer.",
  },
  {
    year: "2021",
    title: "Briefly Studied Physiotherapy",
    description:
      "Tried a completely different career path before deciding software development was the better fit.",
  },
  {
    year: "2022",
    title: "Started HBO Software Engineering",
    description:
      "Returned to software and began the Software Engineering program at the Amsterdam University of Applied Sciences.",
  },
  {
    year: "2022",
    title: "Full-Stack Developer at 80sInteractive",
    description:
      "Worked on webshops, e-learning platforms, tax systems, and deployment automation using Laravel and Nuxt.",
  },
  {
    year: "2025",
    title: "Russian Minor",
    description:
      "Took a detour into a Russian minor before returning to finish the Software Engineering program.",
  },
  {
    year: "2026",
    title: "Final Year of HBO Software Engineering",
    description:
      "Currently focused on completing my degree, building personal projects, and preparing for the next step in my software engineering career.",
  },
];
</script>

<template>
  <section class="border-border border-y py-12">
    <h2 class="text-text font-heading mb-8 text-2xl font-bold">The Journey</h2>

    <div class="relative">
      <!-- Desktop center line -->
      <div
        class="bg-border absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 lg:block"
      />

      <!-- Mobile left line -->
      <div class="bg-border absolute top-0 bottom-0 left-2 w-px lg:hidden" />

      <JourneyItem
        v-for="(item, index) in journey"
        :key="item.title"
        :item="item"
        :index="index"
        :isLast="index === journey.length - 1"
      />
    </div>
  </section>
</template>
