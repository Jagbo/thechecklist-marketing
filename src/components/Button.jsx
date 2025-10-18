import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-xl py-3 px-4 text-base font-semibold transition-colors min-h-[48px] items-center',
  outline:
    'inline-flex justify-center rounded-xl border py-[calc(--spacing(3)-1px)] px-[calc(--spacing(4)-1px)] text-base transition-colors min-h-[48px] items-center',
}

const variantStyles = {
  solid: {
    primary:
      'relative overflow-hidden bg-gray-700 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-gray-800 active:text-white/80 before:transition-colors',
    premium:
      'bg-premium text-gray-900 hover:bg-[#f0cf3e] active:bg-[#e6c534] active:text-gray-900/80 font-semibold',
    white:
      'bg-white text-gray-900 hover:bg-white/90 active:bg-white/90 active:text-gray-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'primary'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
