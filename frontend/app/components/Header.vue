<template>
  <header class="font-heading border-border border-b py-6">
    <div
      class="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4"
    >
      <NuxtLink to="/" class="text-text text-xl font-bold"
        >Damien Hensen.</NuxtLink
      >

      <button
        @click="toggleNav"
        class="flex cursor-pointer items-center justify-center md:hidden"
      >
        <Icon v-if="navOpen" name="heroicons:x-mark" class="text-2xl" />
        <Icon v-else name="heroicons:bars-3" class="text-2xl" />
      </button>

      <nav
        :class="[
          {
            'translate-x-0': navOpen,
            'translate-x-full': !navOpen,
          },
          'border-border bg-background absolute inset-x-0 top-[calc(100%_+_1.5rem_+_1px)] z-50 ml-auto flex w-full flex-col justify-between gap-8 border-b px-4 py-6 text-lg font-medium transition-all md:static md:top-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:border-b-0 md:px-0 md:py-0 md:text-base md:transition-none',
        ]"
      >
        <NuxtLink
          @click="navOpen = false"
          to="/"
          class="hover:text-text transition"
          >Home</NuxtLink
        >
        <NuxtLink to="/" class="hover:text-text transition">Projects</NuxtLink>
        <NuxtLink
          @click="navOpen = false"
          to="/"
          class="hover:text-text transition"
          >Blog</NuxtLink
        >
        <NuxtLink
          @click="navOpen = false"
          to="/"
          class="hover:text-text transition"
          >About</NuxtLink
        >

        <NuxtLink
          @click="navOpen = false"
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

<script setup lang="ts">
const navOpen = ref<boolean>(false);

const toggleNav = (): void => {
  navOpen.value = !navOpen.value;
};
</script>
