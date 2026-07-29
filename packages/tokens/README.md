# @polaris-kit/tokens

Design tokens for **Polaris UI** — the primitive values (colors, spacing, radius, typography, shadows, motion and more) that power the design system.

[![npm version](https://img.shields.io/npm/v/@polaris-kit/tokens.svg)](https://www.npmjs.com/package/@polaris-kit/tokens)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Storybook](https://img.shields.io/badge/storybook-docs-ff4785.svg)](https://main--6a6a03885409ae6257b04aac.chromatic.com)

📚 **[Live documentation (Storybook)](https://main--6a6a03885409ae6257b04aac.chromatic.com)**

## Installation

```bash
npm install @polaris-kit/tokens
# or
pnpm add @polaris-kit/tokens
```

## Usage

```ts
import { colors, spacing, radius, typography } from '@polaris-kit/tokens'

console.log(colors, spacing, radius, typography)
```

Tokens are primitives and contain no business logic. Use [`@polaris-kit/themes`](https://www.npmjs.com/package/@polaris-kit/themes) to map them to CSS variables at runtime.

## Documentation

Explore the design tokens in the [Storybook Foundations](https://main--6a6a03885409ae6257b04aac.chromatic.com).

## License

[MIT](./LICENSE) © Mateus Neiva
