import React, { useEffect, useMemo, useState } from 'react'
import { useTheme } from '../lib/context/ThemeContext'
import NavChina from '../lib/components/NavChina'
import TeamMemberModal from '../lib/components/TeamMemberModal'
import TrackModal from '../lib/components/TrackModal'
import FaqChina from '../lib/sections/FaqChina'
import Footer from '../lib/components/Footer'

const siteContent = {
  event: {
    name: 'HackHarvard China',
    theme: 'Designing Tomorrow’s World',
    city: 'Hangzhou',
    venue: null,
    contactEmail: 'china@hackharvard.io',
    applicationStatus: 'open',
    dateRangeLabel: 'August 21–23, 2026',
    workshopHackathonSummary: 'a 36-hour hackathon with optional pre-event workshops'
  },
  divisions: [
    'Junior High School Division (Grades 8–9)',
    'Senior High School Division (Grades 10–12)',
    'University Student Division'
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
    },
    {
      title: 'Mysterious Track',
      icon: '❓',
      description: 'To be announced on-site.',
      color: 'bg-gray-500'
    }
  ],
  workshops: {
    intro:
      'Pre-event beginner-friendly workshops are available to help students build confidence before the hackathon begins. Students can choose whether to attend these workshops or compete directly in the hackathon.',
    categories: [
      {
        title: 'Technical Workshops',
        items: [
          'Intro to Python',
          'Intro to Javascript',
          'Front-End Development',
          'How to Use GitHub',
          'Coding with AI',
          'High-Level Intro to AI Tech'
        ]
      },
      {
        title: 'Business & Product Workshops',
        items: ['Brand/Business Development', 'What is an MVP?']
      }
    ]
  },
  scheduleDays: [
    {
      dayNumber: 1,
      title: 'Day 1: Thursday, August 21',
      items: [
        'Registration',
        'Opening Ceremony',
        'Ice-Breaking & Team Building',
        'Hackathon begins'
      ]
    },
    { dayNumber: 2, title: 'Day 2: Friday, August 22', items: ['Hackathon'] },
    {
      dayNumber: 3,
      title: 'Day 3: Saturday, August 23',
      items: ['Hackathon Fair', 'Presentations', 'Closing Ceremony']
    }
  ]
}

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
]

