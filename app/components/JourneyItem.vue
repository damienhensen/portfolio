<script setup lang="ts">
import type { JourneyItem } from "~/types/JourneyItem";

defineProps<{
  item: JourneyItem;
  index: number;
  isLast?: boolean;
}>();
</script>

<template>
  <div
    :class="[
      { 'pb-10': !isLast, 'pb-3': isLast },
      'relative grid gap-6 lg:grid-cols-[1fr_32px_1fr]',
    ]"
  >
    <!-- Mobile dot -->
    <div
      :class="[
        isLast ? 'bg-text' : 'bg-text-muted',
        'absolute top-1 left-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full lg:hidden',
      ]"
    />

    <!-- Left side desktop / content mobile -->
    <div
      :class="[
        'ml-8 lg:ml-0',
        index % 2 === 0 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-3',
      ]"
    >
      <span class="text-text font-heading text-sm font-bold">
        {{ item.year }}
      </span>

      <h3 class="text-text font-heading mt-1 text-lg font-bold">
        {{ item.title }}
      </h3>

      <p class="mt-2">
        {{ item.description }}
      </p>
    </div>

    <!-- Desktop dot column -->
    <div class="relative hidden lg:col-start-2 lg:block">
      <div
        :class="[
          isLast ? 'bg-text' : 'bg-text-muted',
          'absolute top-1 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full',
        ]"
      />
    </div>
  </div>
</template>
