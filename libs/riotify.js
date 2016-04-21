'use strict';

const through = require('through');
const riot = require('riot');

module.exports = function (file, o) {

    let opts = o || {};
    let ext = opts.ext || 'tag';
    let content = '';

    return !file.match('\.' + ext + '$') ? through() : through(
        function (chunk) { // write
            content += chunk.toString();
        },
        function () { // end
            try {
                this.queue('module.exports = ' + riot.compile(content, opts));
                this.emit('end');
            } catch (e) {
                this.emit('error', e);
            }
        }
    );
};