'use strict';

const riot = require('riot');
const _ = require('lodash');
const fs = require('fs');

function renderFullPage(title, html, tagName, opts) {

    return `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            ${html}
            <script src="/libs/riot/riot.js"></script>
            <script src="/components/${tagName}.js"></script>
            <script>
               riot.mount("${tagName}", ${JSON.stringify(opts)})
            </script>
        </body>
    </html>
    `;

}
module.exports =function (options) {

    let tagFilenames  = fs.readdirSync(options.path);

    _.each(tagFilenames, filename => require(`${options.path}/${filename}`) );

    return function (req, res, next) {

        res.renderComponent = function (options) {

            let html = riot.render(options.tagName, options.opts);

            res.status(200).send(renderFullPage(options.title, html, options.tagName, options.opts));

        };

        next(null);

    };

};



