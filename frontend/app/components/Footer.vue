<template>
  <footer class="font-heading border-border border-t px-4 py-6">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between">
      <nuxt-link to="/" class="text-text text-xl font-bold"
        >Damien Hensen.</nuxt-link
      >

      <p>&copy; {{ new Date().getFullYear() }} - Damien Hensen</p>

      <nav class="flex items-center justify-between gap-4">
        <nuxt-link to="/" class="hover:text-text transition"
          >LinkedIn</nuxt-link
        >
        <nuxt-link to="/" class="hover:text-text transition">GitHub</nuxt-link>
        <nuxt-link to="/" class="hover:text-text transition">RSS</nuxt-link>
      </nav>
    </div>
  </footer>
</template>
i
