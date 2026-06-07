<template>
  <section class="py-12">
    <div class="border-border flex border-y py-8">
      <div
        class="bg-surface border-border mx-auto flex flex-col items-center gap-4 rounded border lg:flex-row lg:gap-12"
      >
        <img
          src="/images/damien.jpg"
          alt="Damien Hensen"
          class="bg-background mt-8 w-70 shrink-0 rounded-l rounded-r-full object-cover lg:m-4"
        />
        <div class="max-w-2xl p-8">
          <h2 class="text-text font-heading mb-2 text-2xl font-bold">
            A Bit About Me
          </h2>
          <div class="mb-4 flex flex-col gap-2">
            <p>
              Outside of software development, I enjoy gaming, anime, and
              working on personal projects that help me learn something new.
            </p>

            <p>
              Whether it's building applications, automating workflows, or
              experimenting with new technologies, I enjoy creating things and
              understanding how they work.
            </p>
          </div>
          <div class="flex">
            <NuxtLink
              to="/about/"
              class="bg-text text-background border-text block border-2 px-8 py-3 font-medium"
              >Learn more about me</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
