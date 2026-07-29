# @polaris-kit/themes

Theme engine and ready-to-use light/dark themes for **Polaris UI**. Maps [`@polaris-kit/tokens`](https://www.npmjs.com/package/@polaris-kit/tokens) to CSS variables at runtime.

[![npm version](https://img.shields.io/npm/v/@polaris-kit/themes.svg)](https://www.npmjs.com/package/@polaris-kit/themes)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Storybook](https://img.shields.io/badge/storybook-docs-ff4785.svg)](https://main--6a6a03885409ae6257b04aac.chromatic.com)

📚 **[Live documentation (Storybook)](https://main--6a6a03885409ae6257b04aac.chromatic.com)**

## Installation

```bash
npm install @polaris-kit/themes
# or
pnpm add @polaris-kit/themes
```

## Usage

```ts
import { applyTheme, lightTheme, darkTheme, createTheme } from '@polaris-kit/themes'

applyTheme(lightTheme)
```

## Exports

- `lightTheme`, `darkTheme` — built-in themes
- `createTheme`, `applyTheme`, `applyFoundationTokens` — theme engine utilities
- `ThemeMode` — type

## Documentation

See theming and foundations in the [Storybook](https://main--6a6a03885409ae6257b04aac.chromatic.com).

## License

[MIT](./LICENSE) © Mateus Neiva
