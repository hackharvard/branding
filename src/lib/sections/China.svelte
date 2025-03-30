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
  
  const teamMembers = [
    {
      name: "Jerry",
      role: "Sophomore",
      focus: "Physics & Math",
      bio: "Hey everyone, my name is Jerry and I'm a sophomore at Harvard studying physics and math. Most of my research experience has been in computational physics and chemistry so feel free to reach out if you have any questions about modeling, data analysis, optimization, or simulation. Outside of science, I'm also interested in policy, economics, history, and geopolitics.",
      image: "/team/Jerry.jpg"
    },
    {
      name: "Sahana",
      role: "Sophomore",
      focus: "Statistics & CS",
      bio: "Hi! My name is Sahana and I am a sophomore at Harvard studying statistics and computer science. I have technical experience in iOS app development, web design, and biostatistical modeling, and business experience in e-commerce and marketing. I've taken coursework in data science and entrepreneurship!",
      image: "/team/Sahana.JPG"
    },
    {
      name: "Hugo",
      role: "Junior",
      focus: "Mathematics",
      bio: "Hi, I am Hugo, a junior at Harvard studying mathematics. I have worked the previous two summers in financial technologies, leveraging Python and C# in data science and data engineering applications. I have a passion for both analyzing and engineering data, having taken various courses in machine learning and data science.",
      image: "/team/Hugo.jpg"
    },
    {
      name: "Ivan",
      role: "Sophomore",
      focus: "CS & Applied Math",
      bio: "I’m Ivan, a sophomore at Harvard studying Computer Science and Applied Mathematics. I’ve spent the last few years exploring CS and education, and have been on staff for CS50, one of the largest massive online open courses in the world, teaching students Python, C, SQL, HTML/CSS/Javascript, and Flask. I’m also an Algorithm Team Lead for Datamatch, a college matchmaking service used by over 16,000 students nationwide. Talk to me about ethical data science or data privacy!",
      image: "/team/Ivan.jpg"
    },
    {
      name: "Yuen Ler",
      role: "Senior",
      focus: "CS & Statistics",
      bio: "I'm Yuen Ler, a senior at Harvard studying Computer Science and Statistics. Hacking is my life—I've competed in nine hackathons so far and won prizes at four of them! I'm also currently co-founder of Finterview, a startup providing AI-driven technical interview screening for finance companies. After graduation, I'll be joining Amazon as a Software Engineer. Always happy to chat about startups, hacking, or anything tech!",
      image: "/team/Yuen Ler.jpeg"
    },
    {
      name: "Kathryn",
      role: "Sophomore",
      focus: "CS",
      bio: "I'm Kathryn, a sophomore at Harvard studying Computer Science. I previously interned as a Software Engineer at Amazon and am actively involved with Harvard's Women in Computer Science. I'm also part of WECode (Women Engineers Code), the world's largest student-run undergraduate tech conference organized by undergraduate women at Harvard University.",
      image: "/team/Kathryn.jpg"
    },
    {
      name: "Jen",
      role: "First-Year",
      focus: "Applied Math & Economics",
      bio: "I'm Jen and I'm a first-year studying Applied Math and Economics. I'm currently involved with research, policy work, and consulting on campus as I'm interested in learning more about challenges in economic development and public policy. I also grew up being involved in running my parents' business so I would be happy to chat about businesses and marketing.",
      image: "/team/Jen.jpeg"
    },
    {
      name: "Luna",
      role: "First-Year",
      focus: "Environmental Engineering",
      bio: "Hi! I’m Luna and I’m a first-year environmental engineering student at Harvard. My passions are sustainability, technology, and entrepreneurship! I was a two-time semifinalist in the international Technovation Challenge for app development and tech entrepreneurship. I’m also an analyst at Harvard Undergraduate Consulting on Business and the Environment, where I advise tech and engineering companies about sustainable strategies.",
      image: "/team/Luna.jpg"
    }
  ];
  
  const tracks = [
    {
      title: "Education",
      icon: "🎓",
      description: "How can we use technology to benefit our education system? Online courses, educational websites, and video call apps have made it possible for students to learn in more convenient ways. This track focuses on platforms that provide students with more educational opportunities using digital methods. Consider entering the Education track if your project provides new ways for students to learn effectively or teaches students about important topics.",
      color: "bg-blue-500"
    },
    {
      title: "Health",
      icon: "🩺",
      description: "How can we use technology to strengthen our healthcare systems? New developments in apps, websites, and sensors can pave the way for better quality healthcare and improved access to medical aid. This track focuses on technologies that improve physical and mental healthcare outcomes, such as telemedicine platforms, health trackers, and more. Consider entering the Health track if your project addresses issues related to medical care access and quality.",
      color: "bg-red-500"
    },
    {
      title: "Climate and Energy",
      icon: "🌱",
      description: "How can we use technology to tackle environmental issues? Innovative solutions in renewable energy, ecosystem conservation, and waste management have been key to addressing pollution and preventing climate disasters. This track focuses on initiatives aimed to protect the Earth's environment by reducing greenhouse gas emissions, cleaning up ecosystems, and more. Consider entering the Climate and Energy track if your project's main goal is to promote sustainability and create a cleaner, healthier environment.",
      color: "bg-green-500"
    },
    {
      title: "Smart Cities",
      icon: "🏙️",
      description: "How can we use technology to enhance today's cities? Smart urban infrastructure has the potential to optimize traffic and transportation, improve power usage, integrate green energy into residents' lives, and more. This track focuses on improvements to urban operations, allowing city centers to function more efficiently and sustainably. Consider entering the Smart Cities track if your project provides a technological solution to a problem encountered in daily city life.",
      color: "bg-purple-500"
    }
  ];
  
  function showTeamMemberModal(member) {
    activeModal = member;
  }
  
  function closeTeamMemberModal() {
    activeModal = null;
  }
  
  function showTrackModal(track) {
    activeTrack = track;
  }
  
  function closeTrackModal() {
    activeTrack = null;
  }
  
  onMount(() => {
    // Set dark mode as default
    if (document.documentElement.classList.contains('dark') === false) {
      document.documentElement.classList.add('dark');
      theme.toggle(); // Update the store to match the UI
    }
    
    ready = true;
  });
