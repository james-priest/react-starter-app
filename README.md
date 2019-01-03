# React start app

This is a simple starter project for React. It provides a build/dev environment and incorporates ESLint, Airbnb, & Prettier for code quality, style, and formatting.

## Installation

I've created a set of npm scripts to install each section. Run these from terminal.

1. `npm run install-airbnb` - installs ESLint & Airbnb style guide
2. `npm run install-prettier` - installs Prettier & ESLint configs
3. `npm run install-react` - installs React and ReactDOM packages
4. `npm run install-dev-env` - installs Babel, Webpack, and loaders

<!-- ## Configuration -->

If you're using VSCode you'll need to install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

If you're using VSCode and want your code to auto-format on save then un-comment the following line within */.vscode/settings.json*.

```jsonc
{
  // "eslint.autoFixOnSave": true,
}
```

Otherwise you can open the command palette and choose "*ESLint: Fix all auto-fixable Problems*". I assigned a shortcut key for this.

## Usage

### App development
You can build your app or start a dev server for app development. Code should be written in the *app/* directory with *index.js* as the entry point.

- `npm run build` - builds your app and outputs to *dist/*
- `npm run webpack-dev-server` - builds and serves your app on *http://localhost:9000*

### Custom rules

If you want to add, remove, or modify any custom linting rules you can do this in *.eslintrc.js*.

Run the following script to test that no conflicts were introduced with the addition of new rules.

- `npm run eslint-check`