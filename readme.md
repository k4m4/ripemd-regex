# ripemd-regex [![Build Status](https://travis-ci.org/k4m4/ripemd-regex.svg?branch=master)](https://travis-ci.org/k4m4/ripemd-regex)

> Regular expression for matching RIPEMD hashes in strings.


## Install

```
~ ❯❯❯ npm install ripemd-regex
```


## Usage

```js
const ripemd = require('ripemd-regex');

ripemd().test('nodejsrocks 744fdac358014a96aedd7e87150c5a5e04a13001');
//=> true

ripemd({exact: true}).test('nodejsrocks 744fdac358014a96aedd7e87150c5a5e04a13001 foo');
//=> false

ripemd({exact: true}).test('744fdac358014a96aedd7e87150c5a5e04a13001');
//=> true

ripemd.version(128, {exact: true}).test('3edc724c455361be0a366c838e7d2434');
//=> true

ripemd.version(320, {exact: true}).test('744fdac358014a96aedd7e87150c5a5e04a13001');
//=> false

'nodejsrocks 	744fdac358014a96aedd7e87150c5a5e04a13001 rainbow f4971074a8da200c122c04bc4e0fa96066913d6f38d3397eb61a7341078cd4841386e159993826af'.match(ripemd());
//=> ['744fdac358014a96aedd7e87150c5a5e04a13001','f4971074a8da200c122c04bc4e0fa96066913d6f38d3397eb61a7341078cd4841386e159993826af']
```


## API

### ripemd([options])

Returns a regex for matching RIPEMD hashes.

### ripemd.version([version], [options])

Returns a regex for matching specific RIPEMD version hashes.

#### version

Type: `integer`<br>
Supported Versions: `1`, `224`, `256`, `384`, `512`

Match a specific version of RIPEMD.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any RIPEMD hash in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is a RIPEMD hash.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)