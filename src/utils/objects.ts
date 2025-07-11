export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
  const output = { ...target } as any

  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = (target as any)[key]

    if (
      sourceValue &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      key in target &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      output[key] = deepMerge(targetValue, sourceValue)
    } else {
      output[key] = sourceValue
    }
  }

  return output
}

export function getNested<T = unknown>(obj: Record<string, any>, path: string): T | undefined {
  return path.split('.').reduce((acc: any, part: string) => acc?.[part], obj)
}

export function setNested(obj: Record<string, any>, path: string, value: any): void {
  const keys = path.split('.')
  let temp: Record<string, any> = obj

  for (let i = 0; i < keys.length - 1; i++) {
    if (typeof temp[keys[i]] !== 'object' || temp[keys[i]] === null) {
      temp[keys[i]] = {}
    }
    temp = temp[keys[i]]
  }

  temp[keys[keys.length - 1]] = value
}

export function compareObjects<T>(a: T, b: T): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

export function cleanObject<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== null && v !== undefined)
  ) as Partial<T>
}

export function objectToQuery(obj: Record<string, unknown>): string {
  return Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join('&')
}

export function queryToObject(query: string): Record<string, string> {
  return Object.fromEntries(
    query
      .replace(/^\?/, '')
      .split('&')
      .filter(param => param.includes('='))
      .map(param => {
        const [k, v] = param.split('=')
        return [decodeURIComponent(k), decodeURIComponent(v || '')]
      })
  )
}
