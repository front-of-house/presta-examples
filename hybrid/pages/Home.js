import { Nav } from '@/components/Nav'

export function getPaths() {
  return ['/']
}

export function Page() {
  return `${Nav()}<h1>Presta</h1>`
}