const fallbackTracks = [
  { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' },
  { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' },
  { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' },
  { title: 'Track TBD', icon: '📌', description: null, color: 'bg-gray-400' }
]

function displayValue(value, fallback = 'TBD') {
  return value ?? fallback
}

function isTBD(value) {
  return value === null || value === undefined || value === ''
}

function applicationStatusLabel(status) {
  const labels = {
    open: 'Register Now',
    closed: 'Applications Closed',
    soon: 'Opening Soon'
  }

  return labels[status] ?? 'Status TBD'
}

function getTrackSummary(track) {
  if (isTBD(track?.description)) return 'TBD'
  const firstSentence = track.description.split('.')[0]?.trim()
  return firstSentence ? `${firstSentence}.` : 'TBD'
}

function normalizedItems(items) {
  if (!items || items.length === 0) return ['TBD']
  const filtered = items.filter(item => !isTBD(item))
  return filtered.length > 0 ? filtered : ['TBD']
}

function normalizedTracks(tracks) {
  return Array.isArray(tracks) && tracks.length > 0 ? tracks : fallbackTracks
}

function normalizedWorkshopCategories(categories) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return [{ title: 'Workshop Category TBD', items: ['TBD'] }]
  }

  return categories.map(category => ({
    title: displayValue(category?.title, 'Workshop Category TBD'),
    items: normalizedItems(category?.items)
  }))
}

export default function ChinaPage() {
  const { setTheme } = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [activeModal, setActiveModal] = useState(null)
  const [activeTrack, setActiveTrack] = useState(null)

  const workshopCategories = useMemo(
    () => normalizedWorkshopCategories(siteContent.workshops?.categories),
    []
  )

  const tracks = useMemo(() => normalizedTracks(siteContent.tracks), [])

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <NavChina />

      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/hhcc-2025-photos/6H4A9012-opq3938684948.jpg"
          alt={siteContent.event.name}
          className="absolute h-full w-full object-cover object-center transition-transform duration-500"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            className="mx-auto max-w-4xl text-center"
            style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
          >
            <h1 className="mb-4 font-lexend text-5xl font-bold tracking-tighter text-white drop-shadow-lg sm:text-7xl">
              {siteContent.event.name}
            </h1>
            <p className="mx-auto mb-4 max-w-3xl font-exo text-xl text-white/90 sm:text-2xl">
              {displayValue(siteContent.event.theme)}
            </p>
            <p className="mx-auto mb-8 max-w-3xl font-exo text-lg text-white/80 sm:text-xl">
              {displayValue(siteContent.event.dateRangeLabel)} •{' '}
              {displayValue(siteContent.event.city)}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#about"
                className="transform rounded-lg bg-white px-6 py-3 text-lg font-bold text-black shadow-xl transition-all hover:-translate-y-1 hover:bg-opacity-90"
              >
                Learn More
              </a>
              <a
                href="https://jinshuju.com/f/aHsacU"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-lg border-2 border-white bg-transparent px-6 py-3 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                {applicationStatusLabel(siteContent.event.applicationStatus)}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <section className="mb-24" id="about">
            <h2 className="mb-10 text-center font-exo text-3xl font-bold text-black dark:text-white">
              WELCOME TO HACKHARVARD CHINA
            </h2>
            <div className="mx-auto max-w-5xl">
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                We are delighted to invite students to participate in HackHarvard China, a
                collaborative hackathon experience designed to inspire the next generation of
                builders, problem-solvers, and entrepreneurs.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                We are thrilled to partner with{' '}
                <span className="font-semibold">High Leap Education (合励教育)</span> to host this
                year's HackHarvard China Challenge. Together, we aim to inspire and empower the next
                generation of innovators to create impactful solutions for a better future.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                The <span className="font-semibold">HackHarvard China Challenge</span> will take
                place{' '}
                <span className="font-semibold">
                  {displayValue(siteContent.event.dateRangeLabel)}
                </span>{' '}
                in <span className="font-semibold">{displayValue(siteContent.event.city)}</span>,
                with the specific venue{' '}
                <span className="font-semibold">
                  {displayValue(siteContent.event.venue, 'to be announced')}
                </span>
                . This year’s theme is{' '}
                <span className="font-semibold">{displayValue(siteContent.event.theme)}</span>.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                The program features a <span className="font-semibold">3-day event</span> including{' '}
                <span className="font-semibold">
                  {displayValue(siteContent.event.workshopHackathonSummary)}
                </span>
                . Students may choose whether to attend the workshop portion or compete directly in
                the hackathon.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                Participants may register in one of three divisions:{' '}
                <span className="font-semibold">{displayValue(siteContent.divisions?.[0])}</span>,{' '}
                <span className="font-semibold">{displayValue(siteContent.divisions?.[1])}</span>,
                and{' '}
                <span className="font-semibold">{displayValue(siteContent.divisions?.[2])}</span>.
                The university student division will have separate evaluation and awarding.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                Teams will build projects across five challenge areas: education, safety,
                sustainability, smart cities, and a mysterious track to be announced on-site.
                Throughout the program, participants will learn new technical skills, collaborate
                with peers, and present their ideas at the final hackathon fair.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                For more details, contact us at{' '}
                <a
                  href={`mailto:${siteContent.event.contactEmail}`}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  {displayValue(siteContent.event.contactEmail)}
                </a>
                .
              </p>
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                <img
                  src="/hhcc-2025-photos/6H4A8346-opq3938371465.jpg"
                  alt="Students presenting their project"
                  className="h-48 w-full rounded-xl object-cover shadow-md"
                />
                <img
                  src="/hhcc-2025-photos/6H4A7728-opq3937681256.jpg"
                  alt="Mentors helping a team"
                  className="h-48 w-full rounded-xl object-cover shadow-md"
                />
                <img
                  src="/hhcc-2025-photos/6H4A5243-opq3934441521.jpg"
                  alt="Students working on laptops"
                  className="h-48 w-full rounded-xl object-cover shadow-md"
                />
                <img
                  src="/hhcc-2025-photos/6H4A9871-opq3932202593.jpg"
                  alt="Mentor guiding students"
                  className="h-48 w-full rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
          </section>

          <section className="mb-24" id="team">
            <h2 className="mb-10 text-center font-exo text-3xl font-bold text-black dark:text-white">
              MEET THE TEAM
            </h2>
            <div className="mx-auto max-w-5xl">
              <p className="mb-8 text-center text-lg text-gray-700 dark:text-gray-300">
                Our team of Harvard students is excited to bring HackHarvard to China and foster
                collaborative innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member, i) => (
                  <div
                    key={member.name}
                    className="flex w-full max-w-[160px] flex-col items-center text-center sm:w-[45%] md:w-[22%]"
                  >
                    <button
                      type="button"
                      className="group relative mx-auto h-32 w-32 overflow-hidden rounded-full transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={() => setActiveModal(i)}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20">
                        <span className="font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          View Bio
                        </span>
                      </div>
                    </button>
                    <h3 className="mt-4 text-lg font-bold text-black dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      {member.role} • {member.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-24" id="tracks">
            <h2 className="mb-10 text-center font-exo text-3xl font-bold text-black dark:text-white">
              TRACKS
            </h2>
            <div className="mx-auto max-w-5xl">
              <p className="mb-8 text-center text-lg text-gray-700 dark:text-gray-300">
                Choose from one of our five challenge tracks for your project. Click on each track
                to learn more.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {tracks.map((track, i) => (
                  <div
                    key={track.title + i}
                    className="relative flex flex-col items-center overflow-hidden rounded-xl bg-gray-50 p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
                  >
                    <div
                      className={`absolute left-0 top-0 h-1 w-full ${displayValue(
                        track.color,
                        'bg-gray-400'
                      )}`}
                    />
                    <div className="mb-3 text-4xl">{displayValue(track.icon, '📌')}</div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {displayValue(track.title, 'Track TBD')}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-gray-700 dark:text-gray-300">
                      {getTrackSummary(track)}
                    </p>
                    <button
                      type="button"
                      className="mt-auto rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={() => setActiveTrack(i)}
                    >
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-24" id="schedule">
            <h2 className="mb-10 text-center font-exo text-3xl font-bold text-black dark:text-white">
              TENTATIVE SCHEDULE
            </h2>
            <div className="mx-auto max-w-5xl">
              <p className="mb-8 text-center text-lg text-gray-700 dark:text-gray-300">
                Pre-event workshops are available before the hackathon, followed by a 36-hour
                hackathon.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {siteContent.scheduleDays.slice(0, 2).map(day => (
                  <div
                    key={day.title}
                    className="rounded-xl bg-gray-50 p-8 shadow-md dark:bg-gray-800"
                  >
                    <h3 className="mb-4 flex items-center font-exo text-xl font-bold text-black dark:text-white">
                      <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                        {day.dayNumber}
                      </span>
                      {day.title}
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {normalizedItems(day.items).map(item => (
                        <li key={item} className="flex items-start">
                          <span className="mr-2 text-red-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-full rounded-xl bg-gray-50 p-8 shadow-md dark:bg-gray-800 md:w-[calc(50%-1rem)]">
                  <h3 className="mb-4 flex items-center font-exo text-xl font-bold text-black dark:text-white">
                    <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                      {siteContent.scheduleDays[2].dayNumber}
                    </span>
                    {siteContent.scheduleDays[2].title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {normalizedItems(siteContent.scheduleDays[2].items).map(item => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 text-red-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="-mx-6 mb-24 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/hhcc-2025-photos/6H4A9112-opq3931583475.jpg"
              alt="HackHarvard China Challenge"
              className="h-64 w-full object-cover md:h-80"
            />
          </div>

          <section className="mb-24" id="workshops">
            <h2 className="mb-10 text-center font-exo text-3xl font-bold text-black dark:text-white">
              WORKSHOPS
            </h2>
            <div className="mx-auto max-w-5xl">
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
                {displayValue(siteContent.workshops?.intro)}
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-8">
                {workshopCategories.map(category => (
                  <div
                    key={category.title}
                    className="w-full rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-800 md:w-[calc(50%-1rem)]"
                  >
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                      {category.title}
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
                      {category.items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                Workshop schedules and sign-up information will be provided to registered
                participants.
              </p>
            </div>
          </section>

          <div className="-mx-6 mb-24 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/hhcc-2025-photos/6H4A8729-opq3938610977.jpg"
              alt="HackHarvard China awards and medals"
              className="h-64 w-full object-cover md:h-80"
            />
          </div>

          <section className="mb-24" id="faq">
            <FaqChina />
          </section>

          <section className="mb-16" id="call-to-action">
            <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-red-500 p-16 text-center shadow-lg">
              <h2 className="mb-6 font-exo text-4xl font-bold text-white">
                JOIN US IN {displayValue(siteContent.event.city).toUpperCase()}!
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90">
                Join a 3-day program of collaboration and a 36-hour hackathon as students build
                solutions for tomorrow’s world.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://jinshuju.com/f/aHsacU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-800 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  {applicationStatusLabel(siteContent.event.applicationStatus)}
                </a>
              </div>
            </div>
          </section>

          <section className="text-center" id="contact">
            <h2 className="mb-6 font-exo text-3xl font-bold text-black dark:text-white">
              CONTACT US
            </h2>
            <p className="mb-10 text-lg text-gray-700 dark:text-gray-300">
              Questions? Email us at{' '}
              <a
                href={`mailto:${siteContent.event.contactEmail}`}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {displayValue(siteContent.event.contactEmail)}
              </a>
            </p>
            {isTBD(siteContent.event.venue) && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Venue details will be announced later.
              </p>
            )}
          </section>
        </div>
      </div>

      {teamMembers.map((member, i) => (
        <TeamMemberModal
          key={member.name}
          isOpen={activeModal === i}
          name={member.name}
          bio={member.bio}
          image={member.image}
          onClose={() => setActiveModal(null)}
        />
      ))}

      {tracks.map((track, i) => (
        <TrackModal
          key={track.title + i}
          isOpen={activeTrack === i}
          title={displayValue(track.title, 'Track TBD')}
          description={displayValue(track.description)}
          icon={displayValue(track.icon, '📌')}
          onClose={() => setActiveTrack(null)}
        />
      ))}

      <Footer />
    </div>
  )
}
