<div class="relative h-full flex flex-col justify-center items-center p-2">
  <h1 class="h1 text-3xl sm:text-5xl lg:text-7xl font-bold">
    <span
      class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
      >Damien Sedgwick</span
    >
  </h1>
  <p class="h1 text-3xl sm:text-6xl lg:text-8xl font-bold">
    <span
      class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
      >Fullstack Developer</span
    >
  </p>
  <p class="h5 mt-6 max-w-prose text-center px-3 lg:px-0">
    I enjoy exploring new technologies and building innovative web applications,
    constantly seeking to integrate the latest advancements into practical and
    efficient solutions.
  </p>

  <section class="glowing-bg" />

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
      @apply bg-primary-400/50;
    }
    33% {
      @apply bg-secondary-400/50;
    }
    66% {
      @apply bg-tertiary-400/50;
    }
    100% {
      @apply bg-primary-400/50;
    }
  }

  @keyframes pulse {
    50% {
      transform: scale(2);
    }
  }
</style>
