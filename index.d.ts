declare namespace ripemdRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any RIPEMD hashes in a string. Useful with `RegExp#test()` to check if a string is a RIPEMD hash.
		@default false
		*/
		readonly exact?: boolean;
	}
	/**
	Available RIPEMD versions.
	*/
	type Version = 128 | 160 | 256 | 320;
}

declare const ripemdRegex: {
	/**
	Returns a regex for matching RIPEMD hashes.
	@example
	```
	import ripemdRegex = require('ripemd-regex')
	ripemdRegex().test('nodejsrocks 744fdac358014a96aedd7e87150c5a5e04a13001');
	//=> true
	```
	*/
	(options?: ripemdRegex.Options): RegExp;

	/**
	Returns a regex for matching specific RIPEMD version hashes.
	@example
	```
	import ripemdRegex = require('ripemd-regex')
	ripemdRegex.version(128, {exact: true}).test('3edc724c455361be0a366c838e7d2434');
	//=> true
	```
	*/
	version(version: ripemdRegex.Version, options?: ripemdRegex.Options): RegExp;
}

export = ripemdRegex;