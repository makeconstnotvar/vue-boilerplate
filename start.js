const express = require('express'),
  Vue = require('vue'),
  helmet = require('helmet'),
  path = require('path'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  app = express(),
  http = require('http'),
  fs = require('fs'),
  server = http.createServer(app),
  config = require('./config');
const template = fs.readFileSync('./index.html', 'utf-8');
const bundle = require('./build/vue-ssr-server-bundle.json');
const {createBundleRenderer} = require('vue-server-renderer');
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: template
});

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/libs', express.static(path.join(__dirname, 'node_modules')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));
app.use('/config', (req, res) => {
  res.send(config.client);
});
app.use('/', (req, res, next) => {

  res.setHeader("Content-Type", "text/html");
  let context = {
    title: 'VUE VUEX ROUTER',
    url: req.url
  };

  renderer.renderToString(context, (err, html) => {
    if(err){
      if(err.code === 404){
        res.status(400).send('Not found');
      }else{
        console.log(err);
        res.status(500).send('Internal server error');
      }
    }else{
      res.send(html);
    }
  });

});

app.set('port', process.env.PORT || config.port || '3000');

server.listen(app.get('port'), function () {
  console.log(`Тестовое приложение запущено http://localhost:${app.get('port')}`);
});