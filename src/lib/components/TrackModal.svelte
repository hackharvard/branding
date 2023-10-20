<script>
  import { fade } from 'svelte/transition'
  import clsx from 'clsx'
  import { clickOutside } from '$lib/utils'

  let className
  export { className as class }
  export let track
  let openState = false
</script>

<button
  class={clsx(className)}
  type="button"
  on:click={() => {
    openState = true
  }}
>
  <slot />
</button>

{#if openState}
  <div
    class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center bg-white/70 backdrop-blur-xl dark:bg-secondary/70"
    transition:fade={{ duration: 150 }}
  >
    <div class="px-dynamic flex h-full w-full items-center justify-center">
      <div
        class="flex h-2/3 max-w-xl flex-col rounded-lg bg-white p-10 dark:bg-secondary"
        use:clickOutside
        on:outclick={() => {
          openState = false
        }}
      >
        <div class="mb-5 flex shrink-0 items-center justify-between">
          <h1 class="text-xl uppercase">{track.name}</h1>
          <button
            class="shrink-0"
            type="button"
            on:click={() => {
              openState = false
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8 w-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="h-full gap-8 overflow-hidden overflow-y-auto">
          <div class="mb-4 font-bold">
            {track.name}
          </div>
          <p>
            {track.desc}
          </p>
          <br />
          <div class="mb-4 font-bold">Guiding questions</div>
          <ol>
            {#each track.questions as question}
              <li>- {question}</li>
            {/each}
          </ol>
        </div>
      </div>
    </div>
  </div>
{/if}
