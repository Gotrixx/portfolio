/* KatBizniss
 *
 * Gulp tasks
 *
 * coded by Gotrixx
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
	image = require( "gulp-image" ),
	pug = require( "gulp-pug" ),
	sass = require( "gulp-sass" ),
	autoprefixer = require( "gulp-autoprefixer" ),
	csso = require( "gulp-csso" ),
	babel = require( "gulp-babel" );

// --- Task for images
gulp.task( "images", function() {
	gulp.src( "src/img/**" )
		.pipe( image() )
		.pipe( gulp.dest( "assets/img" ) );
} );

// --- Task for pug
gulp.task( "html", function() {
	gulp.src( "src/pug/**/*.pug" )
		.pipe( pug( {} ) )
		.pipe( gulp.dest( "." ) );
} );

// --- Task for styles
gulp.task( "css", function() {
	gulp.src( "src/sass/**/*.scss" )
		.pipe( sass().on( "error", sass.logError ) )
		.pipe( autoprefixer() )
		// .pipe( csso() )
		.pipe( gulp.dest( "assets/css" ) );
} );

// --- Task for js
gulp.task( "js", function() {
	gulp.src( "src/js/**/*.js" )
		.pipe( babel() )
		.pipe( gulp.dest( "assets/js" ) );
} );

// --- Watch tasks
gulp.task( "watch", function() {
	// gulp.watch( "src/img/**", [ "images" ] );
	// gulp.watch( "src/img/**/**", [ "images/galery" ] );
	gulp.watch( "src/pug/**/*.pug", [ "html" ] );
	gulp.watch( "src/sass/**/*.scss", [ "css" ] );
	gulp.watch( "src/js/**/*.js", [ "js" ] );
} )

// --- Aliases
gulp.task( "default", [ "images", "css", "html", "js" ] );
// gulp.task( "default", [ "css", "html"] );
gulp.task( "work", [ "default", "watch" ] );
