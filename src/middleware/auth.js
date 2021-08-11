export default function auth ({ to, from, store, next }) {

  const isAuthenticated = store.getters['auth/authenticated'];

  if (! isAuthenticated) {
    return next({ name: 'Login' })
  }

  next()

}