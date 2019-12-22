import {expectType} from 'tsd';
import ripemd = require('.');

expectType<RegExp>(ripemd());
expectType<RegExp>(ripemd({exact: true}));
expectType<RegExp>(ripemd.version(128));
expectType<RegExp>(ripemd.version(128, {exact: false}));