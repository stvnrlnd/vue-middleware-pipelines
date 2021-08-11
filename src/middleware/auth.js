export default function auth ({ to, from, next }) {

  const isNotAuthenticated = true;

  if (isNotAuthenticated) {
    return next({ name: 'Login' })
  }

  next()

}