import data from '@/data.json'

export type Project = {
  key: string
  name: string
  website: string | undefined | null
  links: string[]
  start_date: string
  end_date: string | undefined | null
  description: string
  skills: string[]
  nda: boolean | undefined | null
  commercial: boolean | undefined | null
}

export type Company = {
  slug: string
  name: string
  location: string
  remote: boolean
  website: string | undefined | null
  start_date: string
  end_date: string | undefined | null
  type: 'full-time' | 'part-time' | 'self-employed'
  team_size: string
  projects: string[]
  positions: string[]
}

export type SkillDetails = {
  label: string
  level: number
  /**
   * Date when the skill was first used
   * if null, get the first date from the projects
   */
  start_date: string | undefined | null
  /**
   * Date when the skill was first used in a commercial project
   * if null, get the first date from the commercial projects
   */
  commercial_start_date: string | undefined | null
  description: string
}

export type School = {
  slug: string
  name: string
  type: 'high-school' | 'university' | 'course'
  location: string
  website: string | undefined | null
  start_date: string
  end_date: string | undefined | null
  degree: string
  field_of_study: string
  grade: string
}

export default function useData() {
  const skills = data.skills as unknown as Record<string, SkillDetails>
  const projects = data.projects as unknown as Record<string, Project>
  const companies = data.companies as unknown as Record<string, string>
  const schools = data.schools as unknown as Record<string, School>

  return {
    projects: Object.entries(projects).map(([key, value]) => {
      return {
        ...value,
        key,
      }
    }),
    skills: Object.fromEntries(
      Object.entries(
        Object.values(projects)
          .map((project) => project.skills || [])
          .flat()
          .reduce((acc: Record<string, number>, skill) => {
            if (acc[skill]) {
              acc[skill]++
            } else {
              acc[skill] = 1
            }
            return acc
          }, {})
      )
        .map(([key, value]) => ({
          key: key,
          label: skills[key]?.label ?? key,
          count: value,
        }))
        .sort((a, b) => b.count - a.count)
        .map((skill) => [skill.key, skill])
    ),
    companies,
    schools,
  }
}
