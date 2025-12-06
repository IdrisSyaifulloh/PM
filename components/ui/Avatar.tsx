import Image from 'next/image'
import { cn, getInitials } from '@/lib/utils'

interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg'
  }

  if (!src) {
    return (
      <div
        className={cn(
          'rounded-full bg-primary-100 text-primary-700 font-semibold flex items-center justify-center',
          sizes[size],
          className
        )}
      >
        {getInitials(alt)}
      </div>
    )
  }

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizes[size], className)}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}