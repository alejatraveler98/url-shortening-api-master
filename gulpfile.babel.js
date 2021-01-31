// import gulp from 'gulp'
const gulp = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const concat = require('gulp-concat')

//HTML
const htmlmin = require('gulp-htmlmin')
//const { postcss } = require('cssnano')

//CSS
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

//PUG
const pug = require('gulp-pug')

//SASS
const sass = require('gulp-sass')

//Clean CSS
const clean = require('gulp-purgecss')

//Caché Bust 
const cacheBust = require('gulp-cache-bust')

//Optimazación imágenes
const imagemin = require('gulp-imagemin')

//Browser sync
const browserSync = require('browser-sync').create()

//Plumber
const plumber = require('gulp-plumber')
//const { reload } = require('browser-sync').create()

//Variables/Constantes

const production = false
const cssPuglins = [
	cssnano(),
	//autoprefixer()
]

gulp.task('html-min', () => {
	return gulp
		.src('./src/*.html')
		.pipe(plumber())
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(cacheBust({
			type: 'timestamp'
		}))
		.pipe(gulp.dest('./public'))
})

gulp.task('styles', () => {
	return gulp
		.src('./src/styles/*.css')
		.pipe(plumber())
		.pipe(postcss(cssPuglins))
		.pipe(gulp.dest('./public/styles'))
		.pipe(browserSync.stream());
})

gulp.task('babel', () => {
	return gulp
		.src('./src/js/*.js')
		.pipe(plumber())
		.pipe(concat('scripts-min.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(terser())
		.pipe(gulp.dest('./public/js'))
})

gulp.task('views', () => {
	return gulp
		.src('./src/views/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: production ? false : true
		}))
		.pipe(gulp.dest('./public'))
})

gulp.task('sass', () => {
	return gulp
		.src('./src/scss/styles.scss')
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest('./public/styles'))
		.pipe(browserSync.stream());
})

gulp.task('clean', () => {
	return gulp
		.src('./src/styles/styles.css')
		.pipe(plumber())
		.pipe(clean({
			content:['./public/*.html']
			//Comprueba en los HTML que clases se estan ocupando y cuales no 
		}))
		.pipe(gulp.dest('./public/styles'))
})

gulp.task('imgmin', () => {
	return gulp
	  .src('./src/images/*')
	  .pipe(plumber())
	  .pipe(
		imagemin([
		  imagemin.gifsicle({ interlaced: true }),
		  imagemin.mozjpeg({ quality: 30, progressive: true }),
		  imagemin.optipng({ optimizationLevel: 1 })
		])
	  )
	  .pipe(gulp.dest('./public/images'));
  });

gulp.task('default', () => {
	browserSync.init({
		server:'./public'
	})
	gulp.watch('./src/*.html', gulp.series('html-min')).on('change',browserSync.reload)	
	//gulp.watch('./src/styles/*.css', gulp.series('styles'))
	gulp.watch('./src/views/**/*.pug', gulp.series('views')).on('change',browserSync.reload)	
	gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
	gulp.watch('./src/js/*.js', gulp.series('babel')).on('change',browserSync.reload)
})

