import React from 'react'
import Disclosure from '../components/Disclosure'

const generalFaq = [
  {
    question: 'What is HackHarvard?',
    answer:
      'HackHarvard is an annual collegiate hackathon (i.e. coding competition) that brings together students from around the world to collaborate and create innovative projects related to hardware, software, computer coding, and more. Learn more here.'
  },
  {
    question: 'When is HackHarvard?',
    answer: 'October 3-5, 2025.'
  },
  {
    question: 'How much does HackHarvard cost?',
    answer:
      'HackHarvard is free to attend! In addition to hacking, you’ll have the opportunity to participate in workshops, work with mentors, network with prominent company representatives, collect swag, and more!'
  },
  {
    question: "What if I've never hacked before?",
    answer:
      'That’s okay! HackHarvard offers beginner workshops specifically designed to help you dive into the world of hacking. There will be plenty of other introductory hackers and it’ll be a great opportunity to learn.'
  },
  {
    question: 'What will I get out of attending HackHarvard?',
    answer:
      'HackHarvard will provide a space for hackers to meet and learn from like-minded, enthusiastic participants and experienced individuals who’ve worked in-industry. You’ll have the opportunity to gain both practical experience when it comes to designing and creating products, as well as a robust network of friends and mentors that can accompany you on your coding journey!'
  },
  {
    question: 'How do I get to HackHarvard?',
    answer:
      'Our venue is located at the Student Organization Center at Hilles, 59 Shepard St, Cambridge, MA 02138. HackHarvard does not provide transport, so participants will have to make their own travel plans.'
  },
  {
    question: 'Will I be reimbursed for travel?',
    answer:
      'Most likely not. If any funding does open up, you will be notified after your acceptance.'
  },
  {
    question: 'Is HackHarvard in-person?',
    answer:
      'Yes. The event is entirely in person. Please plan to be in Cambridge, MA for the entire duration.'
  },
  {
    question: 'How does an in-person hackathon work?',
    answer:
      'Located at Harvard’s Student Organization Center at Hilles (SOCH), HackHarvard will provide food for all meals from Friday’s dinner to Sunday’s breakfast. We will try our best to accommodate all dietary restrictions. Hackers will also be provided spaces to sleep in the SOCH.'
  }
]

const applyFaq = [
  {
    question: 'When is the application deadline?',
    answer:
      'The early application deadline was August 31, 2025. The regular application deadline is September 14, 2025.'
  },
  {
    question: 'Am I eligible to apply?',
    answer:
      'As long as you are a student at any accredited college or university in the world, are 18 or older, and are currently pursuing an undergraduate degree, you are invited to apply to HackHarvard!'
  }
]

const teamsFaq = [
  {
    question: "What if I don't have a team?",
    answer:
      'If you do not have a team yet, don’t sweat it. There will be several events and communications channels geared towards facilitating team formation and project ideation. We will help you find people to work with!'
  },
  {
    question: 'How do teams work?',
    answer:
      'Each team consists of a maximum of four members. However, all teammates must submit individual applications and all applications will be evaluated individually, regardless of your intended team.'
  }
]

const hackathonFaq = [
  {
    question: 'What are tracks?',
    answer:
      'Tracks are areas of focus that you may choose to hack in. If you submit your project to a track, you are eligible to win the track-specific prize. Tracks will be released on hackathon day.'
  },
  {
    question: 'Will there be swag and prizes?',
    answer:
      'Of course! We will be giving away swag to all participants who submit a project, as well as prizes to all winning projects.'
  },
  {
    question: 'Do I have to submit to a track?',
    answer: 'No, you can submit a project that is unrelated to the tracks provided.'
  },
  {
    question: 'Is there a code of conduct?',
    answer:
      'All participants are expected to follow the MLH Code of Conduct throughout the duration of the conference.'
  }
]

export default function Faq() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="p-dynamic bg-color flex justify-center bg-faq bg-cover" id="faq">
        <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-black">
          <div>
            <h1 className="font-exo text-4xl uppercase text-red-700 sm:text-5xl">FAQ</h1>
            <p className="mt-5 text-sm font-bold text-blue-900 dark:text-blue-200">
              What if my question is not here?
            </p>
            <p className="text-sm">
              Please email us at{' '}
              <a className="link" href="mailto:team@hackharvard.io">
                team@hackharvard.io
              </a>{' '}
              and we'll get back to you ASAP!
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-exo text-2xl text-red-700 sm:text-3xl">GENERAL</h3>
              {generalFaq.map(item => (
                <Disclosure key={item.question} title={item.question}>
                  {item.answer}
                </Disclosure>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-exo text-2xl text-red-700 sm:text-3xl">APPLY</h3>
              {applyFaq.map(item => (
                <Disclosure key={item.question} title={item.question}>
                  {item.answer}
                </Disclosure>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-exo text-2xl text-red-700 sm:text-3xl">TEAMS</h3>
              {teamsFaq.map(item => (
                <Disclosure key={item.question} title={item.question}>
                  {item.answer}
                </Disclosure>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-exo text-2xl uppercase text-red-700 sm:text-3xl">Hackathon</h3>
              {hackathonFaq.map(item => (
                <Disclosure key={item.question} title={item.question}>
                  {item.answer}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
