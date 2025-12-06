import { User, Project, Task } from '@/types'

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Idris Syaifulloh',
    email: 'idris@pm.dev',
    role: 'Admin',
    department: 'Computer Science',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Idris'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@pm.dev',
    role: 'Project Manager',
    department: 'Engineering',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: '3',
    name: 'Ahmad Rizky',
    email: 'ahmad@pm.dev',
    role: 'Researcher',
    department: 'Data Science',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad'
  },
  {
    id: '4',
    name: 'Lisa Chen',
    email: 'lisa@pm.dev',
    role: 'Team Lead',
    department: 'Research & Development',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
  },
  {
    id: '5',
    name: 'David Martinez',
    email: 'david@pm.dev',
    role: 'Developer',
    department: 'Software Engineering',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
  }
]

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Recommendation System',
    description: 'Building an intelligent recommendation engine using machine learning algorithms to personalize user experiences.',
    status: 'in-progress',
    progress: 65,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    teamMembers: ['1', '2', '3'],
    lead: '1',
    tags: ['AI', 'Machine Learning', 'High Priority'],
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
  },
  {
    id: '2',
    title: 'Climate Change Data Analysis',
    description: 'Comprehensive analysis of climate data to identify trends and predict future environmental changes.',
    status: 'in-progress',
    progress: 45,
    startDate: '2024-02-01',
    endDate: '2024-08-31',
    teamMembers: ['3', '4'],
    lead: '3',
    tags: ['Research', 'Data Analysis', 'Environment'],
    thumbnail: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=400'
  },
  {
    id: '3',
    title: 'Blockchain Healthcare Platform',
    description: 'Developing a secure, decentralized platform for managing patient health records using blockchain technology.',
    status: 'planning',
    progress: 20,
    startDate: '2024-03-15',
    endDate: '2024-12-31',
    teamMembers: ['1', '5'],
    lead: '1',
    tags: ['Blockchain', 'Healthcare', 'Security'],
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400'
  },
  {
    id: '4',
    title: 'Smart City IoT Infrastructure',
    description: 'Implementing IoT sensors and networks to create a connected smart city ecosystem.',
    status: 'in-progress',
    progress: 55,
    startDate: '2024-01-10',
    endDate: '2024-09-30',
    teamMembers: ['2', '4', '5'],
    lead: '2',
    tags: ['IoT', 'Smart City', 'Infrastructure'],
    thumbnail: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400'
  },
  {
    id: '5',
    title: 'Natural Language Processing Engine',
    description: 'Advanced NLP system for understanding and processing human language in multiple contexts.',
    status: 'completed',
    progress: 100,
    startDate: '2023-09-01',
    endDate: '2024-02-28',
    teamMembers: ['1', '3'],
    lead: '3',
    tags: ['NLP', 'AI', 'Completed'],
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400'
  },
  {
    id: '6',
    title: 'Quantum Computing Research',
    description: 'Exploring quantum algorithms and their applications in cryptography and optimization problems.',
    status: 'in-progress',
    progress: 30,
    startDate: '2024-02-15',
    endDate: '2025-02-15',
    teamMembers: ['3', '4'],
    lead: '4',
    tags: ['Quantum', 'Research', 'Cryptography'],
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
  },
  {
    id: '7',
    title: 'Sustainable Energy Optimization',
    description: 'Developing algorithms to optimize renewable energy distribution and storage systems.',
    status: 'in-progress',
    progress: 70,
    startDate: '2023-11-01',
    endDate: '2024-05-31',
    teamMembers: ['2', '3', '4'],
    lead: '2',
    tags: ['Energy', 'Sustainability', 'Optimization'],
    thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400'
  },
  {
    id: '8',
    title: 'Cybersecurity Threat Detection',
    description: 'AI-driven system for real-time detection and prevention of cyber threats and attacks.',
    status: 'in-progress',
    progress: 80,
    startDate: '2023-10-15',
    endDate: '2024-04-30',
    teamMembers: ['1', '5'],
    lead: '1',
    tags: ['Security', 'AI', 'High Priority'],
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400'
  },
  {
    id: '9',
    title: 'AR/VR Educational Platform',
    description: 'Immersive learning platform using augmented and virtual reality for enhanced education.',
    status: 'on-hold',
    progress: 25,
    startDate: '2024-01-20',
    endDate: '2024-10-31',
    teamMembers: ['4', '5'],
    lead: '4',
    tags: ['AR/VR', 'Education', 'On Hold'],
    thumbnail: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?w=400'
  },
  {
    id: '10',
    title: 'Genomics Data Pipeline',
    description: 'High-throughput pipeline for processing and analyzing large-scale genomic datasets.',
    status: 'planning',
    progress: 10,
    startDate: '2024-04-01',
    endDate: '2024-11-30',
    teamMembers: ['3'],
    lead: '3',
    tags: ['Genomics', 'Big Data', 'Research'],
    thumbnail: 'https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=400'
  }
]

export const mockTasks: Task[] = [
  {
    id: '1',
    projectId: '1',
    title: 'Design recommendation algorithm',
    description: 'Create the core algorithm for product recommendations',
    status: 'done',
    assignee: '1',
    dueDate: '2024-02-15',
    priority: 'high'
  },
  {
    id: '2',
    projectId: '1',
    title: 'Implement collaborative filtering',
    description: 'Build collaborative filtering module',
    status: 'in-progress',
    assignee: '3',
    dueDate: '2024-03-20',
    priority: 'high'
  },
  {
    id: '3',
    projectId: '1',
    title: 'Setup A/B testing framework',
    description: 'Implement testing infrastructure',
    status: 'todo',
    assignee: '2',
    dueDate: '2024-04-10',
    priority: 'medium'
  },
  {
    id: '4',
    projectId: '2',
    title: 'Collect climate datasets',
    description: 'Gather data from multiple sources',
    status: 'done',
    assignee: '3',
    dueDate: '2024-02-28',
    priority: 'high'
  },
  {
    id: '5',
    projectId: '2',
    title: 'Data cleaning and preprocessing',
    description: 'Clean and prepare data for analysis',
    status: 'in-progress',
    assignee: '4',
    dueDate: '2024-03-30',
    priority: 'high'
  }
]

export function getUserById(id: string): User | undefined {
  return mockUsers.find(user => user.id === id)
}

export function getProjectById(id: string): Project | undefined {
  return mockProjects.find(project => project.id === id)
}

export function getTasksByProjectId(projectId: string): Task[] {
  return mockTasks.filter(task => task.projectId === projectId)
}

export function getUserByEmail(email: string): User | undefined {
  return mockUsers.find(user => user.email === email)
}