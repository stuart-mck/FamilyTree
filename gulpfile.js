const gulp = require('gulp');
const ts = require('gulp-typescript');
const WEB_FILES = ['src/*.json', 'src/**/*.json', 'src/*.html', 'src/**/*.html', 'src/*.css', 'src/**/*.css'];


// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
  return gulp.src(WEB_FILES)
  .pipe(gulp.dest('dist'));
});


gulp.task('default', ['watch', 'assets']);