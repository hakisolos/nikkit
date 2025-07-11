export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        
    .replace(/[^\w\-]+/g, '')    
    .replace(/\-\-+/g, '-')      
    .replace(/^-+|-+$/g, '');    
}


export function makeFirstUppercase(word: string): string {
  if (!word) {
    throw new Error("word not found");
  }
  try {
    return word[0]?.toUpperCase() + word.slice(1);
  } catch (e: any) {
    throw new Error(e?.message || "Unexpected error");
  }
}

export function toCamelCase(text: string): string {
  if (!text) {
    throw new Error("Text is required");
  }
  return text
    .toLowerCase()
    .trim()
    .split(/[\s_\-]+/) 
    .map((word, index) => {
      if (index === 0) return word;
      return word[0]?.toUpperCase() + word.slice(1);
    })
    .join('');
}


export function toSnakeCase(text: string): string {
  if (!text) {
    throw new Error("Text is required");
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\-]+/g, '_')
    .replace(/[^\w_]/g, '')
    .replace(/_{2,}/g, '_');
}

export function toKebabCase(text: string): string {
  if (!text) {
    throw new Error("Text is required");
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/\-+/g, '-');
}

export function reverseString(text: string): string {
  return text.split('').reverse().join('')
}



export function countCharacters(text: string, excludeWhitespace = false): number {
  return excludeWhitespace ? text.replace(/\s/g, '').length : text.length
}

export function truncateString(text: string, maxLength: number, ending = '...'): string {
  return text.length > maxLength ? text.slice(0, maxLength) + ending : text
}

export function removeSpecialChars(text: string): string {
  return text.replace(/[^a-zA-Z0-9 ]/g, '')
}

export function encodeURL(text: string): string {
  return encodeURIComponent(text)
}

export function decodeURL(text: string): string {
  return decodeURIComponent(text)
}

export function escapeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function unescapeHTML(text: string): string {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
}

export function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

export function isPalindrome(text: string): boolean {
  const clean = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return clean === clean.split('').reverse().join('')
}
