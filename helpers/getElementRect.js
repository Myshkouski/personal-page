export default function getElementRect(el) {
  console.log(el)
  if (typeof el.getBoundingClientRect == 'function') {
    return el.getBoundingClientRect()
  }

  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHright,
    x: el.offsetTop,
    y: el.offsetLeft
  }
}
