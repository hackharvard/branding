<script>
  import China from '$lib/sections/China.svelte'
  import '../../app.css'
  
  // Set dark mode as default immediately on page load
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
</script>

<main>
  <China />
</main>
