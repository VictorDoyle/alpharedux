# Alpha Redux

## Commands

**Run as dev**

```bash
npm run dev
```

**Build**

```bash
npm run build
```

**Run Linter**

```bash
npm run lint
```

---

Runs on [http://localhost:3000](http://localhost:3000)

### Git action workflow

Runs from PR merge to main, will validate and lint build. If fails, merge is blocked.

### Environment

- Nvmrc should match node version package based (18.17 at least for next). If this changes, you need to also update the gitaction yaml.

- Futura font weight only imported 300/500/700
