'use strict';

const { success, failure } = require('./libs/response_lib');

const hello = async (event, context, callback) => {
    try {
        callback(null, success({ message: 'Go Serverless v1.0!' }));
    } catch (err) {
        callback(null, failure({ status: false }));
    }
};

module.exports = {
    hello
};
