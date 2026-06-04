<script setup lang="ts">
import { navigation } from "~/constants/navigation";

const route = useRoute();
const isActive = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(path);
};

const activeClass = "text-text underline underline-offset-8";
</script>

<template>
  <header
    class="font-heading bg-background/90 border-border sticky top-0 z-50 border-b py-6 backdrop-blur"
  >
    <div
      class="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4"
    >
      <NuxtLink to="/" class="text-text text-xl font-bold"
        >Damien Hensen.</NuxtLink
      >

      <nav class="flex items-center gap-8 font-medium">
        <NuxtLink
          v-for="navItem in navigation"
          :to="navItem.to"
          class="hover:text-text transition"
          :class="[isActive(navItem.to) && activeClass]"
          >{{ navItem.label }}</NuxtLink
        >

        <NuxtLink
          to="/"
          class="bg-text text-background flex items-center justify-center gap-2 rounded px-5 py-2"
        >
          <Icon name="mdi:github" class="text-lg" />
          GitHub</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>
