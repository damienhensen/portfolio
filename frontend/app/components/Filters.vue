<script setup lang="ts">
const props = defineProps<{
  tags: string[];
  activeTags: string[];
}>();

const emit = defineEmits<{
  "update:activeTags": [tags: string[]];
}>();

const toggleActiveTag = (tag: string) => {
  const updated = props.activeTags.includes(tag)
    ? props.activeTags.filter((t) => t !== tag)
    : [...props.activeTags, tag];

  emit("update:activeTags", updated);
};

const clearTags = () => {
  emit("update:activeTags", []);
};
</script>

<template>
  <section class="pb-6">
    <div class="flex flex-wrap gap-2">
      <Tag
        tag="All"
        :active="activeTags.length === 0"
        class="cursor-pointer"
        @click="clearTags"
      />

      <Tag
        v-for="tag in tags"
        :key="tag"
        :tag="tag"
        :active="activeTags.includes(tag)"
        class="cursor-pointer"
        @click="toggleActiveTag(tag)"
      />
    </div>
  </section>
</template>
