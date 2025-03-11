<script>
  import { onMount } from 'svelte';
  import FaqChina from './FaqChina.svelte';
  
  let ready = false;
  onMount(() => {
    ready = true;
  });
</script>

<div class="min-h-screen bg-secondary p-8 text-white">
  <div class="mx-auto max-w-4xl">
    <!-- Header Section -->
    <section class="mb-5">
      <h1 class="mb-4 font-exo text-5xl font-bold sm:text-7xl">HackHarvard China</h1>
      
      <p class="mb-5 text-lg">
        A collaborative hackathon between HackHarvard and Guangzhou Hezong Lianheng Cultural Exchange, bringing the spirit of innovation to students in China.
      </p>

      <!-- <div class="overflow-hidden rounded-lg shadow-lg">
        <img src="/images/china-banner.jpg" alt="HackHarvard China" class="w-full" onerror="this.src='/images/2022/code.jpg'" />
      </div> -->
    </section>

    <!-- About Section -->
    <section class="mb-16 mt-5">
      <h2 class="mb-6 font-exo text-3xl font-bold text-red-500">About HackHarvard China</h2>
      
      <p class="mb-8 text-lg">
        Experience the same exciting 36-hour hackathon format as our flagship event at Harvard University, now in China! Work with mentors, collaborate with fellow innovators, and build amazing projects that make a difference.
      </p>
    </section>

    <!-- Event Details Section -->
    <section class="mb-16 mt-5">
      <h2 class="mb-6 font-exo text-3xl font-bold text-red-500">Event Details</h2>
      
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg">
          <h3 class="mb-3 font-exo text-xl font-bold text-blue-400">When</h3>
          <p>Late August 2025</p>
        </div>
        
        <div class="overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg">
          <h3 class="mb-3 font-exo text-xl font-bold text-green-400">Duration</h3>
          <p>36 hours of hacking, workshops, and fun!</p>
        </div>
        
        <div class="overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg">
          <h3 class="mb-3 font-exo text-xl font-bold text-purple-400">Format</h3>
          <p>In-person event!</p>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section class="mb-16 mt-5">
      <h2 class="mb-6 font-exo text-3xl font-bold text-red-500">Schedule Overview</h2>
      
      <div class="overflow-hidden rounded-lg bg-gray-900 p-6 shadow-lg">
        <p class="mb-6 text-lg">A detailed schedule will be announced closer to the event.</p>
        
        <div class="mb-6 border-b border-gray-700 pb-4">
          <h3 class="font-exo text-xl font-bold text-yellow-400">Day 1</h3>
          <p class="mt-2">Check-in, Opening Ceremony, Team Formation, Hacking Begins</p>
        </div>
        
        <div class="mb-6 border-b border-gray-700 pb-4">
          <h3 class="font-exo text-xl font-bold text-yellow-400">Day 2</h3>
          <p class="mt-2">Full Day of Hacking, Workshops, Mentorship</p>
        </div>
        
        <div>
          <h3 class="font-exo text-xl font-bold text-yellow-400">Day 3</h3>
          <p class="mt-2">Project Submissions, Demos, Judging, Awards Ceremony</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="mb-16 mt-24">
      <FaqChina />
    </section>

    <!-- Contact Section -->
    <section class="mb-16 mt-24">
      <h2 class="mb-6 font-exo text-3xl font-bold text-red-500">Contact Us</h2>
      
      <p class="mb-6 text-lg">
        Questions? Email us at <a href="mailto:china@hackharvard.io" class="text-blue-400 hover:underline">china@hackharvard.io</a>
      </p>
    </section>

    <!-- CTA Section -->
    <section>
      <div class="rounded-lg bg-red-900 p-8 shadow-lg text-center">
        <h2 class="mb-4 font-exo text-2xl font-bold text-white">Join Us in China!</h2>
        <p class="mb-6 text-lg">
          Be part of the first-ever HackHarvard event in China.
        </p>
        <button 
          class="inline-block rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black transition-colors hover:bg-yellow-400 cursor-not-allowed opacity-90"
          disabled
        >
          Applications Opening Soon
        </button>
      </div>
    </section>
  </div>
</div>
