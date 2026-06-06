<script setup lang="ts">
import type { Experience } from "~/types/Experience";

defineProps<{
  experience: Experience;
  isFirst?: boolean;
  isLast?: boolean;
}>();
</script>

<template>
  <div class="flex gap-6">
    <div class="border-border relative border-r">
      <div
        :class="[
          { 'bg-text': isFirst, 'bg-text-muted': !isFirst },
          'absolute top-0 left-1/2 -translate-x-1/2 rounded-full p-1.5',
        ]"
      ></div>
    </div>
    <div
      :class="[{ 'pb-5': !isLast, 'pb-2': isLast }, '-mt-0.75 flex-1 md:-mt-1']"
    >
      <div class="font-heading mb-2 flex justify-between">
        <div class="flex flex-col gap-0.5">
          <span class="text-sm md:hidden"
            >{{ experience.start }} - {{ experience.end }}</span
          >
          <h3 class="text-text text-lg font-bold md:text-base">
            {{ experience.role }}
          </h3>
          <span class="md:hidden">{{ experience.company }}</span>
        </div>

        <div class="hidden gap-2 md:flex">
          <span>{{ experience.company }}</span>
          <span>/</span>
          <span>{{ experience.start }} - {{ experience.end }}</span>
        </div>
      </div>

      <p>
        {{ experience.description }}
      </p>
    </div>
  </div>
</template>
