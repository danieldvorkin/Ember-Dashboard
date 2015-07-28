module.exports = function(app) {
  var express = require('express');
  var rostersRouter = express.Router();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());

  var nedb = require('nedb');
  var rosterDB = new nedb({ filename : 'rosters', autoload:true});

  rostersRouter.get('/', function(req, res) {
    rosterDB.find(req.query).exec(function(error, rosters){
      res.send({
        'rosters': rosters
      });
    })
  });

  rostersRouter.post('/', function(req, res) {
    rosterDB.find({}).sort({id : -1}).limit(1).exec(function(err,rosters) {
    var body = req.body; 
    if(rosters.length != 0)
      req.body.roster.id =  rosters[0].id + 1;
    else
      req.body.roster.id = 1; 
    rosterDB.insert(req.body.roster,function(err,newRoster) {
        res.status(201);
        res.send(
        JSON.stringify(
        {
          roster : newRoster
        }));
      }); 
    })
  });

  rostersRouter.get('/:id', function(req, res) {
    res.send({
      'rosters': {
        id: req.params.id
      }
    });
  });

  rostersRouter.put('/:id', function(req, res) {
    res.send({
      'rosters': {
        id: req.params.id
      }
    });
  });

  rostersRouter.delete('/:id', function(req, res) {
    rosterDB.find({id: req.params.id}).exec(function(err, roster){
      rosterDB.remove({id: req.params.id}, function(err, numRemoved){
        console.log(req.params.id + " has been removed");
      })
    });
  });

  app.use('/api/rosters', rostersRouter);
};
