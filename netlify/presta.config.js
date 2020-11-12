import { document } from 'presta/document'
import { getCss } from 'hypobox'

import { globalStyle } from '@/lib/globalStyle'

export const pages = './pages/**/*.js'

export function createDocument ({ body, data }) {
  return document({
    head: {
      style: [{ children: globalStyle }, { children: getCss() }]
    },
    body,
    foot: {
      script: [{ children: `window.__hydrate = ${JSON.stringify(data)};` }]
    }
  })
}
