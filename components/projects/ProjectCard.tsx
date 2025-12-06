'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Users, MoreVertical } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { ProgressBar } from '@/components/projects/ProgressBar'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link href={`/projects/${project.id}`}> 
        <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {project.description}
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <div className="mb-4">
            <ProgressBar progress={project.progress} showLabel />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(project.endDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{project.teamSize} members</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Badge 
              variant={
                project.status === 'completed' ? 'success' : 
                project.status === 'in-progress' ? 'warning' : 
                'default'
              }
            >
              {project.status}
            </Badge>
            
            <div className="flex -space-x-2">
              {project.team.slice(0, 3).map((member) => (
                <Avatar
                  key={member.id}
                  src={member.avatar}
                  alt={member.name}
                  size="sm"
                  className="ring-2 ring-white"
                />
              ))}
              {project.team.length > 3 && (
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-xs font-semibold text-gray-600 ring-2 ring-white">
                  +{project.team.length - 3}
                </div>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}