'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: number
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
  delay?: number
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  className,
  delay = 0
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={cn('relative overflow-hidden', className)}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -mr-16 -mt-16 opacity-50" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
              <div className="flex items-baseline gap-2">
                <AnimatedCounter 
                  value={value} 
                  className="text-3xl font-bold text-gray-900"
                  duration={2}
                />
              </div>
            </div>

            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg"
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          </div>

          {trend && (
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  'text-sm font-semibold',
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                )}
              >
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}