<script setup lang="ts">
const route = useRoute();

useHead({
  link: [
    {
      rel: "canonical",
      href: `https://damienhensen.nl${route.path}`,
    },
  ],
});

// Blog data
const contentPath = computed(() =>
  route.path !== "/" && route.path.endsWith("/")
    ? route.path.slice(0, -1)
    : route.path,
);

const { data: post } = await useAsyncData(`blog-${contentPath.value}`, () =>
  queryCollection("blog").path(contentPath.value).first(),
);

if (!post.value) {
  throw createError({
    status: 404,
    statusText: "Page Not Found",
  });
}

const formattedDate = computed(() => formatDate(post.value?.date ?? ""));

const readingTime = computed(() =>
  calculateReadingTime(JSON.stringify(post.value?.body)),
);

const activeHeading = ref<string>("introduction");

let observer: IntersectionObserver | null = null;

onMounted(async () => {
  await nextTick();

  const headings = Array.from(
    document.querySelectorAll<HTMLElement>(
      "h1[id], .content h2[id], .content h3[id]",
    ),
  );

  if (!headings.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]) {
        activeHeading.value = visible[0].target.id;
      }
    },
    {
      root: null,
      rootMargin: "-90px 0px -75% 0px",
      threshold: 0,
    },
  );

  headings.forEach((heading) => observer?.observe(heading));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

// SEO
useSeoMeta({
  title: `${post.value?.title} | Damien Hensen`,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description,
  ogType: "article",
  ogUrl: `https://damienhensen.nl${route.path}`,
  twitterCard: "summary_large_image",

  // TODO: Add these once you have cover images
  // ogImage: `https://damienhensen.nl${post.value.cover.src}`,
  // twitterImage: `https://damienhensen.nl${post.value.cover.src}`,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.value?.title,
        description: post.value?.description,
        datePublished: post.value?.date,
        dateModified: post.value?.updated ?? post.value?.date,
        author: {
          "@type": "Person",
          name: "Damien Hensen",
          url: "https://damienhensen.nl/about/",
        },
        mainEntityOfPage: `https://damienhensen.nl${route.path}`,
      }),
    },
  ],
});
</script>

<template>
  <div class="grid py-12 lg:grid-cols-12 lg:pt-24">
    <details class="border-border bg-surface mb-8 border p-4 lg:hidden">
      <summary
        class="text-text font-heading cursor-pointer text-sm font-medium uppercase"
      >
        Contents
      </summary>

      <nav class="mt-4 flex flex-col gap-2">
        <a href="#introduction" class="border-border border-l pl-4 text-sm">
          Introduction
        </a>

        <a
          v-for="link in post?.body?.toc?.links"
          :key="link.id"
          :href="`#${link.id}`"
          class="border-border border-l pl-4 text-sm"
        >
          {{ link.text }}
        </a>
      </nav>
    </details>

    <aside class="hidden lg:col-span-3 lg:block">
      <div class="sticky top-30">
        <h2 class="font-heading mb-4 font-medium uppercase">Contents</h2>

        <div class="flex flex-col">
          <a
            @click="activeHeading = 'introduction'"
            href="#introduction"
            class="py-2 pl-4"
            :class="
              activeHeading === 'introduction'
                ? 'border-text text-text border-l-3'
                : 'border-border border-l'
            "
          >
            Introduction
          </a>
          <a
            v-for="link in post?.body.toc?.links"
            @click="activeHeading = link.id"
            :key="link.id"
            :href="`#${link.id}`"
            class="py-2 pl-4"
            :class="
              activeHeading === link.id
                ? 'border-text text-text border-l-3'
                : 'border-border border-l'
            "
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </aside>
    <article class="lg:col-span-9">
      <div class="flex flex-col gap-4">
        <div>
          <span class="bg-surface border-border border px-3 py-1">Nuxt</span>
        </div>
        <h1
          class="text-text font-heading text-2xl font-bold md:text-3xl lg:text-4xl"
          id="introduction"
        >
          <a href="#introduction">{{ post?.title }}</a>
        </h1>

        <p>{{ post?.description }}</p>

        <div class="flex gap-2">
          <p>{{ formattedDate }}</p>
          <span>&bullet;</span>
          <p>{{ readingTime }} min read</p>
        </div>

        <ContentRenderer :value="post" class="content flex flex-col gap-4" />
      </div>
    </article>
  </div>
  <AboutMe />
  <ContactCTA />
</template>

<style scoped>
#introduction,
.content :where(h2, h3) {
  scroll-margin-top: 85px;
}

.content :where(h2, h3) {
  color: var(--color-text);
  font-weight: var(--font-weight-semibold);
}

:deep(.content h2) {
  font-size: var(--text-xl);
}

:deep(.content h3) {
  font-size: var(--text-lg);
}

@media (min-width: 768px) {
  #introduction,
  .content :where(h2, h3) {
    scroll-margin-top: 100px;
  }

  :deep(.content h2) {
    font-size: var(--text-2xl);
  }

  :deep(.content h3) {
    font-size: var(--text-xl);
  }
}

@media (min-width: 1024px) {
  :deep(.content h2) {
    font-size: var(--text-3xl);
  }

  :deep(.content h3) {
    font-size: var(--text-2xl);
  }
}
</style>
