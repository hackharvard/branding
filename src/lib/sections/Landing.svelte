<script>
  import Marquee from '../components/Marquee.svelte';
  
  // For parallax scrolling effect
  let scrollY;
  
  // Featured image path based on theme
  $: featuredImagePath = '/nice_photos/Copy of 6S1A2936.jpg';
</script>

<svelte:window bind:scrollY />

<div class="relative min-h-screen overflow-hidden" id="home">
  <!-- Parallax Hero Background -->
  <div class="absolute inset-0 w-full h-full overflow-hidden">
    <img 
      src={featuredImagePath} 
      alt="HackHarvard" 
      class="absolute w-full h-full object-cover object-center transform scale-125 transition-transform duration-500"
      style="transform: translateY({scrollY * 0.15}px) scale(1.25);"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative flex flex-col justify-center items-center h-screen px-4 sm:px-6 py-10 sm:py-20 text-white">
    <div class="text-center max-w-6xl mx-auto" style="transform: translateY({-scrollY * 0.08}px);">
      <h1 class="font-lexend text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tighter drop-shadow-lg">
        HackHarvard
      </h1>
      
      <h2 class="font-exo text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 drop-shadow-md">
        October 2025 · Cambridge, MA
      </h2>
      
      <!-- Photo Accent Bar - responsive for mobile -->
      <div class="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:space-x-6 my-8 sm:my-12">
        <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
          <img 
            src="/nice_photos/Copy of 6S1A2293.jpg" 
            alt="HackHarvard event" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
          <img 
            src="/nice_photos/Copy of 6S1A2875.jpg" 
            alt="HackHarvard event" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
          <img 
            src="/nice_photos/Copy of 6S1A2655.jpg" 
            alt="HackHarvard event" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center">
        <a 
          href="/what" 
          target="_blank"
          class="bg-white text-black px-5 py-3 rounded-lg font-bold text-base sm:text-lg shadow-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
        >
          What is a hackathon?
        </a>
        
        <a 
          href="#welcome" 
          class="bg-transparent border-2 border-white px-5 py-3 rounded-lg font-bold text-base sm:text-lg shadow-xl hover:bg-white hover:bg-opacity-20 transition-all transform hover:-translate-y-1"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  
  <!-- Marquee at bottom -->
  <div class="absolute bottom-0 left-0 right-0">
    <Marquee theme="light" />
  </div>
</div>

<style>
  /* Custom styles */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
