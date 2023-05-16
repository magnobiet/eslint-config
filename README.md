# ESLint config

An ESLint shareable config for Node, React and Next projects.


## Installation

```bash
npm install eslint @magno/eslint-config --save-dev

# or using Yarn
yarn add eslint @magno/eslint-config --dev
```

## Usage

Create a `.eslintrc.js` file in your root project directory and extend the config you want to use.

### Node

```js
module.exports = {
  extends: "@magno/eslint-config/node",
};
```

### React

```js
module.exports = {
  extends: "@magno/eslint-config/react",
};
```

### Next

```js
module.exports = {
  extends: "@magno/eslint-config/next",
};
```

### Prettier

If you would like to customize the Prettier settings, create a file named `prettier.config.js` in your root project directory. The following is an example of a configuration file that matches the default settings:

```js
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
};
```

## Contributing

1. Fork it!
2. Create your feature branch
   - `git checkout -b feature/my-new-feature`
3. Commit your changes
   - `git commit -m "feat: add some feature"`
4. Push to the branch
   - `git push origin feature/my-new-feature`
5. Submit a pull request

## Security Vulnerabilities

If you discover a security vulnerability within this project, please send an e-mail to Magno Biét via [magno.biet@gmail.com](mailto:magno.biet@gmail.com). All security vulnerabilities will be promptly addressed.

## License

This package is licensed under the [MIT license](https://license.magnobiet.com/mit/2023). Copyright © Magno Biét.
