<script>  
  const featuredImages = [
    '/nice_photos/hackharvard_2024_singles-699.jpg',
    '/nice_photos/Copy of 6S1A2366.jpg',
    '/nice_photos/IMG_3354.jpg',
    '/nice_photos/hackharvard_2024_singles-186.jpg'
  ];
</script>

<div class="relative mx-auto w-full overflow-hidden" id="welcome">
  <!-- Hero section with large image - using a different image than Landing -->
  <div class="relative h-[70vh] w-full overflow-hidden">
    <img 
      src="/nice_photos/20231021_152125.jpg" 
      alt="HackHarvard event" 
      class="absolute h-full w-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    <div class="absolute bottom-0 left-0 right-0 p-10 text-white">
      <h1 class="font-exo text-5xl font-bold mb-4">WELCOME TO HACKHARVARD</h1>
      <p class="text-xl max-w-3xl">
        Where innovation meets community. Join hundreds of students from around the world on our campus to build, learn, and create.
      </p>
    </div>
  </div>

  <!-- Main content section with featured images -->
  <div class="relative bg-white dark:bg-gray-900 py-20 px-6 lg:px-16">
    <div class="mx-auto max-w-6xl">
      <!-- About section -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-20">
        <div class="md:col-span-3">
          <h2 class="font-exo text-3xl font-bold mb-6 dark:text-white">WHAT IS HACKHARVARD?</h2>
          <p class="text-lg mb-4 dark:text-gray-300">
            HackHarvard is a 36-hour undergraduate hackathon hosted at Harvard University. 
            Every year, over 700 students from around the world come to our campus to build, 
            learn, and create.
          </p>
          <p class="text-lg dark:text-gray-300">
            Applications for our 10th iteration of HackHarvard will open in mid 2025. Join us for an unforgettable
            experience where you'll meet fellow innovators, work with cutting-edge technologies, and push the 
            boundaries of what's possible.
          </p>
        </div>
        <div class="md:col-span-2 h-full w-full overflow-hidden rounded-lg shadow-xl">
          <img 
            src="/nice_photos/Copy of 606A9181.jpg" 
            alt="Students collaborating at HackHarvard" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Stats section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 text-center">
        <div class="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl transform transition-transform hover:scale-105">
          <div class="font-exo text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">700+</div>
          <p class="text-xl dark:text-gray-300">Students from around the world</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl transform transition-transform hover:scale-105">
          <div class="font-exo text-5xl font-bold mb-4 text-purple-600 dark:text-purple-400">36</div>
          <p class="text-xl dark:text-gray-300">Hours of hacking</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl transform transition-transform hover:scale-105">
          <div class="font-exo text-5xl font-bold mb-4 text-pink-600 dark:text-pink-400">10th</div>
          <p class="text-xl dark:text-gray-300">Anniversary in 2025</p>
        </div>
      </div>

      <!-- Image gallery section -->
      <h2 class="font-exo text-3xl font-bold mb-8 text-center dark:text-white">EXPERIENCE HACKHARVARD</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {#each featuredImages as image, i}
          <div class="overflow-hidden rounded-lg shadow-lg h-64 transform transition-transform duration-300 hover:scale-105">
            <img 
              src={image} 
              alt={`HackHarvard moment ${i+1}`} 
              class="w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>

      
      <!-- Join us section -->
      <div class="text-center bg-gradient-to-r from-blue-500/80 to-purple-500/80 p-16 rounded-3xl shadow-lg">
        <h2 class="font-exo text-4xl font-bold mb-6 text-white">JOIN US IN 2025</h2>
        <p class="text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed">
          Be part of something extraordinary. Whether you are a seasoned hacker or just starting your coding journey, HackHarvard welcomes participants of all experience levels.
        </p>
        <!-- <div class="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
          Stay Tuned for Updates
        </div> -->
      </div>

    </div>
  </div>
</div>

<style>
  /* Add any additional styles here */
</style>
