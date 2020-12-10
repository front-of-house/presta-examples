import { document } from 'presta/document'
import { merge } from 'presta/utils/merge'
import { getCss } from 'hypobox'

export const pages = 'pages/**/*.js'

export function createContent(context) {
  return document({
    head: merge(context.head, {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/svbstrate@4.1.1/dist/svbstrate.css' }
      ],
      style: [
        { children: getCss() }
      ]
    }),
    body: context.content
  })
}
