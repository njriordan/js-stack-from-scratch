// @flow

// In this controller we might want to make business logic or database calls,
// here I'm just hard-coding some results.

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server Niall! (received ${num})`,
})
