<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import type { Screenshot } from "~/types/Screenshot";

const props = defineProps<{ images: Screenshot[] }>();

const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "center",
});

const selectedIndex = ref(0);

const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();
const scrollTo = (index: number) => emblaApi.value?.scrollTo(index);

onMounted(() => {
  const api = emblaApi.value;
  if (!api) return;

  const update = () => {
    selectedIndex.value = api.selectedScrollSnap();
  };

  api.on("select", update);
  update();
});

watch(emblaApi, (api) => {
  if (!api) return;

  const update = () => {
    selectedIndex.value = api.selectedScrollSnap();
  };

  api.on("select", update);
  update();
});
</script>

<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-4 text-2xl font-bold">Screenshots</h2>

    <div class="group relative">
      <div class="border-border bg-surface overflow-hidden rounded-md border">
        <div ref="emblaRef" class="overflow-hidden">
          <div class="flex">
            <div
              v-for="(image, idx) in images"
              :key="image.src"
              class="flex min-w-0 flex-[0_0_100%] justify-center"
            >
              <NuxtImg
                :src="image.src"
                :alt="image.alt"
                :width="image.type === 'mobile' ? 323 : 1244"
                :height="700"
                :sizes="
                  image.type === 'mobile'
                    ? '323px'
                    : '(max-width: 768px) 100vw, 1244px'
                "
                class="max-h-175 w-auto"
                format="webp"
                :loading="idx == 0 ? 'eager' : 'lazy'"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        class="border-border bg-background/80 text-text absolute top-1/2 left-4 hidden h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition group-hover:flex"
        @click="scrollPrev"
      >
        <Icon name="heroicons:chevron-left" />
      </button>

      <button
        class="border-border bg-background/80 text-text absolute top-1/2 right-4 hidden h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition group-hover:flex"
        @click="scrollNext"
      >
        <Icon name="heroicons:chevron-right" />
      </button>
    </div>

    <div class="mt-4 flex justify-center gap-2">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        @click="scrollTo(index)"
        :class="[
          'border-border cursor-pointer border p-1',
          selectedIndex === index ? 'opacity-100' : 'opacity-40',
        ]"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          width="56"
          height="56"
          class="h-14 w-14 object-cover text-xs"
          format="webp"
          loading="lazy"
        />
      </button>
    </div>
  </section>
</template>
