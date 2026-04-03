<script>
  import { onMount } from 'svelte';
  import NavChina from '../components/NavChina.svelte';
  import TeamMemberModal from '../components/TeamMemberModal.svelte';
  import TrackModal from '../components/TrackModal.svelte';
  import FaqChina from '../sections/FaqChina.svelte';
  import { theme } from '$lib/stores';

  let scrollY;
  let ready = false;
  let activeModal = null;
  let activeTrack = null;
  let workshopCategories = [];

  /**
   * CENTRALIZED CONTENT
   *
   * Edit event details here.
   *
   * - Use null for tracks or workshops if they're not announced yet.
   */
  const siteContent = {
    event: {
      name: 'HackHarvard China',
      theme: 'Designing Tomorrow’s World',
      city: 'Hangzhou',
      venue: null,
      contactEmail: 'china@hackharvard.io',
      applicationStatus: 'soon', // options: 'open', 'closed', 'soon'
      dateRangeLabel: 'August 19–23, 2026',
      workshopHackathonSummary: '2 days of beginner-level workshops followed by a 36-hour hackathon'
    },
    divisions: [
      'Junior High School Division (Grades 8–9)',
      'Senior High School Division (Grades 10–12)'
    ],
    tracks: [
      {
        title: 'Education',
        icon: '🎓',
        description:
          'Digital tools like video calls, interactive apps, online courses, and more have made learning engaging and convenient for students around the globe. How can we use technology to make education even more fun and effective for learners? This track focuses on projects that creatively improve in-school and extracurricular learning experiences for students. Examples include educational games, interactive websites, AI feedback, and more!',
        color: 'bg-blue-500'
      },
      {
        title: 'Safety',
        icon: '🦺',
        description:
          'Children and elderly people are most vulnerable to safety and health risks in our community. How can we use digital tools to monitor and protect these populations? This track focuses on projects that aim to safeguard health and wellbeing. Examples include location trackers, health alert apps, childsafe internet filters, and more!',
        color: 'bg-yellow-500'
      },
      {
        title: 'Sustainability',
        icon: '🌱',
        description:
          'Worsening global climate change means that better environmental protection is necessary for our growing world. How can we use hardware and software to implement sustainable practices and reduce carbon emissions? This track focuses on projects that center sustainable living and manufacturing. Examples include pollution sensors, educational recycling games, energy efficiency trackers, and more!',
        color: 'bg-green-500'
      },
      {
        title: 'Smart Cities',
        icon: '🏙️',
        description:
          'Developing cities today need well-connected infrastructure and smart sensing in order to serve residents efficiently. How can we use sensors and digital tools to make cities more interconnected? This track focuses on projects that aim to automate and improve city infrastructure. Examples include traffic sensors, transportation innovations, solar panel charging, and more!',
        color: 'bg-purple-500'
      }
    ],
    workshops: {
      intro:
        'The first two days of the program feature beginner-friendly workshops designed to help students build confidence before the hackathon begins. Students can choose whether to attend these workshops or compete directly in the hackathon.',
      categories: [],
    },
    scheduleDays: [
      {
        dayNumber: 1,
        title: 'Day 1: Wednesday, August 19',
        items: ['Registration', 'Opening Ceremony', 'Ice-Breaking & Team Building']
      },
      {
        dayNumber: 2,
        title: 'Day 2: Thursday, August 20',
        items: ['Workshops']
      },
      {
        dayNumber: 3,
        title: 'Day 3: Friday, August 21',
        items: ['Workshops', 'Hackathon starts in the evening']
      },
      {
        dayNumber: 4,
        title: 'Day 4: Saturday, August 22',
        items: ['Hackathon']
      },
      {
        dayNumber: 5,
        title: 'Day 5: Sunday, August 23',
        items: ['Hackathon Fair', 'Presentations', 'Closing Ceremony']
      }
    ]
  };

  const teamMembers = [
    {
      name: 'Luna Yin',
      role: 'Sophomore',
      focus: 'Environmental Science & CS',
      bio: 'Hi! I’m Luna and I’m a sophomore at Harvard studying environmental science and engineering. My research focuses on measuring and modeling greenhouse gas emissions using remote sensors on airplanes and satellites. I have a strong background in environmental science, data analysis, and app development. I also work with environmental policy and entrepreneurship from my involvement in business consulting. Come chat with me if you’re interested in anything related to environmental technology!',
      image: '/team/luna-yin.jpg'
    },
    {
      name: 'Neeraja Kumar',
      role: 'Junior',
      focus: 'Government & South Asian Studies',
      bio: 'Hi! I am a junior studying government and South Asian studies with a focus on the intersection of historical government systems and poetry. Outside of this, I also am co-president of Women in Entrepreneurship where I encourage and run events related to female entrepreneurship. I have competed in a few hackathons myself, focusing on the building and prototyping part of projects. I previously was on the Marketing Team for HackHarvard 2025, volunteered with HackHarvard Turkey, and am so excited to be helping with HackHarvard China this year!',
      image: '/team/neeraja-kumar.jpg'
    },
    {
      name: 'Jen Guo',
      role: 'Sophomore',
      focus: 'Applied Math in Economics',
      bio: "Hi! I'm Jen, a sophomore at Harvard studying Applied Mathematics on the Economics track, with a strong interest in business strategy, data, and economics. I've done economics research—especially development economics—and have explored these interests through research on global investment and infrastructure projects. Outside of class I'm also interested in learning languages, traveling, and politics.",
      image: '/team/jen-guo.jpeg'
    },
    {
      name: 'Michelle Weon',
      role: 'Sophomore',
      focus: 'CS & Statistics',
      bio: 'Hello! I am a sophomore at Harvard College studying computer science and statistics and the Director of Hacker Experience at HackHarvard. My past experience specialized in AI research for neurodegenerative disease diagnostics, specifically ML algorithms to diagnose Parkinson’s severity, and software engineering for aerospace modeling programs. I currently love building for early stage startups ranging from edtech to fintech and doing research for robotics and AI safety. I’m comfortable with developing full-stack and producing end-to-end products, so come talk to me about anything during the hackathon. I am excited to meet everyone!',
      image: '/team/michelle-weon.png'
    },
    {
      name: 'Kelly Olmos',
      role: 'Junior',
      focus: 'Applied Math & Statistics',
      bio: "Hi, my name is Kelly and I'm a junior at Harvard studying Applied Math and Statistics. My experience spans applied AI research, political data science and election forecasting, and full-stack product development. I'm interested in entrepreneurship and startups as well. On the technical side, talk to me about data modeling, statistical analysis, and ML pipelines.",
      image: '/team/kelly-olmos.png'
    },
    {
      name: 'Eric Gong',
      role: 'Junior',
      focus: 'Computer Science',
      bio: 'Hey everyone! I’m Eric, a Junior at Harvard studying Computer Science, while dabbling in Philosophy on the side. I’m currently a researcher with the Harvard Kennedy School, examining the applications of AI in the polling industry, and political policy at large! Outside of courses I enjoy hiking and exploring the great outdoors!',
      image: '/team/eric-gong.jpg'
    },
    {
      name: 'Yurui Zi',
      role: 'Junior',
      focus: 'Rationality & Decision Theory',
      bio: 'Hi everyone, my name is Yurui, and I’m a junior at Harvard College. I study a self-designed concentration called Rationality and Decision Theory, which explores the foundations of how both human and artificial minds reason and make judgments under uncertainty. I conduct research at the Kempner Institute for the Study of Natural and Artificial Intelligence on decision making through a meta-Bayesian lens. Outside of research, I’m active in the technology startup ecosystem as a VC Scout at Andreessen Horowitz (a16z), where I invest in high-conviction pre-seed companies. Feel free to ask me about storytelling and pitching, refining your ideas, prediction markets, and problem framing!',
      image: '/team/yurui-zi.jpg'
    }
  ];

  const fallbackTracks = [
    { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' },
    { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' },
    { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' },
    { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' }
  ];

  function displayValue(value, fallback = 'TBD') {
    return value ?? fallback;
  }

  function isTBD(value) {
    return value === null || value === undefined || value === '';
  }

  function applicationStatusLabel(status) {
    const labels = {
      open: 'Applications Open',
      closed: 'Applications Closed',
      soon: 'Opening Soon'
    };

    return labels[status] ?? 'Status TBD';
  }

  function getTrackSummary(track) {
    if (isTBD(track?.description)) return 'TBD';

    const firstSentence = track.description.split('.')[0]?.trim();
    return firstSentence ? `${firstSentence}.` : 'TBD';
  }

  function normalizedItems(items) {
    if (!items || items.length === 0) return ['TBD'];

    const filtered = items.filter((item) => !isTBD(item));
    return filtered.length > 0 ? filtered : ['TBD'];
  }

  function normalizedTracks(tracks) {
    return Array.isArray(tracks) && tracks.length > 0 ? tracks : fallbackTracks;
  }

  function normalizedWorkshopCategories(categories) {
    if (!Array.isArray(categories) || categories.length === 0) {
      return [
        { title: 'Workshop Category TBD', items: ['TBD'] }
      ];
    }

    return categories.map((category) => ({
      title: displayValue(category?.title, 'Workshop Category TBD'),
      items: normalizedItems(category?.items)
    }));
  }

  $: workshopCategories = normalizedWorkshopCategories(siteContent.workshops?.categories);

  function closeTeamMemberModal() {
    activeModal = null;
  }

  function closeTrackModal() {
    activeTrack = null;
  }

  onMount(() => {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      theme.toggle();
    }

    ready = true;
  });
</script>

<svelte:window bind:scrollY />

<NavChina />

<div class="relative h-[70vh] w-full overflow-hidden">
  <img
    src="/nice_photos/Copy of 606A9181.jpg"
    alt={siteContent.event.name}
    class="absolute h-full w-full object-cover object-center transform transition-transform duration-500"
    style="transform: translateY({scrollY * 0.15}px);"
  />
  <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="text-center px-6 max-w-4xl mx-auto" style="transform: translateY({-scrollY * 0.08}px);">
      <h1 class="font-lexend text-5xl sm:text-7xl font-bold mb-4 text-white drop-shadow-lg tracking-tighter">
        {siteContent.event.name}
      </h1>
      <p class="font-exo text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
        {displayValue(siteContent.event.theme)}
      </p>
      <p class="font-exo text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
        {displayValue(siteContent.event.dateRangeLabel)} • {displayValue(siteContent.event.city)}
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#about"
          class="bg-white text-black px-6 py-3 rounded-lg font-bold text-lg shadow-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
        >
          Learn More
        </a>
        <span
          class="bg-transparent border-2 border-white text-white/70 px-6 py-3 rounded-lg font-bold text-lg shadow-xl transition-all cursor-default"
          aria-hidden="true"
        >
          {applicationStatusLabel(siteContent.event.applicationStatus)}
        </span>
      </div>
    </div>
  </div>
</div>

<div class="bg-white dark:bg-gray-900 min-h-screen">
  <div class="mx-auto max-w-6xl px-6 py-20">
    <section class="mb-24" id="about">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">WELCOME TO HACKHARVARD CHINA</h2>

      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          We are delighted to invite students to participate in HackHarvard China, a collaborative hackathon experience designed to inspire the next generation of builders, problem-solvers, and entrepreneurs.
        </p>

        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          The <span class="font-semibold">HackHarvard China Challenge</span> will take place <span class="font-semibold">{displayValue(siteContent.event.dateRangeLabel)}</span> in <span class="font-semibold">{displayValue(siteContent.event.city)}</span>, with the specific venue <span class="font-semibold">{displayValue(siteContent.event.venue, 'to be announced')}</span>. This year’s theme is <span class="font-semibold">{displayValue(siteContent.event.theme)}</span>.
        </p>

        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          The program features a <span class="font-semibold">5-day event</span> including <span class="font-semibold">{displayValue(siteContent.event.workshopHackathonSummary)}</span>. Students may choose whether to attend the workshop portion or compete directly in the hackathon.
        </p>

        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Participants may register in one of two divisions: <span class="font-semibold">{displayValue(siteContent.divisions?.[0])}</span> and <span class="font-semibold">{displayValue(siteContent.divisions?.[1])}</span>.
        </p>

        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Teams will build projects across four challenge areas: education, safety, sustainability, and smart cities. Throughout the program, participants will learn new technical skills, collaborate with peers, and present their ideas at the final hackathon fair.
        </p>

        <p class="text-lg text-gray-700 dark:text-gray-300">
          For more details, contact us at <a href={`mailto:${siteContent.event.contactEmail}`} class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">{displayValue(siteContent.event.contactEmail)}</a>.
        </p>
      </div>
    </section>

    <section class="mb-24" id="team">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">
        MEET THE TEAM
      </h2>

      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          Our team of Harvard students is excited to bring HackHarvard to China and foster collaborative innovation.
        </p>

        <div class="flex flex-wrap justify-center gap-8">
          {#each teamMembers as member, i (member.name)}
            <div class="flex flex-col items-center text-center w-full sm:w-[45%] md:w-[22%] max-w-[160px]">
              <button
                class="group relative w-32 h-32 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-auto"
                on:click={() => (activeModal = i)}
              >
                <img src={member.image} alt={member.name} class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Bio
                  </span>
                </div>
              </button>

              <h3 class="mt-4 text-lg font-bold text-black dark:text-white">{member.name}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center">{member.role} • {member.focus}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section class="mb-24" id="tracks">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">TRACKS</h2>

      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          Choose from one of our four challenge tracks for your project. Click on each track to learn more.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each normalizedTracks(siteContent.tracks) as track, i}
            <div class="relative flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 text-center overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 {displayValue(track.color, 'bg-gray-400')}"></div>
              <div class="text-4xl mb-3">{displayValue(track.icon, '📌')}</div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{displayValue(track.title, 'Track TBD')}</h3>
              <p class="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">{getTrackSummary(track)}</p>
              <button
                class="mt-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                on:click={() => (activeTrack = i)}
              >
                Learn More
              </button>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section class="mb-24" id="schedule">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">TENTATIVE SCHEDULE</h2>

      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          The first two days feature beginner-level workshops, followed by a 36-hour hackathon.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each siteContent.scheduleDays.slice(0, 4) as day}
            <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
                <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">{day.dayNumber}</span>
                {day.title}
              </h3>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                {#each normalizedItems(day.items) as item}
                  <li class="flex items-start"><span class="text-red-500 mr-2">•</span><span>{item}</span></li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>

        <div class="mt-8 flex justify-center">
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md w-full md:w-[calc(50%-1rem)]">
            <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
              <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">{siteContent.scheduleDays[4].dayNumber}</span>
              {siteContent.scheduleDays[4].title}
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              {#each normalizedItems(siteContent.scheduleDays[4].items) as item}
                <li class="flex items-start"><span class="text-red-500 mr-2">•</span><span>{item}</span></li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-24" id="workshops">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">WORKSHOPS</h2>

      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-gray-700 dark:text-gray-300">
          {displayValue(siteContent.workshops?.intro)}
        </p>

        <div class="flex flex-wrap justify-center gap-8 mb-8">
          {#each workshopCategories as category, i (`${category.title}-${i}`)}
            <div class="w-full md:w-[calc(50%-1rem)] bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-bold mb-4 text-black dark:text-white">{category.title}</h3>
              <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {#each category.items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>

        <p class="text-lg text-center text-gray-700 dark:text-gray-300">
          Workshop schedules and sign-up information will be provided to registered participants.
        </p>
      </div>
    </section>

    <section class="mb-24" id="faq">
      <FaqChina />
    </section>

    <section class="mb-16" id="call-to-action">
      <div class="bg-gradient-to-r from-blue-500 to-red-500 rounded-3xl shadow-lg p-16 text-center">
        <h2 class="font-exo text-4xl font-bold mb-6 text-white">JOIN US IN {displayValue(siteContent.event.city).toUpperCase()}!</h2>
        <p class="text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed">
          Join a 5-day program of workshops, collaboration, and a 36-hour hackathon as students build solutions for tomorrow’s world.
        </p>
        <div class="flex justify-center">
          <span
            class="bg-white/40 text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform cursor-default"
            aria-hidden="true"
          >
            {applicationStatusLabel(siteContent.event.applicationStatus)}
          </span>
        </div>
      </div>
    </section>

    <section class="text-center" id="contact">
      <h2 class="font-exo text-3xl font-bold mb-6 text-black dark:text-white">CONTACT US</h2>

      <p class="text-lg mb-10 text-gray-700 dark:text-gray-300">
        Questions? Email us at <a href={`mailto:${siteContent.event.contactEmail}`} class="text-blue-600 dark:text-blue-400 hover:underline">{displayValue(siteContent.event.contactEmail)}</a>
      </p>

      {#if isTBD(siteContent.event.venue)}
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Venue details will be announced later.
        </p>
      {/if}
    </section>
  </div>
</div>

{#each teamMembers as member, i}
  <TeamMemberModal
    isOpen={activeModal === i}
    name={member.name}
    bio={member.bio}
    image={member.image}
    on:click={closeTeamMemberModal}
  />
{/each}

{#each normalizedTracks(siteContent.tracks) as track, i}
  <TrackModal
    isOpen={activeTrack === i}
    title={displayValue(track.title, 'Track TBD')}
    description={displayValue(track.description)}
    icon={displayValue(track.icon, '📌')}
    on:click={closeTrackModal}
  />
{/each}

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>