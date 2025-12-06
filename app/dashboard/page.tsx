'use client'

import { useAuth } from '@/context/AuthContext'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WelcomeSection } from '@/components/dashboard/WelcomeSection'
import { StatsCard } from '@/components/dashboard/StatsCard'
import { RecentProjects } from '@/components/dashboard/RecentProjects'
import { FolderKanban, Users, CheckCircle, Clock } from 'lucide-react'
import { mockProjects } from '@/lib/mockData'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <WelcomeSection />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Projects"
              value={mockProjects.length}
              icon={FolderKanban}
              trend={{ value: 12, isPositive: true }}
              delay={0.1}
            />
            <StatsCard
              title="Active Projects"
              value={mockProjects.filter(p => p.status === 'in-progress').length}
              icon={Clock}
              trend={{ value: 8, isPositive: true }}
              delay={0.2}
            />
            <StatsCard
              title="Completed"
              value={mockProjects.filter(p => p.status === 'completed').length}
              icon={CheckCircle}
              trend={{ value: 5, isPositive: true }}
              delay={0.3}
            />
            <StatsCard
              title="Team Members"
              value={15}
              icon={Users}
              trend={{ value: 3, isPositive: true }}
              delay={0.4}
            />
          </div>

          <RecentProjects projects={mockProjects} />
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}