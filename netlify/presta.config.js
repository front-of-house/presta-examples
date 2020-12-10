import { document } from 'presta/document'
import { getCss } from 'hypobox'

export const pages = './pages/**/*.js'

export function createContent ({ content, data }) {
  return document({
    head: {
      link: [{ rel: 'stylesheet', href: '/style.css' }],
      style: [{ children: getCss() }]
    },
    body: content,
    foot: {
      script: [{ children: `window.__hydrate = ${JSON.stringify(data)};` }]
    }
  })
}

export function onRequest(event) {
  if (event.path.includes('foo')) {
    return {
      statusCode: 200,
      body: 'hello'
    }
  }
}
