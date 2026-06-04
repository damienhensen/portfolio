<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-4 text-2xl font-bold">
      Technical Decisions & Challenges
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div
        class="bg-surface border-border mx-auto flex flex-col rounded border lg:flex-row"
      >
        <div class="px-4 py-8 md:pr-4 md:pl-8">
          <h2 class="text-text font-heading mb-2 text-2xl font-bold">
            JWT Authentication
          </h2>
          <div class="flex flex-col gap-2">
            <p>
              I used stateless JWT authentication to keep the API simple and
              suitable for frontend/backend separation.
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-surface border-border mx-auto flex flex-col rounded border lg:flex-row"
      >
        <div class="px-4 py-8 md:pr-4 md:pl-8">
          <h2 class="text-text font-heading mb-2 text-2xl font-bold">
            Docker Deployment
          </h2>
          <div class="flex flex-col gap-2">
            <p>
              The project was deployed using separate frontend, backend, and
              database containers.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-surface border-border md:col-span-2 flex flex-col rounded border lg:flex-row"
      >
        <div class="px-4 py-8 md:pr-4 md:pl-8">
          <h2 class="text-text font-heading mb-2 text-2xl font-bold">
            Challenges
          </h2>
          <div class="flex flex-col gap-2">
            <p>
              Uploaded images needed to be protected while still remaining easy
              to display in the frontend.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
