import React from 'react'
import { renderToString } from 'react-dom/server'
import { document } from 'presta/document'

export const pages = ['./src/server.js']

export function render(Template, context) {
  context.routerContext = {}

  const html = renderToString(<Template {...context} />)

  return html
}

export function createContent(context) {
  return document({
    head: context.props.head,
    body: context.props.content,
    foot: {
      script: [
        // { src: '/client.js' }
      ]
    }
  })
}

export function createResponse(context, response) {
  if (context.routerContext.url) {
    return {
      statusCode: 302,
      body: '',
      headers: {
        Location: context.routerContext.url,
      }
    }
  }

  return response
}
