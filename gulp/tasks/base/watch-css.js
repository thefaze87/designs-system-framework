/**
 *
 * This is our watch file that watches for changes in either the framework or the project
 * and runs the clean functions and build functions to re-generate the styles
 *
 **/
const gulp = require('gulp');
const path = require('../../paths.js');
const clean = require('../../tasks/base/clean-css');
const build = require('../../tasks/build/build-css');

const watchFramework = () => {
	gulp.watch([path.to.sass.source], { interval: 1000, usePolling: true }, gulp.series(clean.cleanCore, clean.cleanComponents, clean.cleanUtilities, clean.cleanLayouts, clean.cleanTemplates, clean.cleanResponsive, clean.cleanPrint, gulp.parallel(build.buildCore, build.buildComponents, build.buildUtilities, build.buildLayouts, build.buildTemplates, build.buildResponsive, build.buildPrint)));
};

module.exports = {
	watchFramework,
};
