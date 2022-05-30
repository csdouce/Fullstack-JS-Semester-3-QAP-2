//Defining required files
const fs = require('fs');
// define/extend an EventEmitter class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter { };

// initialize a new emitter object
const myEmitter = new MyEmitter();

// I am writing to the log (routeLogs) every time one of my routes are visited successfully, and redirects.
// Writing the following data - date/time, statusCode, route visited (page loaded), route requested and a message
// Adding listener to write the route and date data
myEmitter.on('route', (route, level, statusCode, reqUrl, msg) => {
    const date = new Date();
    if (level === 'error') {
        //writing contect to variable
        const content = date.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + statusCode + ' * the ' + route + ' * ' + reqUrl + ' * ' + msg + '\n';
        // writing required information to routeLogs.txt file
        fs.appendFile('./logs/errorLog.txt', content, err => {
            if (err) {
                console.log(err);
            }
            // file written successfully
            console.log(`Written successfully to errorLog with StatusCode: ${statusCode} and Message: ${msg}`);
        });
    } else {
        //writing contect to variable
        const content = date.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + statusCode + ' * ' + route + '.html * ' + reqUrl + ' * ' + msg + '\n';
        // writing required information to routeLogs.txt file
        fs.appendFile('./logs/routeLogs.txt', content, err => {
            if (err) {
                console.log(err);
            }
            // file written successfully
            console.log(`Written successfully to routeLogs with StatusCode: ${statusCode} and Message: ${msg}`);
        });
    }
});

// I am writing to the log (statusCodeErrorsLog) every time there are HTTP statusCode errors.
// Writing the following data - date/time, statusCode, route visited (page loaded), route requested and a message
// Adding listener to write the route and date data
myEmitter.on('statusCodeError', (route, level, statusCode, reqUrl, msg) => {
    const date = new Date();
    if (level === 'error') {
        //writing contect to variable
        const content = date.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + statusCode + ' * the ' + route + ' * ' + reqUrl + ' * ' + msg + '\n';
        // writing required information to routeLogs.txt file
        fs.appendFile('./logs/errorLog.txt', content, err => {
            if (err) {
                console.log(err);
            }
            // file written successfully
            console.log(`Written successfully to errorLog with StatusCode: ${statusCode} and Message: ${msg}`);
        });
    } else {
        //writing contect to variable
        const content = date.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + statusCode + ' * ' + route + '.html * ' + reqUrl + ' * ' + msg + '\n';
        // writing required information to routeLogs.txt file
        fs.appendFile('./logs/statusCodeErrorsLog.txt', content, err => {
            if (err) {
                console.log(err);
            }
            // file written successfully
            console.log(`Written successfully to StatusCodeErrorsLog with StatusCode: ${statusCode} and Message: ${msg}`);
        });       
    }
})

module.exports = {
    myEmitter,
}