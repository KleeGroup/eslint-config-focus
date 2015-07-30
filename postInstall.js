#!/usr/bin/env node

// Dependencies
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

// Package.json
var packageJson = require('./package.json');

// Paths
var nodeModules = path.join(__dirname, 'node_modules');
var parentNodeModules = path.join(__dirname, '../../node_modules');
var parent = path.join(__dirname, '../..');


// Check if parent node modules exist, if yes we are a dependency of a parent project, so install our dependencies in the parent. #caravane
fs.exists(parentNodeModules, function(exists) {
    if (exists) { // We are a dependency. It is the castagne !!
        // Create the install string
        var installString = 'cd ' + parent + ' && npm install ';
        var dependencies = packageJson.dependencies;
        Object.keys(dependencies).map(function(dependencyKey) {
            var version = dependencies[dependencyKey];
            installString += dependencyKey + '@' + version + ' ';
        });

        // Spawn the process
        exec(installString, function(error, stdout, stderr) {
            if (error) {
                throw error;
            }
            stdout.pipe(process.stdout);
            stderr.pipe(process.stderr);
        });
    }
});
