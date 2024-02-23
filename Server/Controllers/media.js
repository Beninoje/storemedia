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

let deleteMedia = async(req,res,next)=>{
    // remove the selected doc
    await Media.findByIdAndDelete(req.params._id);

    //! await Media.deleteOne({_id: req.params._id});

    //redirect
    res.redirect('/media');

};
let displayEditForm = async(req,res,next)=>{

    let media = await Media.findById(req.params._id);
    console.log(media)
    res.render('media/edit', { 
        title: 'Update Media',
        media: media
    });
};

let displayDetailsMedia = async(req,res,next)=>{

    let media = await Media.findById(req.params._id);
    console.log(media)
    res.render('media/details', { 
        title: 'Details Media',
        media: media
    });
};

let updateMedia = async(req,res,next)=>{

    let media = await Media.findByIdAndUpdate(req.params._id, req.body);
    
    //redirect
    res.redirect('/media');
};
// make public
module.exports = {
    index,
    displayCreateForm,
    createMedia,
    deleteMedia,
    displayEditForm,
    updateMedia,
    displayDetailsMedia,

};

