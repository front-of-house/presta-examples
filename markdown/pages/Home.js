import { source } from 'presta/source-filesystem'

const { paths } = source('**/*.md', { baseDir: '../posts' })

export function getStaticPaths () {
  return ['/']
}

export function handler () {
  return `
    <ul>
      ${paths.map(p => `
        <li><a href='${p}'>${p}</a></li>
      `).join('')}
    </ul>
  `
}
