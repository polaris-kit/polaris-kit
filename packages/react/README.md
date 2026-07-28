# @polaris-ui/react

Modern, composable and accessible React component library for **Polaris UI**.

[![npm version](https://img.shields.io/npm/v/@polaris-ui/react.svg)](https://www.npmjs.com/package/@polaris-ui/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Installation

```bash
npm install @polaris-ui/react
# or
pnpm add @polaris-ui/react
```

`react` and `react-dom` (>= 18) are required as peer dependencies.

## Usage

Import the components and the stylesheet once at the root of your app:

```tsx
import { Button } from '@polaris-ui/react'
import '@polaris-ui/react/styles.css'

export function App() {
  return <Button>Click me</Button>
}
```

## Components

- `Button`
- `Spinner`
- `Icon`
- `Text`
- `Heading`

## License

[MIT](./LICENSE) © Mateus Neiva
