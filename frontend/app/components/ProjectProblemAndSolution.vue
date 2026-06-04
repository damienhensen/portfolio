<template>
  <section class="py-12">
    <div class="flex flex-col gap-16 lg:flex-row lg:gap-8">
      <div class="flex flex-col gap-4">
        <h2 class="text-text font-heading text-2xl font-bold">The Problem</h2>

        <p>
          Citizens need a simple way to report local issues and follow their
          progress without relying on slow or unclear communication channels.
        </p>

        <ul class="flex flex-col gap-2">
          <li class="flex items-center gap-2">
            <Icon
              name="heroicons:exclamation-circle"
              class="text-xl text-red-400"
            />Reporting public issues is often fragmented.
          </li>
          <li class="flex items-center gap-2">
            <Icon
              name="heroicons:exclamation-circle"
              class="text-xl text-red-400"
            />Status updates are not always easy to track.
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-text font-heading text-2xl font-bold">The Solution</h2>

        <p>
          FixMyCity provides a web platform where users can report issues,
          upload images, track statuses, and receive notifications.
        </p>

        <ul class="flex flex-col gap-2">
          <li class="flex items-center gap-2">
            <Icon
              name="heroicons:check-circle"
              class="text-xl text-green-400"
            />Reporting public issues is often fragmented.
          </li>
          <li class="flex items-center gap-2">
            <Icon
              name="heroicons:check-circle"
              class="text-xl text-green-400"
            />Status updates are not always easy to track.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
