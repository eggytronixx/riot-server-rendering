'use strict';

const _ = require('lodash');
const validator = require('validator');

let validatorTest = {
    boolean: validator.isBoolean,
    date: validator.isDate,
    email: validator.isEmail,
    string: _.isString,
};

class ValidateEngine {

    constructor(req) {

        this.req = req;
        this.tests = [];

    }

    pushTest(location) {

        this.tests.push({location: location});

        return this;

    }

    field(name){

        _.last(this.tests).field = name;

        return this;

    }

    is(type, errorMsg) {

        let currentTest = _.last(this.tests);

        if(currentTest.type){

            let newTest = _.clone(currentTest);

            newTest.msg = errorMsg;
            newTest.type = type;

            this.tests.push(newTest);

        } else {

            currentTest.msg = errorMsg;
            currentTest.type = type;

        }

        return this;

    }

    isOptional(type, errorMsg) {

        let currentTest = _.last(this.tests);

        if(currentTest.type){

            let newTest = _.clone(currentTest);

            newTest.msg = errorMsg;
            newTest.type = type;
            newTest.optional = true;


            this.tests.push(newTest);

        } else {

            currentTest.msg = errorMsg;
            currentTest.type = type;
            currentTest.optional = true;

        }

    }

    getTestResults() {

        return _.reduce(this.tests, (errors, test) => {

            let type = test.type;
            let value = this.req[test.location][test.field];

            if(test.optional && !value) return errors;

            if(!value)
                errors.push(_.pick(test, ['msg', 'field']));
            else if (!validatorTest[type](value))
                errors.push(_.pick(test, ['msg', 'field']));

            return errors;

        }, []);

    }

}

module.exports = function(options) {

    if(_.isObject(options) && _.isObject(options.customValidators)){

        validatorTest = _.extend({}, validatorTest, options.customValidators);

    }

    console.log(validatorTest)

    return function(req, res, next) {

        let engine = new ValidateEngine(req);

        req.check = (type, field) => engine.pushTest(type, field);
        req.validationErrors = () => engine.getTestResults();

        next(null);

    };

};
