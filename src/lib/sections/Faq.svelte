<script>
  import Disclosure from '../components/Disclosure.svelte'
</script>

<div class="bg-white dark:bg-gray-900">
  <div class="p-dynamic bg-color bg-faq flex justify-center bg-cover" id="faq">
    <div class="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-black">
      <div>
        <h1 class="font-exo text-4xl uppercase text-red-700 sm:text-5xl">FAQ</h1>
        <p class="mt-5 text-sm font-bold text-blue-900 dark:text-blue-200">
          What if my question is not here?
        </p>
        <p class="text-sm">
          Please email us at <a class="link" href="mailto:team@hackharvard.io"
            >team@hackharvard.io</a
          >
          and we'll get back to you ASAP!
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <div class="space-y-4">
          <h3 class="font-exo text-2xl text-red-700 sm:text-3xl">GENERAL</h3>
          <Disclosure>
            <svelte:fragment slot="title">What is HackHarvard?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard is an annual collegiate hackathon (i.e. coding competition) that brings
              together students from around the world to collaborate and create innovative projects
              related to hardware, software, computer coding, and more. Learn more <a
                class="link"
                href="/what"
                target="_blank">here</a
              >.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">When is HackHarvard?</svelte:fragment>
            <svelte:fragment slot="content">October 3-5, 2025.</svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">How much does HackHarvard cost?</svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard is free to attend! In addition to hacking, you’ll have the opportunity to
              participate in workshops, work with mentors, network with prominent company
              representatives, collect swag, and more!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">What if I've never hacked before?</svelte:fragment>
            <svelte:fragment slot="content">
              That’s okay! HackHarvard offers beginner workshops specifically designed to help you
              dive into the world of hacking. There will be plenty of other introductory hackers and
              it’ll be a great opportunity to learn.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title"
              >What will I get out of attending HackHarvard?
            </svelte:fragment>
            <svelte:fragment slot="content">
              HackHarvard will provide a space for hackers to meet and learn from like-minded,
              enthusiastic participants and experienced individuals who’ve worked in-industry.
              You’ll have the opportunity to gain both practical experience when it comes to
              designing and creating products, as well as a robust network of friends and mentors
              that can accompany you on your coding journey!
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">How do I get to HackHarvard?</svelte:fragment>
            <svelte:fragment slot="content">
              Our venue is located at the Science and Engineering Complex, 150 Western Ave, Boston,
              MA 02134. HackHarvard does not provide transport, so participants will have to make
              their own travel plans.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Will I be reimbursed for travel?</svelte:fragment>
            <svelte:fragment slot="content">
              Most likely not. If any funding does open up, you will be notified after your
              acceptance.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Is HackHarvard in-person?</svelte:fragment>
            <svelte:fragment slot="content"
              >Yes. The event is entirely in person. Please plan to be in Cambridge, MA for the
              entire duration.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">How does an in-person hackathon work?</svelte:fragment>
            <svelte:fragment slot="content">
              Located at Harvard’s Science and Engineering Complex (SEC), HackHarvard will provide
              food for all meals from Friday’s dinner to Sunday's breakfast. We will try our best to
              accommodate all dietary restrictions. Hackers will also be provided spaces to sleep in
              the SEC.
            </svelte:fragment>
          </Disclosure>
        </div>
        <div class="space-y-4">
          <h3 class="font-exo text-2xl text-red-700 sm:text-3xl">APPLY</h3>
          <Disclosure>
            <svelte:fragment slot="title">When is the application deadline?</svelte:fragment>
            <svelte:fragment slot="content">The early application deadline was August 31, 2025. The regular application deadline is September 14, 2025.</svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Am I eligible to apply?</svelte:fragment>
            <svelte:fragment slot="content">
              As long as you are a student at any accredited college or university in the world, are
              18 or older, and are currently pursuing an undergraduate degree, you are invited to
              apply to HackHarvard!
            </svelte:fragment>
          </Disclosure>
        </div>
        <div class="space-y-4">
          <h3 class="font-exo text-2xl text-red-700 sm:text-3xl">TEAMS</h3>
          <Disclosure>
            <svelte:fragment slot="title">What if I don't have a team?</svelte:fragment>
            <svelte:fragment slot="content">
              If you do not have a team yet, don’t sweat it. There will be several events and
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
        <div class="space-y-4">
          <h3 class="font-exo text-2xl uppercase text-red-700 sm:text-3xl">Hackathon</h3>
          <Disclosure>
            <svelte:fragment slot="title">What are tracks?</svelte:fragment>
            <svelte:fragment slot="content">
              Tracks are areas of focus that you may choose to hack in. If you submit your project
              to a track, you are eligible to win the track-specific prize. Tracks will be released
              on hackathon day.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Will there be swag and prizes?</svelte:fragment>
            <svelte:fragment slot="content">
              Of course! We will be giving away swag to all participants who submit a project, as
              well as prizes to all winning projects.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Do I have to submit to a track?</svelte:fragment>
            <svelte:fragment slot="content">
              No, you can submit a project that is unrelated to the tracks provided.
            </svelte:fragment>
          </Disclosure>
          <Disclosure>
            <svelte:fragment slot="title">Is there a code of conduct?</svelte:fragment>
            <svelte:fragment slot="content">
              All participants are expected to follow the <a
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                >MLH Code of Conduct
              </a>
              throughout the duration of the conference.
            </svelte:fragment>
          </Disclosure>
        </div>
      </div>
    </div>
  </div>
</div>
