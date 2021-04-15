import React from 'react'

export function Page({ match }) {
  return (
    <h1>Page: /{match.params.slug}</h1>
  )
}
