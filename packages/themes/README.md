# @polaris-ui/themes

Theme engine and ready-to-use light/dark themes for **Polaris UI**. Maps [`@polaris-ui/tokens`](https://www.npmjs.com/package/@polaris-ui/tokens) to CSS variables at runtime.

[![npm version](https://img.shields.io/npm/v/@polaris-ui/themes.svg)](https://www.npmjs.com/package/@polaris-ui/themes)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Installation

```bash
npm install @polaris-ui/themes
# or
pnpm add @polaris-ui/themes
```

## Usage

```ts
import { applyTheme, lightTheme, darkTheme, createTheme } from '@polaris-ui/themes'

applyTheme(lightTheme)
```

## Exports

- `lightTheme`, `darkTheme` — built-in themes
- `createTheme`, `applyTheme`, `applyFoundationTokens` — theme engine utilities
- `ThemeMode` — type

## License

[MIT](./LICENSE) © Mateus Neiva
