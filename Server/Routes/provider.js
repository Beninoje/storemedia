const express = require('express');
const router = express.Router();

const providerController = require('../Controllers/provider');

//! GET: default route
router.get('/',(req,res,next) => {
    providerController.index(req, res, next);
});

//! GET: pProvider/create => display black form
router.get('/create',(req,res,next) => {
    providerController.displayCreateForm(req, res, next);
});

//! POST: /provider/create => process form submission for creating
router.post('/create',(req,res,next) => {
    providerController.createProvider(req, res, next);
});

//! GET: /provider/create => process form submission for edit
router.get('/edit/:_id',(req,res,next) => {
    providerController.displayEditForm(req, res, next);
});

//! POST: /provider/edit/abc123 => process form submission for updating
router.post('/edit/:_id',(req,res,next) => {
    providerController.updateProvider(req, res, next);
});
module.exports = router;