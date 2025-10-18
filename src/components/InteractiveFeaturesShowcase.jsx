'use client'

import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { CircleBackground } from '@/components/CircleBackground'
import { InteractiveSwipeCard } from '@/components/InteractiveSwipeCard'
import { InteractiveListsView } from '@/components/InteractiveListsView'
import { InteractiveMatches } from '@/components/InteractiveMatches'

const features = [
  {
    name: 'Swipe to Discover',
    description:
      'Browse curated places with an intuitive Tinder-style interface. Swipe right on places you want to try, left on ones you don\'t.',
    icon: DeviceSwipeIcon,
    component: InteractiveSwipeCard,
  },
  {
    name: 'Create & Share Lists',
    description:
      'Invite friends, family, or coworkers to shared lists. Everyone swipes independently without the pressure of group chat chaos.',
    icon: DeviceListIcon,
    component: InteractiveListsView,
  },
  {
    name: 'Find Matches',
    description:
      'See places everyone in your group has liked instantly. No more debating—just spots you all want to visit.',
    icon: DeviceMatchIcon,
    component: InteractiveMatches,
  },
]

function DeviceSwipeIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#5b5c71"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#373854"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#5b5c71"
      />
      <path
        d="M9 8h14v2H9V8zm0 5h14v2H9v-2zm0 5h14v2H9v-2z"
        fill="#373854"
      />
    </svg>
  )
}

function DeviceMatchIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#5b5c71"
      />
      <path
        d="M16 11l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z"
        fill="#373854"
      />
    </svg>
  )
}

function FeaturesDesktop() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16"
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-5 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gradient-to-br from-brand-accent to-brand-primary shadow-lg"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p
                className={clsx(
                  'mt-2 text-sm transition-colors',
                  featureIndex === selectedIndex ? 'text-white' : 'text-gray-400',
                )}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-7">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#9ca0c8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <TabPanels className="h-full">
            {features.map((feature, featureIndex) => (
              <TabPanel
                key={feature.name}
                className="h-full overflow-auto focus:outline-none data-selected:not-data-focus:outline-hidden"
              >
                <div className="bg-gray-50 min-h-full p-5">
                  <feature.component />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </PhoneFrame>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  return (
    <div className="space-y-12">
      {features.map((feature, index) => (
        <div key={feature.name} className="w-full flex-none snap-center px-4 sm:px-6">
          <div className="relative transform overflow-hidden rounded-2xl bg-gray-700 px-5 py-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircleBackground
                color="#9ca0c8"
                className={index % 2 === 1 ? 'rotate-180' : undefined}
              />
            </div>
            <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
              <div className="h-full overflow-auto bg-gray-50 p-5">
                <feature.component />
              </div>
            </PhoneFrame>
            <div className="absolute inset-x-0 bottom-0 bg-gray-700/95 p-6 backdrop-blur-sm sm:p-10">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function InteractiveFeaturesShowcase() {
  return (
    <section
      id="features"
      aria-label="Interactive features showcase"
      className="bg-gray-700 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for Groups, Designed for Speed
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            theChecklist makes group planning effortless. Swipe, match, and
            decide—all in real-time, without the endless back-and-forth.
          </p>
          <p className="mt-3 text-sm font-medium text-brand-accent">
            ✨ Try the interactive demos below!
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

