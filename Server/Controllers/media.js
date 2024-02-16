//Media Model for CRUD
let Media = require('../Models/media');

let index = async(req,res,next)=>{
    //fetch all media docs
    let media = await Media.find();
    console.log(media);
    res.render('media/index', {
        title: 'Media Library',
        media:media
    });
};

let displayCreateForm = async(req,res,next)=>{
    //fetch all media docs
    let media = await Media.find();
    console.log(media);
    res.render('media/create', {
        title: 'Media Library',
        media:media
    });
};

let createMedia = async(req,res,next)=>{
    // save new media to DB
    await Media.create(req.body);

    //redirect
    res.redirect('/media');

};

// make public
module.exports = {
    index,
    displayCreateForm,
    createMedia,
};

