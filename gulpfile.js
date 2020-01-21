  var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	minicss = require('gulp-minify-css'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel');

// 开启服务器
gulp.task("webserver", () => {
	gulp.src("./src/")
		.pipe(webserver({
			open: true,
			// host: "localhost",
			host: '10.10.27.46',
			// port: 8686,
			port: '80',
			livereload: true,
			proxies: [
				{
					source: '/api', target: 'http://10.10.27.122:82'
					// source: '/api', target: 'https://0698aa.com'

				}
			]
		}))
})

// 压缩html
gulp.task('minhtml', (done) => {
	gulp.src('./src/**/*.html')
		.pipe(htmlmin({
			removeComments: true, //清除HTML注释
			collapseWhitespace: true, //压缩HTML
			collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
			removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
			removeScriptTypeAttributes: false, //删除<script>的type="text/javascript"
			removeStyleLinkTypeAttributes: true //删除<style>和<link>的type="text/css"
		}))
		.pipe(gulp.dest('dist'))
	// .pipe(connect.reload());
	done()
})

// 压缩css
gulp.task("minicss", (done) => {
	return gulp.src("./src/css/*.css")
		.pipe(minicss())
		.pipe(gulp.dest("dist/css"))
	done()
})

// 压缩js
gulp.task('minijs', (done) => {
	gulp.src('./src/js/**/*.js')
		// .pipe(babel())
		// .pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	done()
})

// 传输img
gulp.task('img', (done) => {
	gulp.src('./src/images/**/*')
		.pipe(gulp.dest('dist/images'))
	done()
})

// 传输json
gulp.task('json', (done) => {
	gulp.src('./src/json/**/*')
		.pipe(gulp.dest('dist/json'))
	done()
})

// 传输sound
gulp.task('sound', (done) => {
	gulp.src('./src/sound/**/*')
		.pipe(gulp.dest('dist/sound'))
	done()
})

// 传输font
gulp.task('fonts', (done) => {
	gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
	done()
})

// 监听
gulp.task("watch", () => {
	gulp.watch("./src/css/*.css")
	gulp.watch("./src/**/*.html")
	gulp.watch("./src/js/*.js")
})

gulp.task("default", gulp.series("webserver", "watch"))
gulp.task("build", gulp.series("minicss", "minijs", "minhtml", "img", "json", "fonts", "sound"))
