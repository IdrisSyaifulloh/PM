'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/projects/ProgressBar'
import { Project } from '@/types'
import { StaggerContainer, staggerItemVariants } from '@/components/animations/StaggerContainer'

interface RecentProjectsProps {
  projects: Project[]
}

export function RecentProjects({ projects }: RecentProjectsProps) {
  const recentProjects = projects.slice(0, 3)

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
          <p className="text-sm text-gray-600 mt-1">Your latest active projects</p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <StaggerContainer className="space-y-4">
        {recentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={staggerItemVariants}
          >
            <Link href={`/projects/${project.id}`}>  
              <div className="group p-4 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                  <Badge variant={project.status === 'completed' ? 'success' : project.status === 'in-progress' ? 'warning' : 'default'}>
                    {project.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <ProgressBar progress={project.progress} size="sm" />
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Due {new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                    <span className="font-medium">{project.progress}% complete</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </StaggerContainer>

      {recentProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No recent projects found</p>
        </div>
      )}
    </Card>
  )
}  
