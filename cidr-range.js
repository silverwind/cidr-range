"use strict";

const ip = require("ip");

module.exports = function cidrRange(cidr, opts) {
  if (typeof cidr !== "string") {
    throw new Error("Expected a string");
  }

  if (!opts) {
    opts = {};
  }

  const range = ip.cidrSubnet(cidr);
  const start = ip.toLong(range.networkAddress);
  const end = ip.toLong(range.broadcastAddress);
  const out = [];

  for (let i = start; i <= end; i++) {
    out.push(ip.fromLong(i));
  }

  if (opts.onlyHosts && range.subnetMaskLength <= 30) {
    out.splice(0, 1);
    out.splice(out.length - 1, 1);
  }

  return out;
};
