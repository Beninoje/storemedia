/* Example User Model */
const mongoose = require('mongoose');

//define shcema for Media object
let mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear:{
        type: Number,
        required: true
    },
    provider:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    username:{
        type:String,
        required: true
    }
    
});
let Media = mongoose.model('Media', mediaSchema);
module.exports = Media;

