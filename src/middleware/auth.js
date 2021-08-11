export default function (to, from, next) {
    let isNotAuthenitcated = true

    if (isNotAuthenitcated) {
      return next({ name : 'Login'})
    }

    next()
}