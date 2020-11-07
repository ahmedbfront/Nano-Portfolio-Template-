var gulp = require("gulp"),
  pug = require("gulp-pug"),
  htmlmin = require("gulp-html-minifier2"),
  sass = require("gulp-sass"),
  prefix = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  minify = require("gulp-minify"),
  imagemin = require("gulp-imagemin"),
  livereload = require("gulp-livereload");

// Task Html
gulp.task("html", function (done) {
  done();
  return (
    gulp
      .src("stage/html/index.pug")
      .pipe(pug({ pretty: true }))
      .pipe(htmlmin({ collapseWhitespace: true }))
      // .pipe(htmlmin({collapseWhitespace: true, ignorePath: 'stage/html/pug/layout' }))
      .pipe(gulp.dest("dist"))
      .pipe(livereload())
  );
});

// Task Css
gulp.task("css", function (done) {
  done();
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

// Task Javascript
gulp.task("js", function (done) {
  done();
  return gulp
    .src("stage/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

// Task Images
gulp.task("img", function (done) {
  done();
  return gulp
    .src("stage/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 40, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("dist/images"));
});

// Watch Task
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/html/**/*.pug", gulp.series("html"));
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
});

// Default Task
gulp.task("default", gulp.parallel("watch"));
