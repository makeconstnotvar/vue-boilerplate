const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    config = require('./config');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

app.use('/build',express.static(path.join(__dirname,'build')));
app.use('/libs',express.static(path.join(__dirname,'node_modules')));
app.use('/fonts',express.static(path.join(__dirname,'public/fonts')));
app.use('/scripts',express.static(path.join(__dirname,'public/scripts')));
app.use('/', (req,res,next)=>{
    res.sendFile('index.html',{root:__dirname})
});

app.set('port', process.env.PORT || config.port || '3000');

server.listen(app.get('port'), function () {
    console.log(`Тестовое приложение запущено http://localhost:${app.get('port')}`);
});