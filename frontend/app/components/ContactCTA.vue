<template>
  <section class="pt-12 pb-24">
    <h2 class="text-text font-heading mb-12 text-center text-5xl font-bold">
      Let's connect.
    </h2>

    <div
      class="flex flex-col items-center justify-center gap-12 text-lg uppercase sm:flex-row"
    >
      <NuxtLink to="/" class="hover:text-text flex items-center gap-1"
        ><Icon name="mdi:github" class="text-lg" />
        <span>GitHub</span></NuxtLink
      >
      <NuxtLink to="/" class="hover:text-text flex items-center gap-1"
        ><Icon name="mdi:linkedin" class="text-lg" />
        <span>LinkedIn</span></NuxtLink
      >
      <NuxtLink to="/" class="hover:text-text flex items-center gap-1"
        ><Icon name="heroicons-solid:envelope" class="text-lg" />
        <span>E-mail</span></NuxtLink
      >
    </div>
  </section>
</template>
