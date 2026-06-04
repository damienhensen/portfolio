<template>
  <section class="py-12 lg:pt-24">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-1 flex-col gap-6">
        <div class="flex flex-col gap-2">
          <p class="font-heading text-xs font-medium uppercase">
            Software Engineer
          </p>
          <h1 class="text-text font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
            Building reliable software from development to deployment.
          </h1>
        </div>
        <p>
          I'm Damien Hensen, a Software Engineering student with 4 years of
          professional development experience building web applications, APIs
          and deployment pipelines.
        </p>

        <div class="flex flex-col gap-4 text-center uppercase lg:flex-row">
          <NuxtLink
            to="/"
            class="bg-text text-background border-text border-2 px-12 py-4 font-medium"
            >View Projects</NuxtLink
          >
          <NuxtLink
            to="/"
            class="bg-background text-text border-border hover:border-border-hover border-2 px-12 py-4 font-medium transition"
            >About Me</NuxtLink
          >
        </div>
      </div>
      <div class="flex-1">

      </div>
    </div>
  </section>
</template>
