<script>
  import { onMount } from 'svelte'
  import Modal from '../components/TrackModal.svelte'

  let tracks = [
    {
      name: 'Health and Fitness',
      desc: "Are you passionate about improving the health and well-being of individuals around the world? Join our Health and Fitness Hackathon, where you'll have the opportunity to develop innovative solutions that empower people to lead healthier lives. Whether it's creating cutting-edge fitness apps, revolutionizing telemedicine, or designing wearable health tech, this track is all about leveraging technology to make a positive impact on global wellness. Get ready to hack your way to a healthier future!",
      questions: [
        'How can technology be harnessed to promote healthier lifestyles and well-being?',
        'What innovative solutions can improve access to healthcare for underserved communities?'
      ]
    },
    {
      name: 'Earth and Space',
      desc: "Embark on a journey beyond our planet and explore the vastness of both Earth and Space in this hackathon track. From addressing environmental challenges on our home planet to pioneering new frontiers in space exploration, this track welcomes visionaries and problem solvers who are eager to make a significant impact on our world, both near and far. Whether you're interested in climate solutions, space technology, or protecting our planet, this hackathon is your launchpad to innovation.",
      questions: [
        'What technologies can help mitigate the effects of climate change and protect the environment?'
      ]
    }
  ]
</script>

<div class="py-dynamic bg-purple-100 dark:bg-secondary" id="tracks">
  <h1 class="text-center font-exo text-5xl font-bold uppercase sm:text-7xl">tracks</h1>
  <p class="mt-5 text-center">
    If you’re interested in being a track for HackHarvard, please email us at <a
      class="link"
      href="mailto:team@hackharvard.io">team@hackharvard.io!</a
    >
  </p>
  <div class="px-dynamic mt-10 flex items-center justify-center">
    <div>
      {#each tracks as track}
        <Modal
          class="overflow-hidden rounded-md px-2 transition-transform hover:scale-[1.05]"
          {track}
        >
          <div class="bg-white p-3 dark:bg-secondary-100">
            <div class="text-center">
              <div class="whitespace-pre-line font-bold">{track.name}</div>
            </div>
          </div>
        </Modal>
      {/each}
    </div>
  </div>
</div>
