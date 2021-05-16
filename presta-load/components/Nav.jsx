import { h } from 'hyposcript'
import { load } from '@presta/load'

import { loadNav } from '@/api/nav'

export function Nav() {
  const links = load(loadNav, { key: 'nav' }) || []

  return links.map(link => (
    <a href={link.url}>{link.text}</a>
  ))
}
