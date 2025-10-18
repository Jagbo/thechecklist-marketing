import { Container } from '@/components/Container'

function SwipeIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#373854"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke="#9ca0c8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#373854"
      />
      <circle cx={9} cy={12} r={2} fill="#373854" />
      <circle cx={23} cy={12} r={2} fill="#373854" />
      <circle cx={16} cy={8} r={2} fill="#9ca0c8" />
    </svg>
  )
}

function MatchIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#9ca0c8" fillOpacity={0.2} />
      <path
        d="M16 9l2.5 5 5.5 .75-4 3.9.95 5.6L16 21.5l-4.95 2.75.95-5.6-4-3.9 5.5-.75z"
        fill="#373854"
      />
      <circle cx={16} cy={16} r={3} fill="#9ca0c8" />
    </svg>
  )
}

const steps = [
  {
    name: 'Swipe to Discover',
    description:
      'Browse curated places with an intuitive Tinder-style interface. Swipe right on places you want to try, left on ones you don\'t.',
    icon: SwipeIcon,
  },
  {
    name: 'Create Lists',
    description:
      'Invite friends, family, or coworkers to shared lists. Everyone swipes independently without the pressure of group chat chaos.',
    icon: ListIcon,
  },
  {
    name: 'Find Matches',
    description:
      'See places everyone in your group has liked instantly. No more debating—just spots you all want to visit.',
    icon: MatchIcon,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How theChecklist works"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to eliminate decision fatigue and find places
            everyone loves.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <li key={step.name} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary shadow-lg">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.name}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

