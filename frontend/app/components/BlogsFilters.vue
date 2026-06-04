<script setup lang="ts">
const activeTags: Ref<string[]> = ref([]);

const toggleActiveTag = (tag: string) => {
  const index = activeTags.value.indexOf(tag);
  if (index != -1) {
    activeTags.value.splice(index, 1);
  } else {
    activeTags.value.push(tag);
  }

  // TODO: Emit tags?
};

const { data: posts } = await useAsyncData("blog-posts-all", () =>
  queryCollection("blog").all(),
);

const tags = computed(() => {
  const allTags = posts.value?.flatMap((post) => post.tags ?? []) ?? [];

  return [...new Set(allTags)].sort();
});
</script>

<template>
  <section class="pb-6">
    <div class="flex flex-wrap gap-2">
      <Tag
        tag="All Articles"
        :active="tags.length == activeTags.length || activeTags.length == 0"
        class="cursor-pointer"
      />
      <Tag
        @click="toggleActiveTag(tag)"
        v-for="tag in tags"
        :key="tag"
        :tag="tag"
        :active="activeTags.includes(tag)"
        class="cursor-pointer"
      />
    </div>
  </section>
</template>
