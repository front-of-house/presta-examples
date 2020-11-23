import { document } from 'presta/document'
import { getCss } from 'hypobox'

export const pages = './pages/**/*.js'

export function createDocument ({ body, data }) {
  return document({
    head: {
      link: [{ rel: 'stylesheet', href: '/style.css' }],
      style: [{ children: getCss() }]
    },
    body,
    foot: {
      script: [{ children: `window.__hydrate = ${JSON.stringify(data)};` }]
    }
  })
}
