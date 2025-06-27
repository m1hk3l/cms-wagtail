# WTV: __What The Vite__ : WagTail + Vite
## Integrated Vite into WagTail CMS

**Before you run the containers**
The host machine needs the following  
- Docker
- Python
- Node, npm

For Docker I used __Rancher Desktop__

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
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Needed to simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Vite's manifest file is read by Django
//So I put it where Django has access
// My Vite project is inside django project
// So 1 level up
export default defineConfig({
  plugins: [react()],
  base: '/vite-static/',  
  build: {
    manifest: true,
    emptyOutDir: false,
    outDir: resolve(__dirname, '../vite-static'), 
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
docker compose exec web python manage.py makemigrations

dc up --build -d
dc up
dc down
#instead of
docker compose up --build -d
docker compose down
docker compose up
```

## On first run
```

docker compose up --build -d
# check the database connection
docker compose exec web python manage.py check --database default
# or if you use the awesome aliases
# dpm check --database default
If 0 issues are reported then the default configuration from
settings/base.py [DATABASE] is used to connect
dpm makemigrations
dpm migrate
# site should be running now
```