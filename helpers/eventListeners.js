export function add(target, map) {
  map.forEach(({
    events,
    handler,
    options
  }) => {
    events.forEach(event => {
      target.addEventListener(event, handler, options)
    })
  })
}

export function remove(target, map) {
  map.forEach(({
    events,
    handler,
    options
  }) => {
    events.forEach(event => {
      target.removeEventListener(event, handler, options)
    })
  })
}

export default {
  add,
  remove
}
