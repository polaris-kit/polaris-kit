# ✨ Polaris UI

[![npm version](https://img.shields.io/npm/v/@polaris-ui/ui.svg)](https://www.npmjs.com/package/@polaris-ui/ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Monorepo](https://img.shields.io/badge/monorepo-turborepo-black.svg)](https://turbo.build/repo)

---

A modern, composable and accessible React component library built for scalability, performance and developer experience.

> Built with a monorepo architecture using Turborepo, pnpm and Changesets.

---

## ✨ Features

- ⚡ Monorepo powered by **Turborepo**
- 📦 Modular packages (`ui`, `icons`, `tokens`)
- 🎨 Design system ready
- 🧪 Testing with **Vitest**
- 🧹 Linting with **Oxlint**
- 🎯 Formatting with **Oxfmt**
- 🪝 Git hooks with **Husky**
- 🧾 Conventional commits with **Commitlint**
- 🚀 Automated releases with **Changesets**
- 🤖 CI with GitHub Actions

---

## 🏗️ Architecture

```
polaris-ui/
├── apps/
│   ├── docs/
│   └── playground/
├── packages/
│   ├── ui/
│   ├── icons/
│   ├── tokens/
│   └── utils/
├── tooling/
├── turbo.json
└── pnpm-workspace.yaml
```

---

## 🚀 Getting Started

```
pnpm install
pnpm dev
```

---

## 📦 Packages

- `@polaris-ui/ui` → React components
- `@polaris-ui/icons` → Icon system
- `@polaris-ui/tokens` → Design tokens
- `@polaris-ui/utils` → Shared utilities

---

## 🔁 Versioning

Uses Changesets for automated versioning and releases.

```
pnpm changeset
pnpm changeset version
pnpm changeset publish
```

---

## ⚙️ CI / Automation

Every push to main:

- Lint
- Typecheck
- Build
- Release (Changesets)

---

## 🧪 Scripts

- `pnpm dev` → start dev environment
- `pnpm build` → build all packages
- `pnpm lint` → run oxlint
- `pnpm format` → run oxfmt
- `pnpm test` → run tests

---

## 📌 Philosophy

- Composition over configuration
- Consistency over complexity
- Developer experience first
- Scalable architecture from day one

---

## 📄 License

MIT © Polaris UI
