<script>
  // For parallax scrolling effect
  let scrollY

  // Featured image path based on theme
  $: featuredImagePath = '/nice_photos/Copy of 6S1A2936.jpg'
</script>

<svelte:window bind:scrollY />

<div class="relative min-h-screen overflow-hidden" id="home">
  <!-- Parallax Hero Background -->
  <div class="absolute inset-0 h-full w-full overflow-hidden">
    <img
      src={featuredImagePath}
      alt="HackHarvard"
      class="absolute h-full w-full scale-125 transform object-cover object-center transition-transform duration-500"
      style="transform: translateY({scrollY * 0.15}px) scale(1.25);"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50" />
  </div>

  <!-- Hero Content -->
  <div
    class="relative flex h-screen flex-col items-center justify-center px-4 py-10 text-white sm:px-6 sm:py-20"
  >
    <div class="mx-auto max-w-6xl text-center" style="transform: translateY({-scrollY * 0.08}px);">
      <h1
        class="font-lexend mb-4 text-5xl font-bold tracking-tighter drop-shadow-lg sm:mb-6 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        HackHarvard
      </h1>

      <p
        class="font-exo mb-4 text-sm font-normal text-gray-300 drop-shadow-sm sm:mb-6 sm:text-base md:text-lg lg:text-xl"
      >
        Hosted by HackHarvard Undergraduate Hackathon
      </p>

      <h2
        class="font-exo mb-8 text-xl font-semibold drop-shadow-md sm:mb-12 sm:text-2xl md:text-3xl lg:text-4xl"
      >
        October 3-5, 2025 · Cambridge, MA
      </h2>

      <!-- Early Application Notice -->
      <div class="mb-8 rounded-lg bg-white bg-opacity-20 p-4 backdrop-blur-sm sm:mb-12 sm:p-6">
        <p class="font-exo text-base font-medium text-white drop-shadow-sm sm:text-lg md:text-xl">
          🚀 <strong>Applications are now open!</strong> Rolling decisions will begin September 1st, so submit your application early to secure your spot.
        </p>
      </div>

      <!-- Photo Accent Bar - responsive for mobile -->
      <div class="my-8 flex flex-wrap justify-center gap-4 sm:my-12 sm:flex-nowrap sm:space-x-6">
        <div
          class="h-32 w-32 transform overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64"
        >
          <img
            src="/nice_photos/Copy of 6S1A2293.jpg"
            alt="HackHarvard event"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="h-32 w-32 transform overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64"
        >
          <img
            src="/nice_photos/Copy of 6S1A2875.jpg"
            alt="HackHarvard event"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="h-32 w-32 transform overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64"
        >
          <img
            src="/nice_photos/Copy of 6S1A2655.jpg"
            alt="HackHarvard event"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="gap-4 sm:flex-col">
        <div class="mt-6 flex flex-col flex-wrap justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-6">
          <a
            href="/what"
            target="_blank"
            class="transform rounded-lg bg-white px-5 py-3 text-base font-bold text-black shadow-xl transition-all hover:-translate-y-1 hover:bg-opacity-90 sm:text-lg"
          >
            What is a hackathon?
          </a>

          <a
            href="#welcome"
            class="transform rounded-lg border-2 border-white bg-transparent px-5 py-3 text-base font-bold shadow-xl transition-all hover:-translate-y-1 hover:bg-white hover:bg-opacity-20 sm:text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>

</div>

<style>
  /* Custom styles */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
