import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export function render(Page, props) {
  return renderToStaticMarkup(<Page {...props} />)
}
