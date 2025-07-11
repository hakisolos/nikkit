export function getTimestamp(): number {
  return Date.now()
}

export function formatDate(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale)
}

export function unixToReadable(unix: number): string {
  return new Date(unix * 1000).toLocaleString()
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function subtractDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() - days)
  return result
}

export function getDayOfWeek(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay()
  return day === 0 || day === 6
}

export function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const intervals = [
    [31536000, 'year'],
    [2592000, 'month'],
    [604800, 'week'],
    [86400, 'day'],
    [3600, 'hour'],
    [60, 'minute'],
    [1, 'second']
  ]
  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / Number(secs))
    if (count >= 1) return `${count} ${label}${count > 1 ? 's' : ''} ago`
  }
  return 'just now'
}

export function timeUntil(date: Date): string {
  const seconds = Math.floor((date.getTime() - Date.now()) / 1000)
  const intervals = [
    [31536000, 'year'],
    [2592000, 'month'],
    [604800, 'week'],
    [86400, 'day'],
    [3600, 'hour'],
    [60, 'minute'],
    [1, 'second']
  ]
  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / Number(secs))
    if (count >= 1) return `in ${count} ${label}${count > 1 ? 's' : ''}`
  }
  return 'soon'
}

export function getWeekNumber(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1)
  const diff = (date.getTime() - start.getTime()) / 86400000
  return Math.ceil((diff + start.getDay() + 1) / 7)
}

export function getTimezoneOffset(): string {
  const offset = new Date().getTimezoneOffset()
  const hours = Math.floor(Math.abs(offset) / 60)
  const minutes = Math.abs(offset) % 60
  const sign = offset > 0 ? '-' : '+'
  return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

export function countdown(to: Date): { days: number, hours: number, minutes: number, seconds: number } {
  const total = to.getTime() - Date.now()
  const seconds = Math.floor(total / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60
  }
}
