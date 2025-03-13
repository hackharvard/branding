<script context="module">
  const elements = new Set()
</script>

<script>
  import clsx from 'clsx'
  import { onMount } from 'svelte'
  import { uniqueId } from 'lodash-es'
  import { slide } from 'svelte/transition'

  let className
  export { className as class }

  let openState = false
  const id = uniqueId('disclosure-')

  onMount(() => {
    const tmp = {
      id,
      close: () => {
        openState = false
      }
    }
    elements.add(tmp)
    return () => elements.delete(tmp)
  })
</script>

<div>
  <button
    class={clsx(
      'flex w-full items-center justify-between rounded-md border border-gray-200 p-3 shadow',
      className
    )}
    type="button"
    on:click={() => {
      if (!openState) {
        elements.forEach(element => {
          element.close()
        })
      }
      openState = !openState
    }}
  >
    <div class="text-base font-bold text-blue-700 dark:text-blue-200 md:text-lg">
      <slot name="title" />
    </div>
    <svg
      class={clsx('h-5 w-5 transition-all', openState && 'rotate-180')}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  </button>

  {#if openState}
    <div class="p-3 text-base md:text-lg" transition:slide={{ x: 0, y: -100, duration: 300 }}>
      <slot name="content" />
    </div>
  {/if}
</div>
