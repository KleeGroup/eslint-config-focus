#!/usr/bin/env node

// Dependencies
var fs = require('fs');
var path = require('path');

// Package.json
var packageJson = require('./package.json');

// Paths
var nodeModules = path.join(__dirname, 'node_modules');
var parentNodeModules = path.join(__dirname, '../../node_modules');
var parent = path.join(__dirname, '../..');


// Check if parent node modules exist, if yes we are a dependency of a parent project, so install our dependencies in the parent. #caravane
fs.exists(parentNodeModules, function(exists) {
    if (exists) { // We are a dependency. It is the castagne !!
        var parentPackage = require(parent + '/package.json');

        // Add dependencies
        var dependencies = packageJson.dependencies;
        Object.keys(dependencies).map(function(dependencyKey) {
            var version = dependencies[dependencyKey];
            console.log('Adding ' + dependencyKey + '@' + version + ' to your package.json')
            parentPackage.dependencies[dependencyKey] = version;
        });
        try {
            fs.unlinkSync(parent + '/package.json');
            fs.writeFileSync(parent + '/package.json', JSON.stringify(parentPackage, null, 4));
            console.warn('**********************************************************************');
            console.warn('Eslint config done, please run a npm install after this one completes.');
            console.warn('**********************************************************************');
        } catch(e) {
            console.log('Failed to modify package.json :(');
        }
    }
});
