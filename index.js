// Developer: Chris Doucette
// Semester 3 Fullstack QAP 2
// Completed: Saturday, May 27, 2022

const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {

    //Concatonating the path
    let path = './views/'

    //Switch statment to route to the correct path
    switch (req.url) {
        case '/':
            path += 'index.html';
            routes.indexPage(path, res, req.url);
            break;
        case '/about':
            path += 'about.html'
            routes.aboutPage(path, res, req.url);
            break;
        case '/subscribe':
            path += 'subscribe.html';
            routes.subscribePage(path, res, req.url);
            break;
        case '/staff':
            path += 'staff.html';
            routes.staffPage(path, res, req.url);
            break
        case '/products':
            path += 'products.html';
            routes.productsPage(path, res, req.url);
            break;
        case '/order-now':
            // Redirect from depracated order-now page
            path = './views/orders.html';
            res.statusCode = 301;
            routes.ordersPage(path, res, req.url);
            break;
        case '/orders':
            path += 'orders.html';
            routes.ordersPage(path, res, req.url);
            break;
        case '/contact':
            // console.log('here' + ' ' + path);
            path += 'contact.html';
            routes.contactPage(path, res, req.url);
            break;
        case '/403':
            // testing if code works for statusCode = 403
            res.statusCode = 403;
            break;
        case '/408':
            // testing if code works for statusCode = 408
            res.statusCode = 408;
            break;
        case '/500':
            // testing if code works for statusCode = 500
            res.statusCode = 500;
            break;
        case '/502':
            // testing if code works for statusCode = 502
            res.statusCode = 502;
            break;
        case '/504':
            // testing if code works for statusCode = 504
            res.statusCode = 504;
            break;
        case '/viewed-items':
            // Setting cookie when items are added to cart.
            res.setHeader('Set-cookie', 'item=Book of Node');
            res.end('Book of Node was visited');
            break;
        default:
            path += '404.html';
            routes.fourofourPage(path, res, req.url);
            break;
    }

        // Checking for specific status codes and loading correct pages to respod:
    switch (res.statusCode) {
        case 403:
            path += '403.html';
            routes.fourothreePage(path, res, req.url);
            break;
        case 408:
            path += '408.html';
            routes.fouroeightPage(path, res, req.url);
            break;
        case 500:
            path += '500.html';
            routes.fiveooPage(path, res, req.url);
            break;
        case 502:
            path += '502.html';
            routes.fiveotwoPage(path, res, req.url);
            break;
        case 504:
            path += '504.html';
            routes.fiveofourPage(path, res, req.url);
            break;
    }
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
})