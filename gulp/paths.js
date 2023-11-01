/**
 *
 * This is our paths file that contains some variables and and object export of our paths
 * to be consumed in our other files
 *
 **/
const root = './';
const destination = './dist/css';

// All of our paths
module.exports = {
	to: {
		destination: destination,
		sass: {
			source: root + 'scss/**/*.scss',
			all: root + 'scss/styles.scss',
			core: root + 'scss/core.styles.scss',
			utilities: root + 'scss/utilities.styles.scss',
			components: root + 'scss/components.styles.scss',
			layouts: root + 'scss/layouts.styles.scss',
			templates: root + 'scss/templates.styles.scss',
			responsive: root + 'scss/responsive.styles.scss',
			print: root + 'scss/print.styles.scss',
			distDestination: destination + '/all/',
			coreDestination: destination + '/core/',
			utilitiesDestination: destination + '/utilities/',
			componentsDestination: destination + '/components/',
			layoutsDestination: destination + '/layouts/',
			templatesDestination: destination + '/templates/',
			responsiveDestination: destination + '/responsive/',
			printDestination: destination + '/print/',
		},
	},
};
