export default function (router) {
  return function *(next) {
    router.get( "/" )

    yield next
  }
}
