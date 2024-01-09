<script lang="ts">
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();

  const modal: ModalSettings = {
    type: "component",
    component: "modalComponent",
    title: "Open Source Software",
    body: "In my spare time, I actively try and contribute to open source software, below is a curated selection of the projects to which I have contributed.",
  };
</script>

<div class="relative h-full flex flex-col justify-center items-center p-2">
  <section class="glowing-bg" />

  <ul class="flex space-x-4 absolute top-6">
    <li>
      <button
        class="opacity-75 hover:opacity-100 hover:border-b"
        on:click={() => {
          modalStore.trigger(modal);
        }}>OSS</button
      >
    </li>
    <li>
      <a
        class="opacity-75 hover:opacity-100 hover:border-b"
        href="https://www.github.com/damiensedgwick"
        target="_blank"
        rel="norefer noopener">GitHub</a
      >
    </li>
    <li>
      <a
        class="opacity-75 hover:opacity-100 hover:border-b"
        href="https://www.linkedin.com/in/damiensedgwick"
        target="_blank"
        rel="norefer noopener">LinkedIn</a
      >
    </li>
  </ul>

  <h1 class="h1 text-3xl sm:text-5xl lg:text-7xl font-bold">
    <span
      class="bg-gradient-to-br variant-gradient-primary-secondary bg-clip-text text-transparent box-decoration-clone"
      >Damien Sedgwick</span
    >
  </h1>
  <p class="h1 text-3xl sm:text-6xl lg:text-8xl font-bold">
    <span
      class="bg-gradient-to-br variant-gradient-secondary-tertiary bg-clip-text text-transparent box-decoration-clone"
      >Fullstack Developer</span
    >
  </p>
  <p class="h5 mt-6 max-w-prose text-center px-3 lg:px-0">
    I enjoy exploring new technologies and building innovative web applications,
    constantly seeking to integrate the latest advancements into practical and
    efficient solutions.
  </p>

  <a
    class="absolute bottom-6 right-6 hover:rotate-12 transition-all hover:scale-125"
    href="https://www.feedback-loop.io"
    target="_blank"
    rel="noopener norefer"
  >
    <img class="w-8 sm:w-12" src="/mint-icon.png" alt="Floop" width="50" /></a
  >
</div>

<style lang="postcss">
  .glowing-bg {
    @apply w-64 h-64 md:w-80 md:h-80;
  }

  .glowing-bg {
    @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
    animation:
      pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
      glow 5s linear infinite;
  }

  @keyframes glow {
    0% {
      @apply bg-primary-400/25;
    }
    33% {
      @apply bg-secondary-400/25;
    }
    66% {
      @apply bg-tertiary-400/25;
    }
    100% {
      @apply bg-primary-400/25;
    }
  }

  @keyframes pulse {
    50% {
      transform: scale(2);
    }
  }
</style>
