<script>
  import { classNames } from '$lib/utils'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import Brand from './Brand.svelte'
  import { navigating } from '$app/stores'
  import { fade } from 'svelte/transition'
  import { theme } from '$lib/stores'
  import { slide } from 'svelte/transition'

  onMount(() => {
    updateShadow()
  })

  let shadow = false
  let open = false
  $: hash = $page.url.hash
  $: if ($navigating) {
    open = false
  }
  const pages = [
    { name: 'HOME', href: '#home' },
    {
      name: 'ABOUT',
      href: '#welcome'
    },
    {
      name: 'FAQ',
      href: '#faq'
    }
  ]
  function updateShadow() {
    shadow = window.scrollY !== 0
  }
  function handleTheme() {
    theme.toggle()
  }

  function scrollToSection(event, href) {
    event.preventDefault()
    const element = document.querySelector(href)
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
</script>

<svelte:window on:scroll={updateShadow} />
<nav
  transition:slide={{ x: 0, y: -100, duration: 300 }}
  class={classNames(
    'px-dynamic fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between transition-all',
    shadow ? 'bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
  )}
>
  <Brand />
  <div class="flex items-center">
    <div class="hidden items-center gap-4 lg:flex">
      {#each pages as page}
        <a
          class={classNames(
            'font-exo rounded-md px-3 py-2 transition-all',
            hash === page.href
              ? shadow 
                ? 'text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800' 
                : 'text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-white/10'
              : shadow 
                ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
          )}
          href={page.href}
          on:click={event => scrollToSection(event, page.href)}
        >
          {page.name}
        </a>
      {/each}
      <!-- China Page Link -->
      <a
        href="/china"
        class={classNames(
          'font-exo rounded-md px-3 py-2 transition-all',
          shadow 
            ? 'text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            : 'text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-white/10'
        )}
      >
        CHINA
      </a>
      <button
        class="ml-2 rounded-md bg-gray-300 dark:bg-gray-700 p-2 px-5 text-gray-500 dark:text-gray-400 font-exo cursor-not-allowed"
        type="button"
        disabled
        title="Applications not open yet"
      >
        APPLY
      </button>
      <button
        type="button"
        class={classNames(
          'flex h-9 w-9 items-center justify-center rounded-full ml-2',
          shadow 
            ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-black/30 dark:text-white dark:hover:bg-black/40'
        )}
        on:click={handleTheme}
      >
        <svg
          class="hidden h-5 w-5 dark:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
          />
        </svg>
        <svg
          class="h-5 w-5 dark:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <button
      class={classNames(
        'ml-3 flex h-9 w-9 items-center justify-center rounded-md lg:hidden',
        shadow 
          ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-black/30 dark:text-white dark:hover:bg-black/40'
      )}
      on:click={() => (open = !open)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-5 w-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </div>
</nav>

{#if open}
  <div
    class="p-dynamic fixed left-0 top-20 z-50 flex h-[calc(100vh-5rem)] w-screen flex-col gap-4 bg-white dark:bg-gray-900 lg:hidden"
    transition:fade
  >
    {#each pages as page}
      <a
        class={classNames(
          'font-exo rounded-md px-4 py-3 transition-all',
          hash === page.href
            ? 'text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
            : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
        )}
        href={page.href}
        on:click={event => {
          scrollToSection(event, page.href)
          open = false
        }}
      >
        {page.name}
      </a>
    {/each}
    <!-- China Page Link for mobile -->
    <a
      href="/china"
      class="font-exo rounded-md px-4 py-3 transition-all text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      CHINA
    </a>
    <button
      class="rounded-md bg-gray-300 dark:bg-gray-700 p-3 px-4 text-gray-500 dark:text-gray-400 font-exo cursor-not-allowed"
      type="button"
      disabled
      title="Applications not open yet"
    >
      APPLY
    </button>
    <button
      type="button"
      class="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
      on:click={handleTheme}
    >
      <svg
        class="hidden h-5 w-5 dark:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        />
      </svg>
      <svg
        class="h-5 w-5 dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
{/if}
