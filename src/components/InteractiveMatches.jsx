'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const sampleMatches = [
  {
    id: '1',
    title: 'Café Lumière',
    subtitle: 'French Bistro',
    category: 'FOOD',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    matchedBy: [
      { name: 'Sarah', initials: 'SK', color: '#9ca0c8' },
      { name: 'Mike', initials: 'MJ', color: '#5b5c71' },
      { name: 'Emma', initials: 'ER', color: '#373854' },
    ],
  },
  {
    id: '2',
    title: 'The Jazz Lounge',
    subtitle: 'Live Music Venue',
    category: 'LIVE',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    matchedBy: [
      { name: 'Sarah', initials: 'SK', color: '#9ca0c8' },
      { name: 'Mike', initials: 'MJ', color: '#5b5c71' },
      { name: 'Emma', initials: 'ER', color: '#373854' },
      { name: 'Alex', initials: 'AT', color: '#9ca0c8' },
    ],
  },
  {
    id: '3',
    title: 'Sunset Park',
    subtitle: 'Outdoor Recreation',
    category: 'ACTIVITIES',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    matchedBy: [
      { name: 'Sarah', initials: 'SK', color: '#9ca0c8' },
      { name: 'Mike', initials: 'MJ', color: '#5b5c71' },
    ],
  },
]

export function InteractiveMatches() {
  const [selectedMatch, setSelectedMatch] = useState(null)

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Matched Places</h3>
        <p className="mt-1 text-xs text-gray-600">
          {sampleMatches.length} places everyone wants to visit
        </p>
      </div>

      {/* Matches List */}
      <div className="space-y-2.5">
        {sampleMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-full overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
              <button
                onClick={() => setSelectedMatch(match.id === selectedMatch ? null : match.id)}
                className="w-full text-left"
              >
                <div className="flex gap-3 p-3">
                  {/* Image */}
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={match.image}
                      alt={match.title}
                      className="h-full w-full object-cover"
                    />
                    {/* Category Badge */}
                    <div className="absolute bottom-1.5 left-1.5 rounded bg-brand-accent px-1.5 py-0.5">
                      <span className="text-[9px] font-semibold uppercase tracking-wide text-white">
                        {match.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{match.title}</h4>
                      <p className="mt-0.5 text-xs text-gray-600">{match.subtitle}</p>
                    </div>

                    {/* Matched By */}
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="flex -space-x-1">
                        {match.matchedBy.slice(0, 3).map((person, i) => (
                          <div
                            key={i}
                            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white"
                            style={{ backgroundColor: person.color, zIndex: match.matchedBy.length - i }}
                          >
                            {person.initials}
                          </div>
                        ))}
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">
                        {match.matchedBy.length} {match.matchedBy.length === 1 ? 'match' : 'matches'}
                      </span>
                    </div>
                  </div>

                  {/* Chevron */}
                  <div className="flex items-center">
                    <svg
                      className={`h-4 w-4 text-gray-400 transition-transform ${selectedMatch === match.id ? 'rotate-90' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {selectedMatch === match.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-gray-100 bg-gray-50 px-3 py-3"
                >
                  <p className="text-xs font-semibold text-gray-700">Everyone who liked this:</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {match.matchedBy.map((person, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 rounded-lg bg-white px-2 py-1"
                      >
                        <div
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white"
                          style={{ backgroundColor: person.color }}
                        >
                          {person.initials}
                        </div>
                        <span className="text-xs font-medium text-gray-700">{person.name}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 w-full rounded-lg bg-gray-700 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-800">
                    View Details
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 rounded-lg bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 p-3 text-center"
      >
        <p className="text-xs text-gray-600">
          ✨ These are places <span className="font-semibold text-gray-900">everyone</span> in your group has liked!
        </p>
      </motion.div>
    </div>
  )
}

