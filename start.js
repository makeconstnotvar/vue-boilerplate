const express = require('express'),
  Vue = require('vue'),
  helmet = require('helmet'),
  path = require('path'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  app = express(),
  http = require('http'),
  server = http.createServer(app),
  config = require('./config');

const {createBundleRenderer} = require('vue-server-renderer');
const renderer = createBundleRenderer('/build/vue-ssr-server-bundle.json', {
  runInNewContext: false,
  template: require('fs').readFileSync('./index.html', 'utf-8')
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
  let context = {
    title: 'VUE VUEX ROUTER',
    url: req.url
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Страница не найдена')
      } else {
        res.status(500).end('Внутренняя ошибка сервера')
      }
    } else {
      res.end(html)
    }
  })

});

app.set('port', process.env.PORT || config.port || '3000');

server.listen(app.get('port'), function () {
  console.log(`Тестовое приложение запущено http://localhost:${app.get('port')}`);
});