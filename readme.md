# ripemd-regex [![Build Status](https://travis-ci.org/k4m4/ripemd-regex.svg?branch=master)](https://travis-ci.org/k4m4/ripemd-regex) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Regular expression for matching RIPEMD hashes in strings.


## Install

```
~ ❯❯❯ npm install ripemd-regex
```


## Usage

```js
const ripemdRegex = require('ripemd-regex');

ripemdRegex().test('nodejsrocks 744fdac358014a96aedd7e87150c5a5e04a13001');
//=> true

ripemdRegex({exact: true}).test('nodejsrocks 744fdac358014a96aedd7e87150c5a5e04a13001 foo');
//=> false

ripemdRegex({exact: true}).test('744fdac358014a96aedd7e87150c5a5e04a13001');
//=> true

ripemdRegex.version(128, {exact: true}).test('3edc724c455361be0a366c838e7d2434');
//=> true

ripemdRegex.version(320, {exact: true}).test('744fdac358014a96aedd7e87150c5a5e04a13001');
//=> false

'nodejsrocks 	744fdac358014a96aedd7e87150c5a5e04a13001 rainbow f4971074a8da200c122c04bc4e0fa96066913d6f38d3397eb61a7341078cd4841386e159993826af'.match(ripemdRegex());
//=> ['744fdac358014a96aedd7e87150c5a5e04a13001','f4971074a8da200c122c04bc4e0fa96066913d6f38d3397eb61a7341078cd4841386e159993826af']
```


## API

### ripemdRegex([options])

Returns a regex for matching RIPEMD hashes.

### ripemdRegex.version([version], [options])

Returns a regex for matching specific RIPEMD version hashes.

#### version

Type: `integer`<br>
Supported Versions: `128`, `160`, `256`, `320`

Match a specific version of RIPEMD.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any RIPEMD hash in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is a RIPEMD hash.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)