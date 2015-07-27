module.exports = function(app) {
  var express = require('express');
  var documentsRouter = express.Router();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  var nedb = require('nedb');
  var documentDB = new nedb({filename : 'documents', autoload: true});

  documentsRouter.get('/', function(req, res) {
    documentDB.find(req.query).exec(function(error,documents){
      res.send({
        'documents': documents
      });
    });
  });

  documentsRouter.post('/', function(req, res) {
    documentDB.find({}).sort({id : -1}).limit(1).exec(function(err,documents) {
      var body = req.body; 
      if(documents.length != 0)
        req.body.document.id =  documents[0].id + 1;
      else
        req.body.document.id = 1; 

      documentDB.insert(req.body.document, function(err,newDocument) {
        res.status(201);
        res.send(
          JSON.stringify(
          {
            document : newDocument
          }));
      }); 
    })
  });

  documentsRouter.get('/:id', function(req, res) {
    res.send({
      'documents': {
        id: req.params.id
      }
    });
  });

  documentsRouter.put('/:id', function(req, res) {
    res.send({
      'documents': {
        id: req.params.id
      }
    });
  });

  documentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/documents', documentsRouter);
};
