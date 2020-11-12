import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export const pages = ['./Home.js']

export function render(Page, props) {
  return renderToStaticMarkup(<Page {...props} />)
}
