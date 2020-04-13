const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// create ninja Schema & model
const detailsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rating: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    
    imageURL : { type : String },

    category : { type : String },

    dist : {
        calculated : {type : Number}
    },

    geometry: GeoSchema
});

const costomer = mongoose.model('details', detailsSchema);

module.exports = costomer;