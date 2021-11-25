'use strict';

import { paths, production } from "../gulpfile.babel";
import gulp from 'gulp';
import debug from 'gulp-debug';
import browsersync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
import gulpif from 'gulp-if';

gulp.task('images', () => {
    return gulp.src(paths.src.images)
        .pipe(gulpif(production, imagemin([
            imageminPngquant({
                speed: 5,
                quality: [0.85, 0.95]
            }),
            imageminZopfli({
                more: true
            }),
            imageminMozjpeg({
                progressive: true,
                quality: 95
            }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ])))
        .pipe(gulp.dest(paths.build.images))
        .pipe(debug({
            'title': 'Images'
        }))
        .on('end', browsersync.reload);
});