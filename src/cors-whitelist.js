'use strict';

const whitelist = ['http://localhost:3000', 'https://levi-benrinote-app.now.sh'];

const originGenerator = function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
    } else {
        const error = new Error('Access denied');
        error.type = 'CORS';
        callback(error);
    }
};

module.exports = originGenerator;