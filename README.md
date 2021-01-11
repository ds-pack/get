# `@ds-pack/get`

A utility for accessing values in deeply nested objects using key paths.

## Installation:

```sh
yarn add @ds-pack/get
```

## Usage:

```tsx
import get from '@ds-pack/get'

let theme = {
  colors: {
    blue: ['cadetblue', 'steelblue', 'cornflowerblue'],
  },
}

get(theme, 'colors.blue.2') // 'cornflowerblue'
```

### Tools:

- Typescript
- Babel
- Jest
