<script setup lang="ts">
import type { Experience } from "~/types/Experience";

const experiences: Experience[] = [
  {
    company: "80sInteractive",
    role: "Full-stack Developer",
    start: "Sep 2022",
    end: "Feb 2026",
    description:
      "Worked on client projects ranging from webshops and e-learning platforms to tax systems and invoice automation solutions. Developed features using Laravel, Nuxt, and Magento, and helped automate server deployment and configuration using Ansible.",
  },
  {
    company: "Brick Zero",
    role: "Front-End Developer Intern",
    start: "Oct 2020",
    end: "Mar 2021",
    description:
      "Built custom WordPress components and maintained client websites using HTML, CSS, and JavaScript.",
  },
  {
    company: "80sInteractive",
    role: "Full-stack Developer Intern",
    start: "Feb 2020",
    end: "Aug 2020",
    description:
      "Developed a website builder using Laravel and jQuery UI, gaining practical experience in full-stack web development.",
  },
];
</script>

<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-8 text-2xl font-bold">Work History</h2>

    <div class="flex flex-col">
      <ExperienceItem
        v-for="(experience, idx) in experiences"
        :experience="experience"
        :isFirst="idx == 0"
        :isLast="experiences.length - 1 == idx"
      />
    </div>
  </section>
</template>
