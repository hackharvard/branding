<script>
  import { onMount, onDestroy } from 'svelte'
  import { theme } from '$lib/stores'
  import { format } from 'date-fns'
  import Marquee from '../components/Marquee.svelte'

  // Countdown
  let countdown
  let remainingTime = { months: 0, days: 0, hours: 0, minutes: 0 }
  const targetDate = new Date('2023-10-20T00:00:00Z').getTime()
  const fmtdDate = format(new Date('2023-10-14T00:00:00Z'), 'MMM d, yyyy')
  function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now
    const tmp = {
      // months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      // days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
    function conFormat(n) {
      if (n >= 10) {
        return n.toString()
      } else {
        return `0${n}`
      }
    }
    remainingTime = {
      days: conFormat(tmp.days),
      hours: conFormat(tmp.hours),
      minutes: conFormat(tmp.minutes),
      seconds: conFormat(tmp.seconds)
    }
  }
  updateCountdown()

  onMount(() => {
    countdown = setInterval(updateCountdown, 1000)
  })
  onDestroy(() => {
    clearInterval(countdown)
  })
</script>

<div class="bg-landing-light dark:bg-landing-dark" id="home">
  <div class="p-dynamic grow lg:grid lg:grid-cols-2">
    <div class="flex items-center justify-center">
      <div class="w-60 max-w-xl lg:w-full">
        <img
          src={'images/rocket' + ($theme == 'dark' ? '-dark' : '-light') + '.png'}
          alt=""
          class="turbulence h-full w-full object-cover"
        />
      </div>
    </div>
    <div class="mt-10 lg:mt-0">
      <div class="flex h-full flex-col items-center justify-center">
        <!-- Placeholder HackHarvard text -->
        <div class="max-w-xl">
          <img
            class="h-full w-full object-cover"
            src={'images/title' + ($theme == 'dark' ? '-dark' : '-light') + '.png'}
            alt=""
          />
        </div>

        <!-- Countdown  -->
        <div class="mt-10 flex items-center justify-center">
          <div
            class="flex w-min gap-4 text-center font-exo text-[5vw] font-bold text-white sm:text-2xl md:text-3xl lg:text-3xl"
          >
            <div>
              <div>{remainingTime.days}</div>
              <div>DAYS</div>
            </div>
            <div>
              <div>{remainingTime.hours}</div>
              <div>HOURS</div>
            </div>
            <div>
              <div>{remainingTime.minutes}</div>
              <div>MINUTES</div>
            </div>
            <div>
              <div>{remainingTime.seconds}</div>
              <div>SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-8">
    <Marquee theme="light" />
  </div>
</div>
<!-- Social media banner -->
<div class="p-dynamic grid w-full grid-cols-1 gap-6 bg-white dark:bg-gray-100 lg:grid-cols-2">
  <div class="flex h-full items-center justify-center">
    <div class="text-3xl font-bold uppercase text-secondary">Applications open {fmtdDate}!</div>
  </div>
  <div class="flex h-full items-center justify-center">
    <div class="flex items-center gap-3">
      <a
        class="rounded-md border-2 border-black p-2"
        href="https://www.facebook.com/hackharvard/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          class="h-8 w-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>
      <a
        class="rounded-md border-2 border-black p-2"
        href="https://www.instagram.com/hackharvardcollege/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          class="h-8 w-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <a
        class="rounded-md border-2 border-black p-2"
        href="https://www.linkedin.com/company/hackharvardcollege/mycompany/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          class="h-8 w-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      <a
        class="rounded-md border-2 border-black p-2"
        href="mailto:team@hackharvard.io"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          class="h-8 w-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </a>
      <a
        class="rounded-md border-2 border-black p-2"
        href="https://github.com/hackharvard"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          class="h-8 w-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  /* .animate {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }
  .animate.a {
    animation: fire 0.8s linear alternate infinite;
  }
  .animate.b {
    animation: fire 0.6s linear alternate infinite;
  }
  .animate.c {
    animation: fire 0.7s linear alternate infinite;
  }
  */
  .turbulence {
    animation: turbulence 2s ease alternate infinite;
  }
  @keyframes turbulence {
    from {
      transform: translate(0, 0) rotate(4deg);
    }
    to {
      transform: translate(1rem, 1rem) rotate(-4deg);
    }
  }
  @keyframes fire {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .animate {
      animation-play-state: paused;
    }
  }
</style>
