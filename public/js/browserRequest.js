'use strict';

class BrowserRequest {

    constructor(options) {

        this.method = options.method || 'GET';
        this.json = options.json || false;
        this.contentType  = this.json ? 'application/json' : 'text/plain';

    }

    post(url, data, query) {



        return new Promise((resolve, reject) => {

            let req = new XMLHttpRequest();
            let postData =  this.json ? JSON.stringify(data) : data;

            req.open('POST', url);
            req.setRequestHeader('content-type', this.contentType);
            req.send(postData);

            req.onload = () => {

                req.status == 200 ? resolve(this.json ? JSON.parse(req.responseText) : req.responseText)
                                  : reject(Error(req.statusText));

            };

            // Handle network errors
            req.onerror = () => { reject(Error('Network Error')) };


        });

    }

}

module.exports = BrowserRequest;