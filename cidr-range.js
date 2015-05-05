"use strict";

var ip = require("ip");

module.exports = function cidrRange (cidr) {
    if (typeof cidr !== "string") {
        throw new Error("Expected a string");
    }

    var range = ip.cidrSubnet(cidr);
    var start = ip.toLong(range.networkAddress);
    var end   = ip.toLong(range.broadcastAddress);
    var out   = [];

    for (var i = start; i <= end; i++) {
        out.push(ip.fromLong(i));
    }

    return out;
};
