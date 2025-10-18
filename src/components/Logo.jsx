import Image from 'next/image'
import logoImage from '@/images/theChecklist.png'

export function Logomark(props) {
  return (
    <div className={props.className} style={props.style}>
      <Image
        src={logoImage}
        alt="theChecklist"
        width={40}
        height={40}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  )
}

export function Logo(props) {
  return (
    <div className="flex flex-row items-center gap-3" {...props}>
      <div className="h-10 w-10 flex-shrink-0">
        <Image
          src={logoImage}
          alt="theChecklist"
          width={40}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <span className="text-lg font-semibold tracking-tight text-gray-900 whitespace-nowrap">
        theChecklist
      </span>
    </div>
  )
}
