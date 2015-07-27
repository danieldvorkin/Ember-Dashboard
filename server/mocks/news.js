module.exports = function(app) {
  var express = require('express');
  var newsRouter = express.Router();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  var nedb = require('nedb');
  var newsDB = new nedb({filename : 'news', autoload: true});

  newsRouter.get('/', function(req, res) {
    newsDB.find(req.query).exec(function(error, news){
      res.send({
        'news': news
      });
    })
  });

  newsRouter.post('/', function(req, res) {
    newsDB.find({}).sort({id : -1}).limit(1).exec(function(err,news) {
    var body = req.body; 
    if(news.length != 0)
      req.body.news.id =  news[0].id + 1;
    else
      req.body.news.id = 1; 
    newsDB.insert(req.body.news,function(err,newNews) {
      res.status(201);
      res.send(
        JSON.stringify(
        {
          news : newNews
        }));
      }); 
    })
  });

  newsRouter.get('/:id', function(req, res) {
    res.send({
      'news': {
        id: req.params.id
      }
    });
  });

  newsRouter.put('/:id', function(req, res) {
    res.send({
      'news': {
        id: req.params.id
      }
    });
  });

  newsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/news', newsRouter);
};
