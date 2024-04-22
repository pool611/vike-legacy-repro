# vike-legacy-repro
a minimal example for vike+@vitejs/plugin-legacy

## how to create this repro

### step 1
I choose react-ts template for example, whatever you want.

```bash
pnpm create vite
```

### step 2

```bash
pnpm install
```

### step 3

```bash
pnpm add @vitejs/plugin-legacy
```

vite.config.ts:
```ts
import legacy from '@vitejs/plugin-legacy'

const config: UserConfig = {
  plugins: [
    ...
    // add legacy plugin
    legacy({
        targets: ['> 0.1%', 'last 2 versions', 'not dead']
    })
  ]
}
```