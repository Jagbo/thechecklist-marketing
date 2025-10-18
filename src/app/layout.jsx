import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const clashGrotesk = localFont({
  src: [
    {
      path: '../fonts/ClashGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/ClashGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s - theChecklist',
    default: 'theChecklist - Swipe Together, Decide Together',
  },
  description:
    'Find places everyone actually wants to go. Swipe on restaurants, cafes, and attractions—then see what everyone in your group has liked. Stop debating where to go, start going.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', clashGrotesk.variable)}>
      <body>{children}</body>
    </html>
  )
}
