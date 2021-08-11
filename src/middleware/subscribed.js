export default function subscribed ({ to, from, next }) {

    const isNotSubscribed = true;

    if (isNotSubscribed) {
        return next({ name: 'Home' })
    }

    next()
  
}