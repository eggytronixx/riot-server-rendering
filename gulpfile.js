/**
 * Created by eggytronixx on 4/20/16.
 */

'use strict';

const _ = require('lodash');
const fs = require('fs');
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const eventStream = require('event-stream');
const riotify = require('./libs/riotify');
const babelify = require('babelify');


gulp.task('riot', () => {

    let files = fs.readdirSync('./components');

    let tasks = _.map(files, file => {

        let filepath = `./components/${file}`;

        return browserify({ entries: [filepath]})
            .transform(riotify)
            .transform(babelify, { presets: ['es2015'], extensions: ['.tag', '.js']})
            .bundle()
            .pipe(source(`${file.split('.')[0]}.js`))
            .pipe(gulp.dest('public/components'));

    });

    return eventStream.merge.apply(null, tasks);

});

gulp.task('watch', () => {

    gulp.watch('components/**/*.tag', ['riot']);

});

gulp.task('default', ['riot', 'watch']);