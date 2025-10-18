import { useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Save Your Favorites',
    description:
      'Build your personal want-to-visit list. Every place you like is saved automatically for future reference.',
    icon: DeviceHeartIcon,
  },
  {
    name: 'Multiple Lists',
    description:
      'Create different lists for different occasions—date nights, family outings, team lunches, and more.',
    icon: DeviceListsIcon,
  },
  {
    name: 'Easy Invites',
    description:
      'Share lists via simple invite codes or deep links. Add friends in seconds without any complicated setup.',
    icon: DeviceShareIcon,
  },
  {
    name: 'Category Filters',
    description:
      'Find exactly what you\'re looking for with smart filters for restaurants, cafes, bars, attractions, and activities.',
    icon: DeviceFilterIcon,
  },
  {
    name: 'Personal Stats',
    description:
      'Track your exploration journey with stats on places saved, lists created, and matches found.',
    icon: DeviceStatsIcon,
  },
  {
    name: 'Offline Browsing',
    description:
      'Browse previously loaded places even without an internet connection. Perfect for planning on the go.',
    icon: DeviceOfflineIcon,
  },
]

function DeviceHeartIcon(props) {
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
        d="M16 21l-4-4c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5l-4 4-1.5 1.5L16 21z"
        fill="#373854"
      />
    </svg>
  )
}

function DeviceListsIcon(props) {
  let id = useId()

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#373854" />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#373854" />
          <stop offset={1} stopColor="#373854" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceShareIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#5b5c71"
      />
      <circle cx={11} cy={12} r={2} fill="#373854" />
      <circle cx={21} cy={12} r={2} fill="#373854" />
      <circle cx={16} cy={22} r={2} fill="#373854" />
      <path
        d="M13 13l6 7M19 13l-6 7"
        stroke="#9ca0c8"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

function DeviceFilterIcon(props) {
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
        d="M10 8h12l-3 4v6l-3 2v-8l-3-4h-3z"
        fill="#373854"
      />
    </svg>
  )
}

function DeviceStatsIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#5b5c71"
      />
      <rect x={11} y={18} width={3} height={8} rx={1} fill="#373854" />
      <rect x={15} y={14} width={3} height={12} rx={1} fill="#373854" />
      <rect x={19} y={10} width={3} height={16} rx={1} fill="#9ca0c8" />
    </svg>
  )
}

function DeviceOfflineIcon(props) {
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
        d="M16 10v8m-6 0c0-3.314 2.686-6 6-6s6 2.686 6 6"
        stroke="#373854"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={22} r={1.5} fill="#373854" />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Additional features"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Plan Better
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From saving favorites to tracking stats, theChecklist has all the
            features to make group decision-making effortless.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8 hover:border-brand-accent transition-colors"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
