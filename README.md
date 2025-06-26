# WTV: __What The Vite__ : WagTail + Vite
## Integrated Vite into WagTail CMS

**Before you run the containers**
The host machine needs the following
Docker
Python
Node, npm

For Docker I used Rancher Desktop

__Virtual environment__
'python -m venv .venv'
'source .venv/bin/activate'

node 24.3
I installed with nvm 
```
brew install nvm
nvm install 24.3
nvm use 24.3
```

Set up vite
```
npm create vite@latest frontend -- --template react-ts`
cd frontent
npm install
npm run build
npm install --save-dev @types/node

### then setup manifest file
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Needed to simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/static/',  // match Django STATIC_URL if integrating
  build: {
    manifest: true,
    outDir: resolve(__dirname, '../static'), // or wherever your Django expects built assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.tsx'),
      },
    },
  },
});

```

__Optional settings for comfort__
```
cat ~/.zshrc | grep alias

alias python=python3 
alias py=python3
alias dcd='docker compose down --volumes --remove-orphans --rmi local'
alias dfmt='docker ps --format "table {{.Names}}\t{{.Status}}" --last'
alias dlog='docker compose logs'
alias ddown='docker compose down'
alias dbuild='docker compose up --build -d'
alias dce='docker compose exec'
alias dc='docker compose'
# opinionated setting. I call my containers "web" if they are web app.
alias dpm='docker compose exec web python manage.py'


```

Then you can run docker commands like so

```
dpm makemigrations 
#instead of
docker compose exec web

dc up --build -d
dc up
dc down
#instead of
docker compose up --build -d
docker compose down
docker compose up
```