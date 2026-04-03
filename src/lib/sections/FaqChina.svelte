<script>
  import Disclosure from '../components/Disclosure.svelte';

  const faqItems = [
    {
      question: 'What is HackHarvard China?',
      answer:
        'HackHarvard China is a collaborative hackathon experience designed to inspire middle and high school students to build innovative solutions and explore technology through workshops, teamwork, and project development.'
    },
    {
      question: 'When is HackHarvard China?',
      answer:
        'HackHarvard China will take place from August 19–23, 2026 in Hangzhou. The program features a 5-day event including 2 days of workshops and a 36-hour hackathon. Students can choose whether to register for the 2-day workshops.'
    },
    {
      question: 'Where will HackHarvard China take place?',
      answer:
        'HackHarvard China will take place in Hangzhou. The specific venue details will be provided to all registered participants prior to the event.'
    },
    {
      question: 'Is HackHarvard China in-person?',
      answer:
        'Yes. HackHarvard China is an in-person event, and participants will need to be physically present at the venue.'
    },
    {
      question: 'What if I have never hacked before?',
      answer:
        'That is okay. The first two days include beginner-level workshops designed to help students build confidence and prepare for the hackathon.'
    },
    {
      question: 'Who can participate?',
      answer:
        'Participants may register in one of two divisions: Junior High School Division (Grades 8–9) and Senior High School Division (Grades 10–12).'
    },
    {
      question: 'Do I have to attend the workshops?',
      answer:
        'No. Students may choose whether to attend the 2-day workshop portion or compete directly in the hackathon.'
    },
    {
      question: 'What is the format of the event?',
      answer:
        'The event begins with registration, the opening ceremony, and team building on August 19. Workshops take place on August 20 and August 21, and the hackathon begins on the evening of August 21. The program concludes on August 23 with the hackathon fair, presentations, and closing ceremony.'
    }
  ];
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
          Please email us at
          <a class="text-blue-900 hover:underline dark:text-blue-200" href="mailto:china@hackharvard.io">
            china@hackharvard.io
          </a>
          and we'll get back to you ASAP!
        </p>
      </div>

      <div class="mt-8 space-y-6">
        <div class="space-y-4">
          {#each faqItems as item}
            <Disclosure>
              <svelte:fragment slot="title">{item.question}</svelte:fragment>
              <svelte:fragment slot="content">{item.answer}</svelte:fragment>
            </Disclosure>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
