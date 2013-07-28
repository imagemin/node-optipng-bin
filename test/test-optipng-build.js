/*global describe, it */
'use strict';

var fs = require('fs');
var exec = require('child_process').exec;
var assert = require('assert');
var binPath = require('../lib/optipng-bin.js').binPath;

describe('OptiPNG rebuild', function () {
	it('it should rebuild the optipng binaries', function (cb) {
		this.timeout(15000); // give this test time to build
		var origCTime = fs.statSync(binPath).ctime;
		exec('node build.js', {}, function (err) {
			var actualCTime = fs.statSync(binPath).ctime;
			assert(actualCTime !== origCTime);
			cb(err);
		}).path;
	});
});
