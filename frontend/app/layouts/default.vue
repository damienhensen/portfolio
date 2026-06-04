<template>
  <div
    class="bg-background font-body text-text-muted flex min-h-screen flex-col"
  >
    <HeaderDesktop class="hidden md:block" />
    <HeaderMobile class="md:hidden" />
    <main class="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>
