# @polaris-ui/tokens

Design tokens for **Polaris UI** — the primitive values (colors, spacing, radius, typography, shadows, motion and more) that power the design system.

[![npm version](https://img.shields.io/npm/v/@polaris-ui/tokens.svg)](https://www.npmjs.com/package/@polaris-ui/tokens)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Installation

```bash
npm install @polaris-ui/tokens
# or
pnpm add @polaris-ui/tokens
```

## Usage

```ts
import { colors, spacing, radius, typography } from '@polaris-ui/tokens'

console.log(colors, spacing, radius, typography)
```

Tokens are primitives and contain no business logic. Use [`@polaris-ui/themes`](https://www.npmjs.com/package/@polaris-ui/themes) to map them to CSS variables at runtime.

## License

[MIT](./LICENSE) © Mateus Neiva
