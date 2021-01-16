export function getStaticPaths() {
  return ['/']
}

export function template(context: any) {
  return '<h1>Typescript</h1>'
}
