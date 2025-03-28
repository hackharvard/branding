<script>
  import { fade } from 'svelte/transition';
  
  export let isOpen = false;
  export let name = '';
  export let bio = '';
  export let image = '';
  
  function closeModal() {
    isOpen = false;
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

{#if isOpen}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0" 
    transition:fade={{ duration: 150 }}
  >
    <!-- Modal backdrop -->
    <div 
      class="absolute inset-0 bg-black/50 backdrop-blur-sm" 
      on:click={closeModal}
      on:keydown={handleKeydown}
      role="button"
      tabindex="0"
      aria-label="Close modal"
    ></div>
    
    <!-- Modal content -->
    <div 
      class="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800"
      transition:fade={{ duration: 150, delay: 50 }}
    >
      <!-- Close button -->
      <button 
        class="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
        on:click={closeModal}
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <!-- Team member details -->
      <div class="flex flex-col items-center">
        <img 
          src={image} 
          alt={name} 
          class="h-24 w-24 rounded-full object-cover mb-4 border-2 border-gray-200 dark:border-gray-700"
        />
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <div class="mt-4 text-gray-700 dark:text-gray-300 text-center">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  </div>
{/if}
