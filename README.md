# cidr-range [![NPM version](https://img.shields.io/npm/v/cidr-range.svg?style=flat)](https://www.npmjs.org/package/cidr-range) [![Dependency Status](http://img.shields.io/david/silverwind/cidr-range.svg?style=flat)](https://david-dm.org/silverwind/cidr-range)
> Get an array of IP addresses for a given CIDR range

## Installation
```
$ npm install --save cidr-range
```

## Example
```js
var cr = require('cidr-range');

cr('1.2.3.4/30');
//=> [ '1.2.3.4', '1.2.3.5', '1.2.3.6', '1.2.3.7' ]
```

© 2015 [silverwind](https://github.com/silverwind), distributed under BSD licence
