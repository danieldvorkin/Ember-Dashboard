module.exports = function(app) {
  var express = require('express');
  var formsRouter = express.Router();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  var nedb = require('nedb');
  var formDB = new nedb({filename : 'forms', autoload: true});

  formsRouter.get('/', function(req, res) {
    formDB.find(req.query).exec(function(error, forms){
      res.send({
        'forms': forms
      });
    })
  });

  formsRouter.post('/', function(req, res) {
    formDB.find({}).sort({id : -1}).limit(1).exec(function(err,forms) {
    var body = req.body; 
    if(forms.length != 0)
      req.body.form.id =  forms[0].id + 1;
    else
      req.body.form.id = 1; 

    formDB.insert(req.body.form,function(err,newForm) {
      res.status(201);
      res.send(
        JSON.stringify(
        {
          form : newForm
        }));
      }); 
    })
  });

  formsRouter.get('/:id', function(req, res) {
    res.send({
      'forms': {
        id: req.params.id
      }
    });
  });

  formsRouter.put('/:id', function(req, res) {
    res.send({
      'forms': {
        id: req.params.id
      }
    });
  });

  formsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/forms', formsRouter);
};
