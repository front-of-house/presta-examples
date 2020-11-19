import { Nav } from '@/components/Nav'

export const route = '/dynamic/:slug'

export function Page({ pathname }) {
  return `${Nav()}<h1>${pathname}</h1>`
}
