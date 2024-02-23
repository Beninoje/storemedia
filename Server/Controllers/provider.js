//Media Model for CRUD
let Provider = require('../Models/provider');

let index = async(req,res,next)=>{
    //fetch all media docs
    let provider = await Provider.find();
    console.log(provider);
    res.render('provider/index', {
        title: 'Provider Library',
        provider:provider
    });
};

let displayCreateForm = async(req,res,next)=>{
    //fetch all media docs
    let provider = await Provider.find();
    console.log(provider);
    res.render('provider/create', {
        title: 'Provider Library',
        provider:provider
    });
};

let createProvider = async(req,res,next)=>{
    // save new media to DB
    await Provider.create(req.body);

    //redirect
    res.redirect('/provider');

};
let displayEditForm = async(req,res,next)=>{

    let provider = await Provider.findById(req.params._id);
    console.log(provider)
    res.render('provider/edit', { 
        title: 'Update Provider',
        provider: provider
    });
};

let updateProvider = async(req,res,next)=>{

    let provider = await Provider.findByIdAndUpdate(req.params._id, req.body);
    
    //redirect
    res.redirect('/provider');
};
// make public
module.exports = {
    index,
    displayCreateForm,
    createProvider,
    displayEditForm,
    updateProvider,

};

