<template>
  <section class="py-12">
    <h2 class="text-text font-heading mb-4 text-2xl font-bold">Architecture</h2>

    <div
      class="bg-surface border-border mx-auto flex flex-col rounded border lg:flex-row"
    >
      <div class="max-w-2xl px-4 py-8 md:pr-4 md:pl-8">
        <h2 class="text-text font-heading mb-2 text-2xl font-bold">
          Issue Reporting Flow
        </h2>
        <div class="mb-4 flex flex-col gap-2">
          <p>
            The issue reporting flow connects the Vue frontend, Spring Boot API,
            MySQL database, image storage, and notification system.
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="bg-surface border-border border px-3 py-1">Vue</span>
          <span class="bg-surface border-border border px-3 py-1"
            >Sprint Boot</span
          >
          <span class="bg-surface border-border border px-3 py-1">MySQL</span>
          <span class="bg-surface border-border border px-3 py-1">S3</span>
        </div>
      </div>
      <div class="flex-1 px-4 py-8 md:pr-8 md:pl-4">
        <div class="bg-background p-4">
          <div class="border-border flex justify-between border-b pb-2">
            <span>IssueService.java</span>
            <button class="hover:text-text cursor-pointer transition-all">
              <Icon name="icon-park-outline:copy" class="text-xl" />
            </button>
          </div>
          <pre class="overflow-x-auto py-4">
public Issue createIssue(CreateIssueRequest request, User user)
{
    Issue issue = new Issue();

    issue.setTitle(request.title());
    issue.setDescription(request.description());
    issue.setUser(user);
    issue.setStatus(Status.OPEN);

    return issueRepository.save(issue);
}</pre
          >
        </div>
      </div>
    </div>
  </section>
</template>
