import React from 'react'

const items = [
  {
    title: 'What are tracks?',
    description:
      'Tracks are areas of focus that you may choose to hack in. If you submit your project to a track, you are eligible to win the track-specific prize.'
  },
  {
    title: 'Will there be swag and prizes?',
    description:
      'Of course! We will be shipping swag to all participants who submit a project, as well as prizes to all winning projects.'
  },
  {
    title: 'Do I have to submit to a track?',
    description: 'No, you can submit a project that is unrelated to the tracks provided.'
  },
  {
    title: 'Do I have to submit a project?',
    description:
      'You do not have to submit a project, though we highly recommend you do! You will not be eligible to receive swag if you do not submit a project.'
  }
]

export default function Tracks() {
  return (
    <div className="p-dynamic bg-purple-100 dark:bg-secondary">
      <div className="py-20 text-center">
        <h1 className="text-center text-5xl font-bold uppercase sm:text-7xl">Tracks & Prizes</h1>
        <div className="mx-auto mt-12 max-w-4xl sm:px-6 md:px-12">
          <div className="space-y-5 rounded-lg bg-white p-8 transition-all duration-300 hover:shadow-purple-500">
            {items.map(item => (
              <div key={item.title}>
                <h3 className="text-2xl font-semibold text-red-700">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
