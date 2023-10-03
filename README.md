# Shopify Template w/ TailwindCSS

This template is preconfigured with Webpack as a build tool and TailwindCSS.

## Installation

### Clone the repository

```bash
git@github.com:tufancal/tailwind-shopify-template.git
```

### Install dependencies

```bash
yarn install
```

### Go the theme folder

```bash
cd theme
```

### Replace the {store-name} in the makefile

```bash
pull: 
	shopify theme pull --store {store-name}
```

### Pull the theme you want to customize

```bash
make pull
```

## Dev process

### watcher

```bash
yarn dev
```

This will create a custom-develop.css and a custom-develop.js in the ./theme/assets folder which can be then added to your theme liquid.

### shopify theme serve

```bash
make serve
```

## Build process

```
yarn build
```

