const express = require ('express');
const router = express.Router();
const costomer = require('../models/costomerDetails');
const apiController = require('../controller/api.controller');

// get a list of ninjas from the db
router.get('/details', function(req, res, next){
    /* costomer.find({}).then(function(ninjas){
        res.send(ninjas);
    }); */
    costomer.aggregate([{ $geoNear: { near: {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}, spherical: true, maxDistance: 100000, distanceField: "dist.calculated" } }])
    .then(function(results){ res.send(results); });
});

//Search by label
router.get('/details/filter/:label', apiController.label_show);

// add a new costomer to the db
router.post('/details', function(req, res, next){
    costomer.create(req.body).then(function(costomer){
        res.send(costomer);
    }).catch(next);
});

// update a costomer in the db
router.put('/details/:id', function(req, res, next){
    costomer.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        costomer.findOne({_id: req.params.id}).then(function(costomer){
            res.send(costomer);
        });
    }).catch(next);
});

// delete a costomer from the db
router.delete('/details/:id', function(req, res, next){
    costomer.findByIdAndRemove({_id: req.params.id}).then(function(costomer){
        res.send(costomer);
    }).catch(next);
});

module.exports = router;