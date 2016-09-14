# vdt loader for webpack

## Installation

```npm
npm install vdt-loader --save-dev
```

## Usage

```js
require('vdt?noWith!./file.vdt');
```

Alternately, set this in config file.

```js
module: {
    loaders: [
        test: /\.vdt$/,
        loader: 'vdt-loader?noWith&delimiters={{}}'
    ]
}
```

## Querystring

[Vdt options](https://github.com/Javey/vdt.js#vdtsource-options)

You can also pass querystring like below

```js
'vdt-loader?options=' + encodeURIComponent(JSON.stringify({
    noWith: true,
    delimiters: ['{{', '}}']
}))
```
