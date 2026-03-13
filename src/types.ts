export interface item {
    id: String;
    task: String;
}

export function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key)
  if (!data) return null

  try {
    return JSON.parse(data) as T
  } catch (error) {
    console.error(`Error parsing storage key "${key}"`, error)
    return null
  }
}