</script>

<svelte:window bind:scrollY />

<!-- Navigation Bar -->
<NavChina />

<!-- Hero Section with Parallax -->
<div class="relative h-[70vh] w-full overflow-hidden">
  <img 
    src="/nice_photos/Copy of 606A9181.jpg" 
    alt="HackHarvard China" 
    class="absolute h-full w-full object-cover object-center transform transition-transform duration-500"
    style="transform: translateY({scrollY * 0.15}px);"
  />
  <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="text-center px-6 max-w-4xl mx-auto" style="transform: translateY({-scrollY * 0.08}px);">
      <h1 class="font-lexend text-5xl sm:text-7xl font-bold mb-4 text-white drop-shadow-lg tracking-tighter">
        HackHarvard China
      </h1>
      <p class="font-exo text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
        A collaborative hackathon bringing the spirit of innovation to students in China
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a 
          href="#about" 
          class="bg-white text-black px-6 py-3 rounded-lg font-bold text-lg shadow-xl hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
        >
          Learn More
        </a>
        <button 
          class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold text-lg shadow-xl hover:bg-white hover:bg-opacity-20 transition-all transform hover:-translate-y-1 cursor-not-allowed opacity-90"
          disabled
        >
          Applications Opening Soon
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Main Content -->
<div class="bg-white dark:bg-gray-900 min-h-screen">
  <div class="mx-auto max-w-6xl px-6 py-20">
    <!-- Welcome Section -->
    <section class="mb-24" id="about">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">WELCOME TO HACKHARVARD CHINA</h2>
      
      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          We are delighted to invite you to participate in HackHarvard, Harvard University's premier undergraduate hackathon 
          where the brightest young minds come together to create innovative technological solutions to global challenges.
        </p>
        
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          The <span class="font-semibold">HackHarvard China Challenge</span> will take place <span class="font-semibold">August 25-29, 2025</span> in Shanghai, 
          bringing together talented middle and high school students with industry leaders and academic mentors. Our 
          program features enriching workshops and a 96-hour student-run hackathon, serving as a catalyst for innovation 
          across various domains including healthcare, sustainability, education, and social impact.
        </p>
        
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Participants will develop and showcase their prototypes, receive mentorship from industry experts, and collaborate 
          with talented peers in a dynamic environment. Winning teams will receive awards and the chance to showcase their 
          projects at the next HackHarvard hackathon on the Harvard University campus.
        </p>
        
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          We are thrilled to partner with <span class="font-semibold">High Leap Education (合励教育)</span> for this year's challenge. 
          Together, we aim to empower the next generation of innovators to create impactful solutions for a better future.
        </p>
        
        <p class="text-lg text-gray-700 dark:text-gray-300">
          For more details, contact us at <a href="mailto:china@hackharvard.io" class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">china@hackharvard.io</a>.
          We look forward to welcoming you at the HackHarvard China Challenge!
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="mb-24" id="team">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">MEET THE TEAM</h2>
      
      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          Our team of Harvard students is excited to bring HackHarvard to China and foster collaborative innovation.
        </p>
        
        <!-- Top row (4 team members) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-12">
          {#each teamMembers.slice(0, 4) as member, i (member.name)}
            <div class="flex flex-col items-center text-center">
              <button 
                class="group relative w-32 h-32 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-auto"
                on:click={() => activeModal = i}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  class="w-full h-full object-cover" 
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Bio</span>
                </div>
              </button>
              <h3 class="mt-4 text-lg font-bold text-black dark:text-white">{member.name}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center">{member.role} • {member.focus}</p>
            </div>
          {/each}
        </div>
        
        <!-- Bottom row (4 team members) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {#each teamMembers.slice(4) as member, i (member.name)}
            <div class="flex flex-col items-center text-center">
              <button 
                class="group relative w-32 h-32 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mx-auto"
                on:click={() => activeModal = i + 4}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  class="w-full h-full object-cover" 
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Bio</span>
                </div>
              </button>
              <h3 class="mt-4 text-lg font-bold text-black dark:text-white">{member.name}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center">{member.role} • {member.focus}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Tracks Section -->
    <section class="mb-24" id="tracks">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">TRACKS</h2>
      
      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          Choose from one of our four exciting tracks for your project. Click on each track to learn more.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each tracks as track, i}
            <div 
              class="relative flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 text-center overflow-hidden"
            >
              <div class="absolute top-0 left-0 w-full h-1 {track.color}"></div>
              <div class="text-4xl mb-3">{track.icon}</div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{track.title}</h3>
              <p class="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
                {track.description.split('.')[0]}.
              </p>
              <button 
                class="mt-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                on:click={() => activeTrack = i}
              >
                Learn More
              </button>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Judging Rubric Section -->
    <section class="mb-24" id="rubric">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">JUDGING RUBRIC</h2>
      
      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          Projects will be evaluated based on the following criteria, with each category contributing equally to the final score.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Creativity and Originality</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              20% of total score. Judges will evaluate the uniqueness of your idea and how innovative your approach is to solving the problem.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Technical Complexity</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              20% of total score. Judges will assess the technical challenges overcome and the sophistication of your implementation.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Functionality and Usability</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              20% of total score. Judges will evaluate how well your project works and how intuitive it is to use.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Branding and Business/Social Impact</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              20% of total score. Judges will assess the potential real-world impact of your project and its viability as a business or social innovation.
            </p>
          </div>
        </div>
        
        <div class="mt-6 flex justify-center">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Teamwork and Collaboration</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              20% of total score. Judges will evaluate how well your team collaborated, the roles each member played, and the effectiveness of your teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Schedule Section -->
    <section class="mb-24" id="schedule">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">SCHEDULE OVERVIEW</h2>
      
      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          A 5-day program packed with innovation, learning, and collaboration.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
              <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
              Day 1: Sunday, August 25
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Registration</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Opening Ceremony</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Ice-Breaking & Team Building</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
              <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
              Day 2: Monday, August 26
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Hackathon begins</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Workshops</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Continuous hacking time</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Meals provided</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
              <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
              Day 3: Tuesday, August 27
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Continued hackathon</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Additional workshops</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Meals provided</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
              <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
              Day 4: Wednesday, August 28
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Full day of hacking</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Meals provided</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Last stretch of development</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Day 5 centered with same width -->
        <div class="mt-8 flex justify-center">
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md w-full md:w-[calc(50%-1rem)]">
            <h3 class="font-exo text-xl font-bold mb-4 text-black dark:text-white flex items-center">
              <span class="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
              Day 5: Thursday, August 29
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Hackathon Fair</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Project Presentations</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2">•</span>
                <span>Closing Ceremony</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Workshops Section -->
    <section class="mb-24" id="workshops">
      <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">WORKSHOPS</h2>
      
      <div class="mx-auto max-w-5xl">
        <p class="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Our program offers a variety of workshops designed to help participants build the skills they need for a successful hackathon experience.
          Explore our diverse workshop offerings across different areas of technology and project development.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Programming Fundamentals -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-bold mb-4 text-black dark:text-white">Programming Fundamentals</h3>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6">
              <li>Introduction to Scratch</li>
              <li>Python Basics</li>
              <li>JavaScript Essentials I</li>
              <li>JavaScript Essentials II</li>
              <li>Front-end Development Fundamentals</li>
              <li>Creative Coding with P5.js</li>
            </ul>
            
            <!-- Development Tools -->
            <h3 class="text-xl font-bold mb-4 text-black dark:text-white">Development Tools</h3>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Version Control with GitHub</li>
              <li>Creating and Using APIs</li>
            </ul>
          </div>
          
          <!-- Web & App Development -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-bold mb-4 text-black dark:text-white">Web & App Development</h3>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6">
              <li>Building Web Apps with React</li>
              <li>Mobile App Development with Thunkable</li>
              <li>Creating AI-powered Web Applications</li>
            </ul>
            
            <!-- Data & Machine Learning -->
            <h3 class="text-xl font-bold mb-4 text-black dark:text-white">Data & Machine Learning</h3>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Data Analysis in Python</li>
              <li>Machine Learning Fundamentals</li>
              <li>Advanced Machine Learning Techniques</li>
              <li>Understanding Statistical Models</li>
            </ul>
          </div>
        </div>
        
        <!-- Project Development -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
          <h3 class="text-xl font-bold mb-4 text-center text-black dark:text-white">Project Development</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6 md:mb-0">
              <li>Hackathon Ideation Strategies</li>
              <li>UI/UX Prototyping with Figma</li>
              <li>E-commerce Business Fundamentals</li>
            </ul>
            <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>The Art of the Pitch</li>
              <li>Brand Development Essentials</li>
            </ul>
          </div>
        </div>
        
        <p class="text-lg text-center text-gray-700 dark:text-gray-300">
          Workshop schedules and sign-up information will be provided to registered participants.
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="mb-24" id="faq">
      <FaqChina />
    </section>
    
    <!-- CTA Section -->
    <section class="mb-16" id="call-to-action">
      <div class="bg-gradient-to-r from-blue-500 to-red-500 rounded-3xl shadow-lg p-16 text-center">
        <h2 class="font-exo text-4xl font-bold mb-6 text-white">JOIN US IN CHINA!</h2>
        <p class="text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed">
          Be part of the first-ever HackHarvard event in China. Connect with innovators, learn new skills, 
          and create something amazing together.
        </p>
        <div class="flex justify-center">
          <button 
            class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105 cursor-not-allowed opacity-90"
            disabled
          >
            Applications Opening Soon
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="text-center" id="contact">
      <h2 class="font-exo text-3xl font-bold mb-6 text-black dark:text-white">CONTACT US</h2>
      
      <p class="text-lg mb-10 text-gray-700 dark:text-gray-300">
        Questions? Email us at <a href="mailto:china@hackharvard.io" class="text-blue-600 dark:text-blue-400 hover:underline">china@hackharvard.io</a>
      </p>
    </section>
  </div>
</div>

<!-- Team Member Modals -->
{#each teamMembers as member, i}
  <TeamMemberModal 
    isOpen={activeModal === i}
    name={member.name}
    bio={member.bio}
    image={member.image}
    on:click={() => activeModal = null}
  />
{/each}

<!-- Track Modals -->
{#each tracks as track, i}
  <TrackModal 
    isOpen={activeTrack === i}
    title={track.title}
    description={track.description}
    icon={track.icon}
  />
{/each}

<style>
  /* Custom styles */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
