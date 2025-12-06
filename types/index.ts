export interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Project Manager' | 'Researcher' | 'Team Lead' | 'Developer'
  department: string
  avatar: string
}

export interface Project {
  id: string
  title: string
  description: string
  status: 'planning' | 'in-progress' | 'on-hold' | 'completed'
  progress: number
  startDate: string
  endDate: string
  teamMembers: string[]
  lead: string
  tags: string[]
  thumbnail: string
}

export interface Task {
  id: string
  projectId: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  assignee: string
  dueDate: string
  priority: 'low' | 'medium' | 'high'
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}