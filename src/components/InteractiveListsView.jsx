'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sampleLists = [
  {
    id: '1',
    name: 'Weekend Brunch Spots',
    memberCount: 4,
    matchCount: 8,
    members: [
      { id: '1', name: 'Sarah', initials: 'SK', color: '#9ca0c8' },
      { id: '2', name: 'Mike', initials: 'MJ', color: '#5b5c71' },
      { id: '3', name: 'Emma', initials: 'ER', color: '#373854' },
      { id: '4', name: 'Alex', initials: 'AT', color: '#9ca0c8' },
    ],
  },
  {
    id: '2',
    name: 'Date Night Ideas',
    memberCount: 2,
    matchCount: 12,
    members: [
      { id: '1', name: 'John', initials: 'JD', color: '#373854' },
      { id: '2', name: 'Jane', initials: 'JM', color: '#9ca0c8' },
    ],
  },
  {
    id: '3',
    name: 'Team Building Activities',
    memberCount: 8,
    matchCount: 5,
    members: [
      { id: '1', name: 'Tom', initials: 'TH', color: '#5b5c71' },
      { id: '2', name: 'Lisa', initials: 'LW', color: '#9ca0c8' },
      { id: '3', name: 'David', initials: 'DK', color: '#373854' },
    ],
  },
]

export function InteractiveListsView() {
  const [showModal, setShowModal] = useState(false)
  const [selectedList, setSelectedList] = useState(null)

  const handleListClick = (list) => {
    setSelectedList(list)
    setShowModal(true)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Shared Lists</h3>
        <p className="mt-1 text-xs text-gray-600">{sampleLists.length} lists</p>
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2.5">
        <button
          onClick={() => setShowModal(true)}
          className="flex flex-1 items-center justify-center rounded-xl bg-gray-700 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Create List
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="flex flex-1 items-center justify-center rounded-xl border border-gray-300 bg-white py-2.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          Join List
        </button>
      </div>

      {/* Lists */}
      <div className="space-y-2.5">
        {sampleLists.map((list, index) => (
          <motion.div
            key={list.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => handleListClick(list)}
              className="w-full rounded-xl bg-white p-4 text-left shadow-md transition-all hover:shadow-lg active:scale-98"
            >
              {/* List Name */}
              <h4 className="text-base font-semibold text-gray-900">{list.name}</h4>
              
              {/* Stats */}
              <div className="mt-1.5 flex items-center gap-3 text-xs text-gray-600">
                <span>{list.memberCount} members</span>
                <span>•</span>
                <span className="font-semibold text-gray-700">
                  {list.matchCount} matches
                </span>
              </div>

              {/* Member Avatars */}
              <div className="mt-3 flex -space-x-1.5">
                {list.members.map((member, i) => (
                  <div
                    key={member.id}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-sm"
                    style={{ backgroundColor: member.color, zIndex: list.members.length - i }}
                  >
                    {member.initials}
                  </div>
                ))}
                {list.memberCount > list.members.length && (
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-[10px] font-semibold text-gray-600 shadow-sm"
                    style={{ zIndex: 0 }}
                  >
                    +{list.memberCount - list.members.length}
                  </div>
                )}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-primary">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedList ? selectedList.name : 'Interactive Demo'}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  This is a demo of how theChecklist works. Download the app to create and manage your own lists!
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 w-full rounded-xl bg-gray-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

