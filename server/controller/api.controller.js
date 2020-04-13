const customerDetails = require('../models/costomerDetails');

exports.label_show = (req,res,next) => {
    customerDetails.aggregate([
        {
            $geoNear: {
                near : { type: 'Point', coordinates : [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
                maxDistance : 100000,
                distanceField : "dist.calculated", 
                spherical: true,
                query:{category : req.params.label, available: true}
            }
        }
    ])
    .then((data) => res.send(data))
    .catch(next)
}