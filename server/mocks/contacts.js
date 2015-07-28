module.exports = function(app) {
  var express = require('express');
  var contactsRouter = express.Router();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  var nedb = require('nedb');
  var contactDB = new nedb({ filename : 'contacts', autoload: true});

  contactsRouter.get('/', function(req, res) {
    contactDB.find(req.query).exec(function(error,contacts){
      res.send({
        'contacts': contacts
      });
    });
  });

  contactsRouter.post('/', function(req, res) {
    contactDB.find({}).sort({id: -1}).limit(1).exec(function(err, contacts){
      var body = req.body;
      if(contacts.length != 0)
        req.body.contact.id = contacts[0].id + 1;
      else
        req.body.contact.id = 1;

      contactDB.insert(req.body.contact, function(err, newContact){
        res.status(201);
        res.send(
          JSON.stringify(
          {
            contact: newContact
          }));
      });
    })
  });

  contactsRouter.get('/:id', function(req, res) {
    res.send({
      'contacts': {
        id: req.params.id
      }
    });
  });

  contactsRouter.put('/:id', function(req, res) {
    res.send({
      'contacts': {
        id: req.params.id
      }
    });
  });

  contactsRouter.delete('/:id', function(req, res) {
    contactDB.find({id: req.params.id}).exec(function(err, contact){
      contactDB.remove({id: req.params.id}, function(err, numRemoved){
        console.log(req.params.id + " has been removed");
      })
    });
  });

  app.use('/api/contacts', contactsRouter);
};
