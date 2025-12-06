'use client'

import { useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AnimatedAvatarProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export function AnimatedAvatar({ 
  src, 
  alt, 
  size = 120, 
  className 
}: AnimatedAvatarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 500], [0, -50])
  const rotate = useTransform(scrollY, [0, 500], [0, 15])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  return (
    <motion.div
      className={cn('relative', className)}
      style={{ y, rotate, scale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative rounded-full overflow-hidden shadow-float"
        style={{ width: size, height: size }}
        animate={{
          y: isHovered ? -10 : [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 z-10" />
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{ filter: 'blur(20px)', zIndex: -1 }}
      />
    </motion.div>
  )
}