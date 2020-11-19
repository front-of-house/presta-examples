import { Nav } from '@/components/Nav'

export const route = ':slug'

export function getPaths() {
  return [
    '/about'
  ]
}

export function Page({ pathname }) {
  return `${Nav()}<h1>${pathname}</h1>`
}
