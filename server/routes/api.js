const express = require ('express');
const router = express.Router();
const Post = require('../models/costomerDetails');
const apiController = require('../controller/api.controller');

// get a list of ninjas from the db via lat and log
router.get('/details', function(req, res, next){
    Post.aggregate([{ $geoNear: { near: {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}, spherical: true, maxDistance: 100000, distanceField: "dist.calculated" } }])
    .then(function(results){ res.send(results); });
});

// get all details
router.get('/alldetails', function(req, res){
     Post.find({}).then(function(ninjas){
        res.send(ninjas);
    }); 
});

//Search by label
router.get('/details/filter/:label', apiController.label_show);

// add a new Post to the db
router.post('/details', function(req, res, next){
    Post.create(req.body).then(function(Post){
        res.send(Post);
    }).catch(next);
});


// add new Post to db(structured version)
router.post('/createpost',(req,res)=>{
    console.log(req.body)
    const {available,name,rating,imageURL,} = req.body 
    if(!available || !name || !rating){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    // req.user.password = undefined
    const post = new Post({
        available,
        name,
        rating,
        imageURL
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


// update a Post in the db
router.put('/details/:id', function(req, res, next){
    Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Post.findOne({_id: req.params.id}).then(function(Post){
            res.send(Post);
        });
    }).catch(next);
});


// delete a Post from the db
router.delete('/details/:id', function(req, res, next){
    Post.findByIdAndRemove({_id: req.params.id}).then(function(Post){
        res.send(Post);
    }).catch(next);
});

module.exports = router;