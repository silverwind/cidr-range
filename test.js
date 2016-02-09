"use strict";

var assert = require("assert");
var cr = require("./");

it("should return correct amount of addresses", function() {
  assert(cr("1.2.3.4/30").length === 4);
  assert(cr("1.2.3.4/24").length === 256);
  assert(cr("1.2.3.4/20").length === 4096);
  assert(cr("255.255.255.255/32").length === 1);
  assert(cr("1.2.3.4/30", {onlyHosts: true}).length === 2);
  assert(cr("1.2.3.4/29", {onlyHosts: true}).length === 6);
});

it("should return correct addresses", function() {
  assert(cr("255.255.255.255/24")[0] === "255.255.255.0");
  assert(cr("255.255.255.255/24")[255] === "255.255.255.255");
  assert(cr("0.0.0.0/16")[0] === "0.0.0.0");
  assert(cr("0.0.0.0/16")[255] === "0.0.0.255");
  assert(cr("1.2.3.4/30", {onlyHosts: true})[0] === "1.2.3.5");
});
