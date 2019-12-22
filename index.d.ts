declare namespace ripemd {
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

declare const ripemd: {
	/**
	Returns a regex for matching RIPEMD hashes.
	@example
	```
	import ripemd = require('ripemd-regex')
	ripemd().test('nodejsrocks 744fdac358014a96aedd7e87150c5a5e04a13001');
	//=> true
	```
	*/
	(options?: ripemd.Options): RegExp;

	/**
	Returns a regex for matching specific RIPEMD version hashes.
	@example
	```
	import ripemd = require('ripemd-regex')
	ripemd.version(128, {exact: true}).test('3edc724c455361be0a366c838e7d2434');
	//=> true
	```
	*/
	version(version: ripemd.Version, options?: ripemd.Options): RegExp;
}

export = ripemd;