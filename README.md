# cidr-range
[![](https://img.shields.io/npm/v/cidr-range.svg?style=flat)](https://www.npmjs.org/package/cidr-range) [![](https://img.shields.io/npm/dm/cidr-range.svg)](https://www.npmjs.org/package/cidr-range) [![](https://api.travis-ci.org/silverwind/cidr-range.svg?style=flat)](https://travis-ci.org/silverwind/cidr-range)
> Get an array of IP addresses for a given CIDR range

*Note: Archived, please migrate to [cidr-tools](https://github.com/silverwind/cidr-tools)'s `expand` method.*

## Installation
```
$ npm install --save cidr-range
```

## Example
```js
var cidrRange = require('cidr-range');

cidrRange('1.2.3.4/30');
//=> [ '1.2.3.4', '1.2.3.5', '1.2.3.6', '1.2.3.7' ]
```

## API
### cidrRange(cidr, [options])
- `cidr` {String} The IP address in CIDR notation. Required.
- `options` {Object} Options object.

#### Options
- `onlyHosts` {Boolean} Whether the network and broadcast addresses should be excluded. Only works for /30 and below. Default: `false`.

© 2015 [silverwind](https://github.com/silverwind), distributed under BSD licence
