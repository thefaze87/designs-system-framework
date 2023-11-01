/**
 *
 * This is our refined and refactored new build css file that contains the build tasks for
 * each of our framework pieces as well as the project build
 *      (temporarily contained here due to the current build environment and will be refactored out when it is split from this mock framework build)
 *
 **/
const path = require('../../paths.js');

// Require Gulp
const gulp = require('gulp');

// Load Plugins

const rename = require('gulp-rename'); // rename file
const replace = require('gulp-replace'); // replace (used for string / regex replace)
const sourcemaps = require('gulp-sourcemaps'); // build source maps
const sass = require('gulp-sass')(require('sass')); // uses latest dart sass
const autoprefixer = require('gulp-autoprefixer'); // autoprefixer
const cleanCss = require('gulp-clean-css'); // minification
const args = require('yargs').argv; // get flag passed as arg in gulp
const gulpif = require('gulp-if'); // gulp if

// Set variable if it's production
const isDev = args.env === 'dev';
const noMinify = args.nominify === 'true' ? true : false;

// Build Core Function
const buildCore = () => {
	return gulp
		.src(path.to.sass.core)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.coreDestination));
};

// Build Components Function
const buildComponents = () => {
	return gulp
		.src(path.to.sass.components)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.componentsDestination));
};

// Build Utilities Function
const buildUtilities = () => {
	return gulp
		.src(path.to.sass.utilities)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.utilitiesDestination));
};

// Build Layouts Function
const buildLayouts = () => {
	return gulp
		.src(path.to.sass.layouts)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.layoutsDestination));
};

// Build Templates Function
const buildTemplates = () => {
	return gulp
		.src(path.to.sass.templates)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.templatesDestination));
};

// Build Responsive Function
const buildResponsive = () => {
	return gulp
		.src(path.to.sass.responsive)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.responsiveDestination));
};

// Build Responsive Function
const buildPrint = () => {
	return gulp
		.src(path.to.sass.print)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.printDestination));
};

// Build Templates Function
const buildAll = () => {
	return gulp
		.src(path.to.sass.all)
		.pipe(gulpif(isDev, sourcemaps.init())) // if isDev init our sourcemaps
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['> 1%'],
			}),
		)
		.pipe(replace(/\/\*\sprettier-ignore\s\*\//g, '\r\n')) // find prettier ignore comments and replace with empty string/new line
		.pipe(gulpif(!noMinify, cleanCss())) // minify our css build
		.pipe(rename('styles.min.css')) // rename to min.css
		.pipe(gulpif(isDev, sourcemaps.write('.'))) // if isDev write our source maps
		.pipe(gulp.dest(path.to.sass.distDestination));
};

module.exports = {
	buildCore,
	buildComponents,
	buildUtilities,
	buildLayouts,
	buildTemplates,
	buildResponsive,
	buildPrint,
	buildAll,
};
