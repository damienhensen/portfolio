<template>
  <footer class="font-heading border-border border-t py-6">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row"
    >
      <nuxt-link to="/" class="text-text text-xl font-bold"
        >Damien Hensen.</nuxt-link
      >

      <p>&copy; {{ new Date().getFullYear() }} - Damien Hensen</p>

      <nav class="flex items-center justify-between gap-4">
        <nuxt-link
          to="https://www.linkedin.com/in/damien-hensen/"
          target="_blank"
          class="hover:text-text transition"
          >LinkedIn</nuxt-link
        >
        <nuxt-link
          to="https://github.com/damienhensen"
          target="_blank"
          class="hover:text-text transition"
          >GitHub</nuxt-link
        >
        <nuxt-link
          to="/rss.xml"
          target="_blank"
          class="hover:text-text transition"
          >RSS</nuxt-link
        >
      </nav>
    </div>
  </footer>
</template>
i
