<template>
  <section class="py-12 lg:pt-24">
    <div class="flex flex-col gap-6 md:flex-row">
      <div class="flex flex-1 flex-col gap-6">
        <div class="flex flex-col gap-2">
          <p class="font-heading text-xs font-medium uppercase">All About</p>
          <h1
            class="text-text font-heading text-2xl font-bold md:text-3xl lg:text-4xl"
          >
            Damien Hensen
          </h1>
        </div>
        <p>I'm a Software Engineering student from the Netherlands.</p>
        <p>
          I've been interested in software since I was a kid. What started as an
          interest in game development eventually turned into web development,
          internships, professional work, and a bunch of side projects I'll
          probably never finish.
        </p>
        <p>
          Most of my time is spent building things, learning new technologies,
          and figuring out how systems work, whether that's a website, an API, a
          deployment pipeline, or something completely unrelated.
        </p>
      </div>
      <div class="flex-1">
        <NuxtImg
          src="/images/damien.jpg"
          class="bg-background border-border mx-auto shrink-0 rounded-lg border object-cover"
          alt="Damien Hensen"
          width="325"
          height="325"
          format="webp"
        />
      </div>
    </div>
  </section>
</template>
