export default function subscribed ({ to, from, store, next }) {

    const isSubscribed = store.getters['auth/user'].subscribed;

    if (! isSubscribed) {
        return next({ name: 'Home' })
    }

    next()
  
}