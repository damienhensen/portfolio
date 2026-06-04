<template>
  <NuxtLink
    to="/blog/item"
    class="border-border bg-surface rounded border p-8 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0 md:py-12"
  >
    <article
      class="flex flex-col justify-between gap-4 md:flex-row md:items-start md:gap-12"
    >
      <div class="flex justify-between">
        <p>Nov 24, 2024</p>
        <p class="flex items-center gap-1 md:hidden">
          <Icon name="heroicons:clock" />
          <span>12 min read</span>
        </p>
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <h2 class="text-text font-heading text-xl font-medium">
          Building My Portfolio with Nuxt Content
        </h2>
        <span
          class="bg-background border-border mr-auto border px-3 py-1 text-xs md:hidden"
          >Nuxt</span
        >
        <p class="line-clamp-3 md:line-clamp-none">
          A quaint little story on how I made my portfolio using Nuxt Content.
        </p>
        <p class="hidden items-center gap-1 md:flex">
          <Icon name="heroicons:clock" />
          <span class="text-sm">12 min read</span>
        </p>
      </div>
      <span class="bg-background border-border hidden border px-3 py-1 md:block"
        >Nuxt</span
      >
    </article>
  </NuxtLink>
</template>
