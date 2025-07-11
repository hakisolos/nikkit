export function formatWithCommas(num: number): string {
  return num.toLocaleString()
}

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i]
}

export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32
}

export function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function ordinalSuffix(num: number): string {
  const j = num % 10, k = num % 100
  if (j === 1 && k !== 11) return num + 'st'
  if (j === 2 && k !== 12) return num + 'nd'
  if (j === 3 && k !== 13) return num + 'rd'
  return num + 'th'
}

export function isPrime(n: number): boolean {
  if (n <= 1) return false
  if (n <= 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

export function roundToNearest(num: number, nearest: number): number {
  return Math.round(num / nearest) * nearest
}

export function getPercentage(part: number, whole: number): string {
  if (whole === 0) return '0%'
  return ((part / whole) * 100).toFixed(2) + '%'
}

export function clamp(num: number, min: number, max: number): number {
  return Math.max(min, Math.min(num, max))
}
