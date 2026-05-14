# Hot Beans Web

This project is made with [Nuxt](https://nuxt.com), which is a full-stack Vue framework for creating functional and fast web apps.
The project uses [Nuxt UI](https://ui.nuxt.com) for most of its functional UI to provide highly accessible (based on [Reka UI](https://reka-ui.com)) and nice-looking components, saving time and passively helping users.
It also uses [maska](https://www.npmjs.com/package/maska) in [app/components/PhoneInput.vue](app/components/PhoneInput.vue) along with Nuxt's Input component to provide easy input masking.

## Setup
This project is intended to be used with [Bun](https://bun.sh/).

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```
You can now access the website at http://localhost:3000.

## Building
```bash

# Build for production
bun run build

# Locally preview production build
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
