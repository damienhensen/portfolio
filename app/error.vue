<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

clearError;
</script>

<template>
  <main
    class="bg-background text-text container flex min-h-screen items-center justify-center py-24"
  >
    <div class="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
      <p class="font-heading text-xs font-medium uppercase">
        Error {{ error.status }}
      </p>

      <h1 class="mt-3 text-5xl font-bold">Page not found</h1>

      <p class="text-muted-foreground mt-6 max-w-xl">
        The page you're looking for doesn't exist, may have been moved, or the
        URL may be incorrect.
      </p>

      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <NuxtLink to="/"> Home </NuxtLink>

        <NuxtLink to="/projects/"> View Projects </NuxtLink>

        <NuxtLink to="/blog/"> Read Blog </NuxtLink>
      </div>
    </div>
  </main>
</template>
