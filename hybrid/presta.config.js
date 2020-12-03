import { document } from 'presta/document'
import { getCss } from 'hypobox'

export const pages = 'pages/**/*.js'

export function createContent(context) {
  return document(context, {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/svbstrate@4.1.1/dist/svbstrate.css' }
      ],
      style: [
        { children: getCss() }
      ]
    }
  })
}
