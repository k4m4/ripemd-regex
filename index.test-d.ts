import {expectType} from 'tsd';
import ripemdRegex = require('.');

expectType<RegExp>(ripemdRegex());
expectType<RegExp>(ripemdRegex({exact: true}));
expectType<RegExp>(ripemdRegex.version(128));
expectType<RegExp>(ripemdRegex.version(128, {exact: false}));