import { html } from 'presta/html'

export const route = '/'

export async function handler (props) {
  if (props.method.toLowerCase() === 'post') {
    console.log(`\n  form: ${props.body}\n`)

    return {
      statusCode: 303,
      headers: {
        Location: "/success",
      },
    }
  }

  return html({
    head: {
      title: "Form | Presta",
    },
    body: `
      <h1>Submit the form below</h1>

      <form action='/' method="post">
        <input type="text" name="name" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    `,
  });
}
