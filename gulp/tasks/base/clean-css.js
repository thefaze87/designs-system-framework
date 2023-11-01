const path = require('../../paths.js');
const gulp = require('gulp');
const clean = require('gulp-clean');

// Clean Core Function
const cleanCore = () => {
	return gulp.src(path.to.sass.coreDestination + '*', { read: false }).pipe(clean());
};

// Clean Components Function
const cleanComponents = () => {
	return gulp.src(path.to.sass.componentsDestination + '*', { read: false }).pipe(clean());
};

// Clean Components Function
const cleanUtilities = () => {
	return gulp.src(path.to.sass.utilitiesDestination + '*', { read: false }).pipe(clean());
};

// Clean Layouts Function
const cleanLayouts = () => {
	return gulp.src(path.to.sass.layoutsDestination + '*', { read: false }).pipe(clean());
};

// Clean Templates Function
const cleanTemplates = () => {
	return gulp.src(path.to.sass.templatesDestination + '*', { read: false }).pipe(clean());
};

// Clean Responsive Function
const cleanResponsive = () => {
	return gulp.src(path.to.sass.responsiveDestination + '*', { read: false }).pipe(clean());
};

// Clean Responsive Function
const cleanPrint = () => {
	return gulp.src(path.to.sass.printDestination + '*', { read: false }).pipe(clean());
};

// Clean Core Function
const cleanAll = () => {
	return gulp.src(path.to.sass.distDestination + '*', { read: false }).pipe(clean());
};

module.exports = {
	cleanCore,
	cleanComponents,
	cleanUtilities,
	cleanLayouts,
	cleanTemplates,
	cleanResponsive,
	cleanPrint,
	cleanAll,
};
