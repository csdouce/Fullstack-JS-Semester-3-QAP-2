// Defining required files
const fs = require('fs');
const events = require('./events')

// Seperate functions for each page in views 
// Index function is first / then ordered alphabetically for all valid pages
function indexPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'index', 'info', res.statusCode, reqUrl, 'Home page visited');
    displayPages(path, res);
}

function aboutPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'about', 'info', res.statusCode, reqUrl,  'About page visited');
    displayPages(path, res);
}

function contactPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'contact', 'info', res.statusCode, reqUrl, 'Contact page visited');
    // events.myEmitter.emit('route', 'contact', 'info', res.statusCode, reqUrl, 'Contact page visited');
    displayPages(path, res);
}

function ordersPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'orders', 'info', res.statusCode, reqUrl, 'Orders page visited');
    displayPages(path, res);
}

function productsPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'products', 'info', res.statusCode, reqUrl, 'Products page visited');
    displayPages(path, res);
}

function staffPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'staff', 'info', res.statusCode, reqUrl, 'Staff page visited');
    displayPages(path, res);
}

function subscribePage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('route', 'subscribe', 'info', res.statusCode, reqUrl, 'Subcribe page visited');
    displayPages(path, res);
}

// Error pages to display what http error code was returned.
// Ordered by number of the error (ex 403, 404, 408 etc)
function fourothreePage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('statusCodeError', '403', 'info', res.statusCode, reqUrl, '403 page loaded when user tried to visit a page that the client does not have access rights to content');
    displayPages(path, res);
}

function fourofourPage(path, res, reqUrl) {
    res.statusCode = 404;
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('statusCodeError', '404', 'info', res.statusCode, reqUrl, "404 page loaded when user tried to visit a page that didn't exist");
    displayPages(path, res);

}

function fouroeightPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('statusCodeError', '408', 'info', res.statusCode, reqUrl, "408 page loaded when user request timed out");
    displayPages(path, res);

}

function fiveooPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('statusCodeError', '500', 'info', res.statusCode, reqUrl, "500 page loaded when user recieved Internal Server Error");
    displayPages(path, res);

}

function fiveotwoPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('statusCodeError', '502', 'info', res.statusCode, reqUrl, "502 page loaded when user recieved Bad Gateway Error");
    displayPages(path, res);

}

function fiveofourPage(path, res, reqUrl) {
    //Emitting event route to trigger the event listener
    events.myEmitter.emit('statusCodeError', '504', 'info', res.statusCode, reqUrl, "504 page loaded when user recieved Gateway Timeout Error");
    displayPages(path, res);
}

// reading and writing html files
function displayPages(path, res) {
    fs.readFile(path, function (err, data) {
        // Handling any errors by console logging for now
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.writeHead(res.statusCode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    })
}

module.exports = {
    indexPage,
    aboutPage,
    contactPage,
    ordersPage,
    productsPage,
    staffPage,
    subscribePage,
    fourothreePage,
    fourofourPage,
    fouroeightPage,
    fiveooPage,
    fiveotwoPage,
    fiveofourPage,
}