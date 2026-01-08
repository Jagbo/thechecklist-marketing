import Link from 'next/link'
import Image from 'next/image'

import googlePlayBadge from '@/images/Googleplay.png'

export function GooglePlayLink({ className }) {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.agbo.theChecklist"
      aria-label="Get it on Google Play"
      className={className}
    >
      <Image
        src={googlePlayBadge}
        alt="Get it on Google Play"
        className="h-10 w-auto"
        unoptimized
      />
    </Link>
  )
}
