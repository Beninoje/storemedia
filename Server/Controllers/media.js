//Media Model for CRUD
let Media = require('../Models/media');
let Provider = require('../Models/provider');
const User = require('../Models/user');

let index = async (req, res, next) => {
    // fetch all media docs 
    let media = await Media.find();
    let provider = await Provider.find();

    res.render('media/index', { 
        title: 'Media Library',
        media: media,
        provider: provider,
        user: req.user
    });
};

let displayCreateForm = async(req,res,next)=>{
    //fetch all media docs
    let media = await Media.find();
    let provider = await Provider.find();
    res.render('media/create', {
        title: 'Media Library',
        media:media,
        provider:provider,
        user:req.user
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
    let media = Media.findById(req.params._id) 

    if(media.username !== req.user.username){
        return res.redirect('/unauth');
    }
    await Media.findByIdAndDelete(req.params._id);
    //! await Media.deleteOne({_id: req.params._id});

    //redirect
    res.redirect('/media');

};
let displayEditForm = async (req, res, next) => {

    let media = await Media.findById(req.params._id);

    if(media.username !== req.user.username){
        return res.redirect('/unauth');
    }

    let provider = await Provider.find();

    res.render('media/edit', { 
        title: 'Update Media',
        media: media,
        provider:provider,
        user: req.user
    });
}

let displayDetailsMedia = async(req,res,next)=>{
    let media = await Media.findById(req.params._id);
    console.log(media)
    res.render('media/details', { 
        title: 'Details Media',
        media: media
    });
};

let updateMedia = async(req,res,next)=>{
    
    let media = await Media.findById(req.params._id);

    if(media.username !== req.user.username){
        return res.redirect('/unauth');
    }
    
    await Media.findByIdAndUpdate(req.params._id, req.body);
    
    
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

