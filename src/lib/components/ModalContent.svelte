<script lang="ts">
  import { getModalStore } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();
</script>

<div class="p-8 rounded-md space-y-4 max-w-[89ch]">
  {#if $modalStore[0]}
    <header>
      <h2 class="h2 text-center">{$modalStore[0].title}</h2>
    </header>
    <article>
      <p>{$modalStore[0].body}</p>
    </article>
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-4 gap-1">
      <a
        class="logo-item bg-gradient-to-br variant-gradient-secondary-tertiary"
        href="https://cli.github.com/"
        target="_blank"
        rel="norefer noopener"
      >
        <span>GitHub CLI</span>
      </a>
      <a
        class="logo-item bg-gradient-to-br variant-gradient-secondary-tertiary"
        href="https://remix.run/"
        target="_blank"
        rel="norefer noopener"
      >
        <span>Remix</span>
      </a>
      <a
        class="logo-item bg-gradient-to-br variant-gradient-secondary-tertiary"
        href="https://xstate-catalogue.com/"
        target="_blank"
        rel="norefer noopener"
      >
        <span>XState Catalogue</span>
      </a>
      <a
        class="logo-item bg-gradient-to-br variant-gradient-secondary-tertiary"
        href="https://norfolkdevelopers.com/"
        target="_blank"
        rel="norefer noopener"
      >
        <span>Norfolk Developers</span>
      </a>
    </div>
  {/if}
</div>
