import Link from 'next/link'
import Image from 'next/image'

import appStoreBadge from '@/images/Appleios.png'

export function AppStoreLink({ className }) {
  return (
    <Link
      href="https://apps.apple.com/us/app/thechecklist/id6754468571"
      aria-label="Download on the App Store"
      className={className}
    >
      <Image
        src={appStoreBadge}
        alt="Download on the App Store"
        className="h-10 w-auto"
        unoptimized
      />
    </Link>
  )
}
