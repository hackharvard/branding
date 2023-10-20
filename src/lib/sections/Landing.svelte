<script>
  import { onMount, onDestroy } from 'svelte'
  import { theme } from '$lib/stores'
  import { format } from 'date-fns'
  import Marquee from '../components/Marquee.svelte'

  // Countdown
  let countdown
  let remainingTime = { months: 0, days: 0, hours: 0, minutes: 0 }
  const targetDate = new Date('2023-10-20T00:00:00Z').getTime()
  // const fmtdDate = format(new Date('2023-10-14T00:00:00Z'), 'MMM d, yyyy')
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
      if (n > 10) {
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

<div class="bg-landing-light dark:bg-landing-dark min-h-screen" id="home">
  <div class="px-dynamic grow pb-8 pt-5 lg:grid lg:grid-cols-2">
    <div class="flex items-center justify-center">
      <div class="w-60 max-w-xl lg:w-full">
        <img
          src={'images/rocket' + ($theme == 'dark' ? '-dark' : '-light') + '.svg'}
          alt=""
          class="turbulence h-full w-full object-cover"
        />
      </div>
    </div>
    <div class="mt-10 lg:mt-0">
      <div class="flex h-full flex-col items-center justify-center">
        <!-- Placeholder HackHarvard text -->
        <div class="max-w-xl">
          <p
            class="landing-text-light dark:landing-text-dark text-center font-lexend text-5xl md:text-6xl xl:text-8xl"
          >
            HackHarvard
          </p>
          <p class="mt-5 text-center font-exo text-2xl text-white">
            <span class="mr-1 text-white"> Powered by </span>
            <a href="https://tryterra.co/" target="_blank" rel="noopener noreferrer">
              <img
                class="inline-block w-3/12 rounded-lg bg-white object-cover"
                src="images/sponsors/terra_api.png"
                alt="TerraAPI"
              />
            </a>
          </p>
          <p class="mt-10 text-center font-exo text-4xl text-white">October 20-22, 2023</p>
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

        <div class="mt-3">
          <a
            class="link color: text-2xl font-bold sm:text-2xl md:text-3xl lg:text-3xl"
            href="https://dayof.hackharvard.io/"
            target="_blank">DAY-OF INFO!!</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="pb-8">
    <Marquee theme="light" />
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
