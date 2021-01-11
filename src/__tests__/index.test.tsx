import get from '../index'

test('happy path objects', () => {
  let obj = {
    a: {
      b: {
        c: true,
      },
    },
  }
  expect(get(obj, 'a.b.c')).toBe(true)
})
test('sad path objects', () => {
  let obj = {
    a: {
      b: {
        c: true,
      },
    },
  }
  expect(get(obj, 'a.b.x')).toBe(undefined)
})
test('happy path arrays', () => {
  let obj = {
    a: {
      b: {
        c: [1, 2],
      },
    },
  }
  expect(get(obj, 'a.b.c.1')).toBe(2)
})
test('sad path arrays', () => {
  let obj = {
    a: {
      b: {
        c: [1, 2],
      },
    },
  }
  expect(get(obj, 'a.b.c.2')).toBe(undefined)
})
