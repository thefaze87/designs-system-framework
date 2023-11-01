/**************************************************************************************************
 **
 **  Gulp File
 **  Version: 2.1.0
 **  Created: August 03, 2022
 **  Author: Mark Fasel
 **  Company: Scorpion
 **  Gulp Version: 4.0.2
 **  Gulp CLI Version: 2.3.0
 **  Updated: February 15, 2023, by Mark Fasel
 **
 **
 **************************************************************************************************/

/**
 *
 * This is our reduced gulp file and organized to move pieces to sub directories for easier management and development.
 * The file contains reference to all our gulp tasks with the require-dir package and pulls in the tasks.
 * We then set up our tasks and use series and parallel built into gulp 4 to run our specific sub tasks we created in ./gulp/tasks
 * The file is cleaner and easier to read thru and find where things are located and to expand as needed with growth.
 *
 **/

// Require Gulp
const { series, parallel } = require('gulp');

// Require our build, clean, and watch
const build = require('./gulp/tasks/build/build-css');
const clean = require('./gulp/tasks/base/clean-css');
const watcher = require('./gulp/tasks/base/watch-css');
const { cleanResponsive } = require('./gulp/tasks/base/clean-css');

// Gulp framework tasks
exports.all = series(clean.cleanAll, parallel(build.buildAll));
exports.core = series(clean.cleanCore, parallel(build.buildCore));
exports.components = series(clean.cleanComponents, parallel(build.buildComponents));
exports.utilities = series(clean.cleanUtilities, parallel(build.buildUtilities));
exports.layouts = series(clean.cleanLayouts, parallel(build.buildLayouts));
exports.templates = series(clean.cleanTemplates, parallel(build.buildTemplates));
exports.responsive = series(clean.cleanResponsive, parallel(build.buildResponsive));
exports.print = series(clean.cleanPrint, parallel(build.buildPrint));
exports.framework = series(parallel(clean.cleanCore, clean.cleanComponents, clean.cleanUtilities, clean.cleanLayouts, clean.cleanTemplates, clean.cleanResponsive, clean.cleanPrint, clean.cleanAll), parallel(build.buildCore, build.buildComponents, build.buildUtilities, build.buildLayouts, build.buildTemplates, build.buildResponsive, build.buildPrint, build.buildAll));

// Gulp watch task
exports.watchFramework = series(watcher.watchFramework);

// Gulp default task
exports.default = exports.framework;
