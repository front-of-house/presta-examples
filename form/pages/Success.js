import { html } from 'presta/html'

export const route = '/success'

export function handler () {
  return html({
    head: {
      title: "Success | Presta",
    },
    body: `
      <h1>Your form was submitted successfully</h1>
      <a href='/'>Go Back</a>
    `,
  });
}
