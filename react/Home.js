import React from 'react'

export function getStaticPaths() {
  return ['/']
}

export function template() {
  return <h1>Presta</h1>
}
