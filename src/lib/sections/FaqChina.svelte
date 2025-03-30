<script>
  import Disclosure from '../components/Disclosure.svelte'
</script>

<div class="bg-white dark:bg-gray-900">
  <div class="p-dynamic flex justify-center" id="faq">
    <div class="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-black">
      <div>
        <h1 class="font-exo text-4xl uppercase text-red-700 sm:text-5xl dark:text-red-500">FAQ</h1>
        <p class="mt-5 text-sm font-bold text-blue-900 dark:text-blue-200">
          What if my question is not here?
        </p>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Please email us at <a class="text-blue-900 hover:underline dark:text-blue-200" href="mailto:china@hackharvard.io"
            >china@hackharvard.io</a
          >
          and we'll get back to you ASAP!
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <div class="space-y-4">
          <h3 class="font-exo text-2xl text-red-700 sm:text-3xl dark:text-red-500">WEBSITE FAQS</h3>
          <Disclosure>
            <svelte:fragment slot="title">What is HackHarvard China?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard China is the HackHarvard China Challenge, a collaborative initiative bringing Harvard University's premier hackathon experience to students in China. It aims to empower middle and high school students to develop innovative solutions to global challenges through computer science, with mentorship from industry leaders and academic mentors.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">When is HackHarvard China?</svelte:fragment>
            <svelte:fragment slot="content">HackHarvard China will take place from August 25-29, 2025 in Shanghai. The program features a 5-day event including workshops and a 96-hour hackathon.</svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Where will HackHarvard take place?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard China will take place in Shanghai. The specific venue details will be provided to all registered participants prior to the event.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Is HackHarvard China in-person?</svelte:fragment>
            <svelte:fragment slot="content">
              Yes, HackHarvard China is an in-person event with an online preparatory course package. Participants will need to be physically present at the venue.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">What if I have never hacked before?</svelte:fragment>
            <svelte:fragment slot="content">
              That's okay! HackHarvard China offers beginner workshops specifically designed to help you dive into the world of hacking. There will be plenty of other introductory hackers and it'll be a great opportunity to learn.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">When will applications open?</svelte:fragment>
            <svelte:fragment slot="content">
              Applications for HackHarvard China will open soon. Stay tuned for updates!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">How does team work?</svelte:fragment>
            <svelte:fragment slot="content">
              Each team consists of 2-5 members. All team members must collaborate to complete and submit one project.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">What if I don't have a team?</svelte:fragment>
            <svelte:fragment slot="content">
              If you do not have a team yet, don't worry. There will be several events and communications channels geared towards facilitating team formation and project ideation. We will help you find people to work with!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Will there be prizes?</svelte:fragment>
            <svelte:fragment slot="content">
              Yes! We will be giving away certificate of participation and swag to all participants who submit a project, as well as exciting prizes to all winning projects.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Is there a code of conduct?</svelte:fragment>
            <svelte:fragment slot="content">
              All participants are expected to follow the HackHarvard Code of Conduct throughout the duration of the event. This ensures a safe, respectful, and inclusive environment for everyone. A PDF of this code of conduct will be made available soon.
            </svelte:fragment>
          </Disclosure>
        </div>
      </div>
    </div>
  </div>
</div>
