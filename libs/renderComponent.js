'use strict';

const riot = require('riot');
const _ = require('lodash');
const fs = require('fs');

function renderFullPage(html, tagName, props, script, title) {

    return `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            ${html}
            <script src='https://cdn.jsdelivr.net/riot/2.3/riot+compiler.min.js'></script>
            <script src='${tagName}.tag' type='riot/tag'></script>
            <script> 
                riot.mount('${tagName}', ${JSON.stringify(props)});
            </script>
            <script src="/${script}.js"></script>
        </body>
    </html>
    `;

}
module.exports =function (options) {

    let tagFilenames  = fs.readdirSync(options.path);

    _.each(tagFilenames, filename => require(`${options.path}/${filename}`) );

    return function (req, res, next) {

        res.renderComponent = function (options) {

            let html = riot.render(options.tagName, options.props);

            res.send(renderFullPage(html, options.tagName, options.props, options.script, options.title));

        };

        next(null);

    };

};



