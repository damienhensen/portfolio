<script setup lang="ts">
const props = defineProps<{
  tag: string;
  tiny?: boolean;
  active?: boolean;
}>();
</script>

<template>
  <span
    :class="[
      'bg-surface border-border border px-3 py-1',
      { 'text-xs': tiny, 'bg-text text-background border-text': active },
    ]"
    >{{ tag }}</span
  >
</template>
