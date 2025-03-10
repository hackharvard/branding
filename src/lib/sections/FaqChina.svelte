<script>
  import Disclosure from '../components/Disclosure.svelte'
</script>

<style>
  :global(.w-full.max-w-3xl .text-blue-700) {
    color: #90cdf4 !important; /* text-blue-200 equivalent */
  }
</style>

<div class="bg-secondary">
  <div class="p-dynamic flex justify-center" id="faq">
    <div class="w-full max-w-3xl rounded-lg bg-black p-8 shadow-lg text-white">
      <div>
        <h1 class="font-exo text-5xl uppercase text-red-500 sm:text-7xl">FAQ</h1>
        <p class="mt-5 font-bold text-blue-200">
          What if my question is not here?
        </p>
        <p>
          Please email us at <a class="text-blue-200 hover:underline" href="mailto:china@hackharvard.io"
            >china@hackharvard.io</a
          >
          and we'll get back to you ASAP!
        </p>
      </div>
      <div class="mt-8 space-y-8">
        <div class="space-y-6">
          <h3 class="font-exo text-3xl text-red-500 sm:text-4xl md:text-5xl">GENERAL</h3>
          <Disclosure>
            <svelte:fragment slot="title">What is HackHarvard China?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard China is a collaborative hackathon between HackHarvard and Guangzhou Hezong Lianheng Cultural Exchange, bringing the spirit of innovation to students in China. It follows the same format and standards as our main event at Harvard University, but is specifically tailored for students in China.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">When is HackHarvard China?</svelte:fragment>
            <svelte:fragment slot="content">HackHarvard China will take place in late August 2025. Specific dates will be announced closer to the event.</svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">How much does HackHarvard China cost?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard China is free to attend! In addition to hacking, you'll have the opportunity to
              participate in workshops, work with mentors, network with prominent company
              representatives, collect swag, and more!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">What if I've never hacked before?</svelte:fragment>
            <svelte:fragment slot="content">
              That's okay! HackHarvard China offers beginner workshops specifically designed to help you
              dive into the world of hacking. There will be plenty of other introductory hackers and
              it'll be a great opportunity to learn.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Where will HackHarvard China take place?</svelte:fragment>
            <svelte:fragment slot="content">
              The venue for HackHarvard China is currently being finalized. Once confirmed, the location details will be provided to all registered participants.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Is HackHarvard China in-person?</svelte:fragment>
            <svelte:fragment slot="content">
              Yes, HackHarvard China is an in-person event with virtual mentorship opportunities. Participants will need to be physically present at the venue.
            </svelte:fragment>
          </Disclosure>
        </div>
        <div class="space-y-6">
          <h3 class="font-exo text-3xl text-red-500 sm:text-4xl md:text-5xl">APPLY</h3>
          <Disclosure>
            <svelte:fragment slot="title">When will applications open?</svelte:fragment>
            <svelte:fragment slot="content">
              Applications for HackHarvard China will open in around June 2025. Stay tuned for updates!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Who is eligible to apply?</svelte:fragment>
            <svelte:fragment slot="content">
              All university students in China are welcome to apply, regardless of coding experience. International students studying in China are also eligible to apply.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Will there be travel reimbursements?</svelte:fragment>
            <svelte:fragment slot="content">
              We're working with our sponsors to provide travel reimbursements for participants. More details will be provided after acceptance.
            </svelte:fragment>
          </Disclosure>
        </div>
        <div class="space-y-6">
          <h3 class="font-exo text-3xl text-red-500 sm:text-4xl md:text-5xl">TEAMS</h3>
          <Disclosure>
            <svelte:fragment slot="title">What if I don't have a team?</svelte:fragment>
            <svelte:fragment slot="content">
              If you do not have a team yet, don't worry. There will be several events and
              communications channels geared towards facilitating team formation and project
              ideation. We will help you find people to work with!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">How do teams work?</svelte:fragment>
            <svelte:fragment slot="content">
              Each team consists of a maximum of four members. However, all teammates must submit
              individual applications and all applications will be evaluated individually,
              regardless of your intended team.
            </svelte:fragment>
          </Disclosure>
        </div>
        <div class="space-y-6">
          <h3 class="font-exo text-3xl uppercase text-red-500 sm:text-4xl md:text-5xl">
            Hackathon
          </h3>
          <Disclosure>
            <svelte:fragment slot="title">Will there be prizes?</svelte:fragment>
            <svelte:fragment slot="content">
              Yes! We will be giving away swag to all participants who submit a project, as well as exciting prizes to all winning projects.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">What resources will be provided?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard China will provide food, drinks, and a comfortable space to work. You'll also have access to mentors, workshops, and networking opportunities with industry professionals.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Is there a code of conduct?</svelte:fragment>
            <svelte:fragment slot="content">
              All participants are expected to follow the HackHarvard Code of Conduct throughout the duration of the event. This ensures a safe, respectful, and inclusive environment for everyone.
            </svelte:fragment>
          </Disclosure>
        </div>
      </div>
    </div>
  </div>
</div>
