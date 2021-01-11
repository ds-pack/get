export default function get(theme: object, path: string): string | number {
  let route = path.split('.')
  let res = theme
  let idx = 0
  while (idx < route.length) {
    if (res === undefined) {
      break
    }
    if (res !== undefined) {
      let key: string | number = route[idx]
      // @ts-ignore
      if (key == Number(key)) {
        key = Number(key)
      }
      res = res[key]
    }
    idx++
  }
  if (res === theme) {
    return undefined
  }
  // @ts-ignore
  return res
}
