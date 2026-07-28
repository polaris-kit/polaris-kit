# @polaris-kit/tokens

Design tokens for **Polaris UI** — the primitive values (colors, spacing, radius, typography, shadows, motion and more) that power the design system.

[![npm version](https://img.shields.io/npm/v/@polaris-kit/tokens.svg)](https://www.npmjs.com/package/@polaris-kit/tokens)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

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

## License

[MIT](./LICENSE) © Mateus Neiva
