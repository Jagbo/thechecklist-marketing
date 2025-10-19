import localFont from 'next/font/local'
import clsx from 'clsx'
import Script from 'next/script'

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
  keywords: [
    'group decision making',
    'restaurant finder',
    'group activities',
    'place discovery',
    'swipe app',
    'group planning',
    'decide together',
    'find restaurants',
    'activity planning',
    'group matching',
  ],
  authors: [{ name: 'theChecklist' }],
  creator: 'theChecklist',
  publisher: 'theChecklist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thechecklist.london'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thechecklist.london',
    siteName: 'theChecklist',
    title: 'theChecklist - Swipe Together, Decide Together',
    description:
      'Find places everyone actually wants to go. Swipe on restaurants, cafes, and attractions—then see what everyone in your group has liked. Stop debating where to go, start going.',
    images: [
      {
        url: '/images/theChecklist.png',
        width: 1200,
        height: 630,
        alt: 'theChecklist - Swipe Together, Decide Together',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'theChecklist - Swipe Together, Decide Together',
    description:
      'Find places everyone actually wants to go. Swipe on restaurants, cafes, and attractions—then see what everyone in your group has liked.',
    images: ['/images/theChecklist.png'],
    creator: '@theChecklist', // Update with your actual Twitter handle
  },
  appleWebApp: {
    capable: true,
    title: 'theChecklist',
    statusBarStyle: 'default',
  },
  applicationName: 'theChecklist',
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/app/thechecklist', // Update with actual App Store URL
      app_store_id: 'YOUR_APP_ID', // Update with actual App Store ID
    },
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.thechecklist', // Update with actual Play Store URL
      package: 'com.thechecklist', // Update with actual package name
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add your Google Search Console verification code
    // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    // bing: 'YOUR_BING_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'theChecklist',
    applicationCategory: 'LifestyleApplication',
    description:
      'Find places everyone actually wants to go. Swipe on restaurants, cafes, and attractions—then see what everyone in your group has liked.',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000', // Update with actual ratings
    },
  }

  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', clashGrotesk.variable)}>
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
