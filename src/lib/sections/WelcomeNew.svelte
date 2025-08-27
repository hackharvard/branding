<script>  
  import { onMount } from 'svelte';
  
  const featuredImages = [
    '/nice_photos/hackharvard_2024_singles-699.jpg',
    '/nice_photos/Copy of 6S1A2366.jpg',
    '/nice_photos/IMG_3354.jpg',
    '/nice_photos/hackharvard_2024_singles-186.jpg'
  ];
  
  // Modal and form state
  let showModal = false;
  let firstName = '';
  let lastName = '';
  let email = '';
  let submitting = false;
  let successMessage = '';
  let errorMessage = '';
  let modalElement; // Reference to modal content element
  let initialFocusElement; // Element to focus initially in the modal
  
  // Function to toggle modal visibility
  function toggleModal() {
    showModal = !showModal;
    
    // Reset form when opening modal
    if (showModal) {
      firstName = '';
      lastName = '';
      email = '';
      successMessage = '';
      errorMessage = '';
      
      // Focus the close button when the modal opens (after render)
      setTimeout(() => {
        if (initialFocusElement) initialFocusElement.focus();
      }, 0);
    }
  }
  
  // Function to handle form submission
  async function handleSubmit() {
    // Basic validation
    if (!firstName || !lastName || !email) {
      errorMessage = 'Please fill in all fields';
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      errorMessage = 'Please enter a valid email address';
      return;
    }
    
    submitting = true;
    errorMessage = '';
    
    try {
      // Replace with your actual Google Sheets App Script web app URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyIRz_Z6qh_2aCiYVS4cMpRxZgqkGyNzOil7cq3ArNSBC1o_UNBMXz7w9P7DPwK3jKksA/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          timestamp: new Date().toISOString(),
        }),
      });
      
      // Since no-cors doesn't give us response details, we assume success
      successMessage = 'Thank you! We\'ll notify you when applications open.';
      firstName = '';
      lastName = '';
      email = '';
      
      // Auto close modal after success
      setTimeout(() => {
        if (successMessage) toggleModal();
      }, 3000);
      
    } catch (error) {
      errorMessage = 'Something went wrong. Please try again later.';
      console.error('Error submitting form:', error);
    } finally {
      submitting = false;
    }
  }
  
  // Handle Escape key globally (no need to put it on divs)
  function handleKeydown(e) {
    if (e.key === 'Escape' && showModal) {
      toggleModal();
    }
  }
  
  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
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
            Every year, over 500 students from around the world come to our campus to build, 
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
          <div class="font-exo text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">500+</div>
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
      <div class="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-16 rounded-3xl shadow-lg">
        <h2 class="font-exo text-4xl font-bold mb-6 text-white">JOIN US IN 2025</h2>
        <p class="text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed">
          Be part of something extraordinary. Whether you are a seasoned hacker or just starting your coding journey, HackHarvard welcomes participants of all experience levels.
        </p>
        <button 
          type="button"
          class="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
          on:click={() => window.location.href = "https://portal.hackharvard.io"}
          on:keydown={(e) => e.key === 'Enter' && toggleModal()}
          aria-haspopup="dialog"
        >
          Apply now
        </button>
      </div>

    </div>
  </div>
  
  <!-- Modal dialog -->
  {#if showModal}
    <!-- Semantic accessibility structure for the modal -->
    <div class="fixed inset-0 z-50 overflow-y-auto">
      <!-- This is a clickable button that covers the entire backdrop -->
      <button
        type="button"
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        aria-label="Close modal"
        on:click={toggleModal}
      ></button>
      
      <div class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <!-- This element centers the modal contents -->
        <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
        
        <!-- Modal panel - no keyboard events on this div -->
        <div
          bind:this={modalElement}
          class="inline-block bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-2xl transform transition-all sm:align-middle"
          style="max-height: 90vh; overflow-y: auto;"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div class="flex justify-between items-center mb-4">
            <h3 id="modal-title" class="font-exo text-2xl font-bold dark:text-white">Get Notified</h3>
            <button 
              bind:this={initialFocusElement}
              type="button"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              on:click={toggleModal}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {#if successMessage}
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
              {successMessage}
            </div>
          {:else}
            <p class="mb-4 dark:text-gray-300">Enter your information below to be notified when applications for HackHarvard 2025 open.</p>
            
            <form on:submit|preventDefault={handleSubmit}>
              <div class="mb-4">
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  bind:value={firstName} 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter your first name"
                />
              </div>
              
              <div class="mb-4">
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  bind:value={lastName} 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter your last name"
                />
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={email} 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter your email address"
                />
              </div>
              
              {#if errorMessage}
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                  {errorMessage}
                </div>
              {/if}
              
              <button 
                type="submit" 
                class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow transition-all hover:shadow-lg flex justify-center items-center"
                disabled={submitting}
              >
                {#if submitting}
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                {:else}
                  Notify Me
                {/if}
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Add any additional styles here */
</style>
