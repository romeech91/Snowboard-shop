const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger');
const cssmin = require('gulp-clean-css'); // ==gulp-minify-css
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const rimraf = require('rimraf');
const browserSync = require('browser-sync');
reload = browserSync.reload;

let path = {
	build: {
		html: 'build/',
		js: 'build/',
		css: 'build/',
		img: 'build/img',
		fonts: 'build/fonts/'
	},
	src: {
		html: 'src/*.html',
		js: 'src/index.js',
		preloader: 'src/preloader.js',
		animate: 'src/animate.css',
		slider: 'src/siema.min.js',
		wowjs: 'src/wow.min.js',
		style: 'src/main.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/**/*.js',
		style: 'src/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: '/build'
};

let config = {
	server: {
		baseDir: './build'
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: 'LIVESERVER:LOCALHOST'
};

gulp.task('html', function () {
	gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('js', () => {
	return gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(babel({presets: ['@babel/env']}))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
});

gulp.task('style', () => {
	return gulp.src(path.src.style)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});
//css min deleted
gulp.task('img', function () {
	gulp.src(path.src.img)
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 1,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

gulp.task('slider-transfer', function() {
	gulp.src('src/slick/**/*.*')
		.pipe(gulp.dest('build/slick/'))
});

gulp.task('animate-css', function () {
	gulp.src(path.src.animate)
		.pipe(gulp.dest(path.build.js))
});

gulp.task('preloader', function () {
	gulp.src(path.src.preloader)
		.pipe(gulp.dest(path.build.js))
});

gulp.task('wowjs', function () {
	gulp.src(path.src.wowjs)
		.pipe(gulp.dest(path.build.js))
});

gulp.task('build', [
	'html',
	'js',
	'style',
	'fonts',
	'img',
	'slider-transfer',
	'animate-css',
	'wowjs',
	'preloader'
]);

gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb) {
		gulp.start('html');
	});
	watch([path.watch.style], function(event, cb) {
		gulp.start('style');
	});
	watch([path.watch.js], function(event, cb) {
		gulp.start('js');
	});
	watch([path.watch.img], function(event, cb) {
		gulp.start('img');
	});
	watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts');
	});
});

gulp.task('webserver', function () {
	browserSync(config);
});

gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);