var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')
var cookieParser = require('cookie-parser');
var app = express();
var apiRouter = require('./src/mock/complain.js');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accep');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};


app.use(allowCrossDomain);


var router = express.Router();

app.use(express.static('src'));

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/usageQuestion.html', function(req, res) {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/src//html/usageQuestion.html')
});
// passengerSubmitComplete
app.get('/passengerSubmitComplete.html', function(req, res) {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/src//html/passengerSubmitComplete.html')
});
app.get('/', function(req, res) {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/src/html/index.html')
});

app.get('/passengerComplain.html', function(req, res) {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/src/html/passengerComplain.html')
});
app.get('/price.html', function(req, res) {
    res.sendFile(__dirname + '/src/html/price.html')
})

app.get('/api/complain', function(req, res) {
    res.json(apiRouter.complain)
})


// app.use(router);
// 
app.use(cookieParser());
app.post('/ds/olap/user/login', function(req, res) {
    // res.cookie('name', 'panmin');
    res.json({
        code: 0,
        msg: 'ok'
    })

});
// 

// 网站首页接受 POST 请求
// app.post('/bi/dataOverview/getMenu', function (req, res) {
//     res.send('Got a POST request');
// });

var options = {
    target: 'http://192.168.70.142:8090',
    changeOrigin: true,
}

var context = ['/bi', '/olap', '/ds'];
// if debug ,open this
if (context.length) {
    // app.use('/bi', proxyMiddleware({
    //     target: 'http://192.168.70.142:8090',
    //     changeOrigin: true,
    // }));
    app.use('/olap', proxyMiddleware({
        target: 'http://192.168.70.143:8080',
        changeOrigin: true
    }));
}

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});