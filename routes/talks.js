var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

router.use(bodyParser.urlencoded({
      extended: true
}));

router.use(methodOverride(function(req, res){
    if(req.body && typeof req.body === 'object' && '_method' in req.body){
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}));

router.route('/')
      // Get all talks
      .get(function (req, res, next){

          // retrieve all talks from Mongo
          mongoose.model('LightningTalk').find({}, function(err, talks){
              if(err){
                return console.error(err);
              }else {
                  res.format({
                    json: function(){
                        res.json(talks);
                    }
                  });
                return talks;
              }

          });
      })
      // POST a LightningTalk
      .post(function(req, res){
        // Get values from REST call
        var topic = req.body.topic;
        var description = req.body.description;
        var presenter = req.body.presenter;
        var email = req.body.email;
        // Call to create LightningTalk in DB
        mongoose.model('LightningTalk').create({
          topic: topic,
          description: description,
          presenter: presenter,
          email: email
        }, function(err, talk){
            if(err){
              res.send('There was exception while adding talk.');
            }else {
              // LightningTalk has been created
              console.log('POST done for talks: ' + talk);
              res.format({
                json: function(){
                  res.json(talk);
                }
              });
            }
        });

      });

module.exports = router;
