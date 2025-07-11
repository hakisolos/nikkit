export function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size))
}

export function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function flattenArray(arr: any[]): any[] {
  return arr.flat(Infinity)
}

export function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

export function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function sortByKey<T>(arr: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1
    return 0
  })
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const group = String(item[key])
    acc[group] = acc[group] || []
    acc[group].push(item)
    return acc
  }, {} as Record<string, T[]>)
}

export function countOccurrences<T>(arr: T[]): Record<string, number> {
  return arr.reduce((acc, val) => {
    const key = String(val)
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

export function removeFalsy<T>(arr: T[]): T[] {
  return arr.filter(Boolean)
}

export function zipArrays<T, U>(a: T[], b: U[]): [T, U][] {
  return a.slice(0, Math.min(a.length, b.length)).map((val, i) => [val, b[i]])
}
