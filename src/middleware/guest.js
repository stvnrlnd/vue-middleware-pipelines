export default function guest ({ to, from, store, next }) {

  const isAuthenticated = store.getters['auth/authenticated'];

  if (isAuthenticated) {
    return next({ name: 'Dashboard' })
  }

  next()

}