"use strict";

var ip = require("ip");

module.exports = function cidrRange (cidr, opts) {
    if (typeof cidr !== "string") {
        throw new Error("Expected a string");
    }

    if (!opts) {
        opts = {};
    }

    var range = ip.cidrSubnet(cidr);
    var start = ip.toLong(range.networkAddress);
    var end   = ip.toLong(range.broadcastAddress);
    var out   = [];

    for (var i = start; i <= end; i++) {
        out.push(ip.fromLong(i));
    }

    if (opts.onlyHosts && range.subnetMaskLength <= 30) {
        out.splice(0, 1);
        out.splice(out.length - 1, 1);
    }

    return out;
};
