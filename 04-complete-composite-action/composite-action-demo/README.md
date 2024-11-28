# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Composite action

## Pre-requisitos
- Cuenta de GitHub
- Crear un repositorio en GitHub

## Crear un repositorio en GitHub
1. Ingresar a GitHub
2. Crear un nuevo repositorio
3. Ingresar el nombre del repositorio
4. Seleccionar la visibilidad del repositorio
5. Crear el repositorio

## Agregar el proyecto 04-complete-composite-action
Ir a la carpeta del proyecto 04-complete-composite-action y ejecutar los siguientes comandos:
```bash
git init
git add -A
git commit -m "Creando composite action completa"
git branch -M main
git remote add origin git@github.com:<OWNER>/complete-composite-action.git
git push -u origin main
```

## Crear la composite action

1. Crear una nueva carpeta llamada .github/actions/node-cd
2. Crear un archivo llamado action.yml

```yml
name: "Deployment react app"
description: "Este es un ejemplo de como crear una composite action"
inputs:
  node-version:
    description: "La versión de Node.js a usar"
    required: true
    default: "18"

runs:
  using: "composite"
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ inputs.node-version }}

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy
      run: echo "Deploying..."
```
3. Ir a la carpeta del proyecto a el archivo 04-complete-composite-action/.github/workflows/depl
```yml
...
  deploy-app:
    runs-on: ubuntu-latest
    needs: test
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Deployment app
      uses: ./.github/actions/node-cd
      with:
        node-version: ${{ vars.NODE_VERSION }}

```

4. Realizar push de los cambios es GitHub
```bash
git add .
git commit -m "Agregando composite action con deployment"
git push
```
5. Agregar github page para deplegar aplicación

- instalar github pages

```bash
npm install gh-pages --save-dev
```

- Agregar script en package.json

```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
```
- Agregar esto al composite action en el archivo node-cd/action.yml

```yml
...
  deploy-app:
    runs-on: ubuntu-latest
    needs: test
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Deployment app
      uses: ./.github/actions/node-cd
      with:
        node-version: ${{ vars.NODE_VERSION }}

   - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v4
      with:
        publish_dir: ./dist
        publish_branch: gh-pages
      env:
        GITHUB_TOKEN: ${{ inputs.BCP_TOKEN }}
```


