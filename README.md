# eslint-config-pineglade [![npm version](https://img.shields.io/npm/v/eslint-config-pineglade.svg)](https://www.npmjs.com/package/eslint-config-pineglade)

Набор настроек eslint по кодгайду Pineglade.

## Установка

```bash
npm i -DE eslint-config-pineglade
```

## Использование в .eslintrc

```json
{
	"extends": "pineglade"
}
```

## Использование в package.json

```json
{
  "eslint": {
    "extends": "pineglade"
  }
}
```

## Использование в gulpfile.js, webpack.config.js и т. п.

```js
const eslintConfig = require(`eslint-config-pineglade`);
```
