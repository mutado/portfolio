import data from '@/data.json'

export function getSkills() {
  return Object.values(data.projects).reduce((acc, project) => {
    project.skills?.forEach(skill => {
      acc[skill] = acc[skill] ? acc[skill] + 1 : 1
    })
    return acc
  }, {} as Record<string, number>)
}