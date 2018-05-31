"use strict";

const assert = require("assert");
const cidrRange = require(".");

assert(cidrRange("1.2.3.4/30").length === 4);
assert(cidrRange("1.2.3.4/24").length === 256);
assert(cidrRange("1.2.3.4/20").length === 4096);
assert(cidrRange("255.255.255.255/32").length === 1);
assert(cidrRange("1.2.3.4/30", {onlyHosts: true}).length === 2);
assert(cidrRange("1.2.3.4/29", {onlyHosts: true}).length === 6);
assert(cidrRange("255.255.255.255/24")[0] === "255.255.255.0");
assert(cidrRange("255.255.255.255/24")[255] === "255.255.255.255");
assert(cidrRange("0.0.0.0/16")[0] === "0.0.0.0");
assert(cidrRange("0.0.0.0/16")[255] === "0.0.0.255");
assert(cidrRange("1.2.3.4/30", {onlyHosts: true})[0] === "1.2.3.5");
