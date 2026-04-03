export type CourseStatus = 'draft' | 'published' | 'archived'
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Course {
  id: string
  tenantId: string
  trainerId: string
  title: string
  description: string
  thumbnailUrl: string | null
  price: number
  currency: string
  status: CourseStatus
  level: CourseLevel
  totalLessons: number
  totalDuration: number
  enrollmentCount: number
  createdAt: string
  updatedAt: string
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string | null
  videoUrl: string | null
  duration: number
  order: number
  isFree: boolean
}
