<script setup lang="ts">
import { navigation } from "~/constants/navigation";

const open = ref(false);

const openMenu = () => {
  open.value = true;
};

const closeMenu = () => {
  open.value = false;
};

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
    class="font-heading bg-background/90 sticky top-0 z-50 backdrop-blur md:hidden"
  >
    <div
      class="border-border mx-auto flex w-full max-w-7xl items-center justify-between border-b px-4 py-5"
    >
      <NuxtLink to="/" class="text-text text-xl font-bold">
        Damien Hensen.
      </NuxtLink>

      <button
        class="text-text cursor-pointer text-2xl"
        aria-label="Open navigation"
        @click="openMenu"
      >
        <Icon name="heroicons:bars-3" />
      </button>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        @click="closeMenu"
      />
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="open"
        class="bg-background fixed top-0 right-0 z-60 flex h-dvh w-full flex-col"
      >
        <div
          class="border-border flex shrink-0 items-center justify-between border-b px-4 py-5"
        >
          <NuxtLink
            to="/"
            class="text-text text-xl font-bold"
            @click="closeMenu"
          >
            Damien Hensen.
          </NuxtLink>

          <button
            class="text-text cursor-pointer text-2xl"
            aria-label="Close navigation"
            @click="closeMenu"
          >
            <Icon name="heroicons:x-mark" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto">
          <nav class="flex flex-col gap-7 px-4 py-5 text-2xl font-semibold">
            <NuxtLink
              v-for="navItem in navigation"
              :key="navItem.to"
              :to="navItem.to"
              class="hover:text-text transition"
              :class="[isActive(navItem.to) && activeClass]"
              @click="closeMenu"
            >
              {{ navItem.label }}
            </NuxtLink>
          </nav>
        </div>

        <div class="shrink-0 px-4 py-5">
          <NuxtLink
            to="/"
            class="bg-text text-background mt-auto flex items-center justify-center gap-2 rounded px-5 py-3 font-semibold"
            @click="closeMenu"
          >
            <Icon name="mdi:github" class="text-lg" />
            GitHub
          </NuxtLink>
        </div>
      </aside>
    </Transition>
  </header>
</template>
