# @polaris-kit/react

Modern, composable and accessible React component library for **Polaris UI**.

[![npm version](https://img.shields.io/npm/v/@polaris-kit/react.svg)](https://www.npmjs.com/package/@polaris-kit/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Storybook](https://img.shields.io/badge/storybook-docs-ff4785.svg)](https://main--6a6a03885409ae6257b04aac.chromatic.com)

📚 **[Live documentation (Storybook)](https://main--6a6a03885409ae6257b04aac.chromatic.com)**

## Installation

```bash
npm install @polaris-kit/react
# or
pnpm add @polaris-kit/react
```

`react` and `react-dom` (>= 18) are required as peer dependencies.

## Usage

Import the components and the stylesheet once at the root of your app:

```tsx
import { Button } from '@polaris-kit/react'
import '@polaris-kit/react/styles.css'

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

## Documentation

Browse components, foundations and usage guides in the [Storybook](https://main--6a6a03885409ae6257b04aac.chromatic.com).

## License

[MIT](./LICENSE) © Mateus Neiva
