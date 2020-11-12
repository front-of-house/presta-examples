import { render } from 'presta/render'

import { Page } from '@/pages/Page'
import { createDocument } from '@/presta.config.js'

export async function handler (ev) {
  const { body, data } = await render(Page, { pathname: ev.path })

  return {
    statusCode: 200,
    body: createDocument({ body, data })
  }
}
