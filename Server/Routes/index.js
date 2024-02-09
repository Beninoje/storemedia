const express = require('express');
const router = express.Router();

// import the index controller
const IndexController = require('../Controllers/index');

/* GET Default Route */
router.get('/', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET Home Page */
router.get('/home', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET About Page */
router.get('/about', (req, res, next)=>
{
    IndexController.DisplayAbout(req, res, next);
});

/* GET Contact Page */
router.get('/contact', (req, res, next)=>
{
    IndexController.DisplayContact(req, res, next);
});
/* GET Privacy Page */
router.get('/privacy', (req, res, next)=>
{
    IndexController.DisplayPrivacy(req, res, next);
});
// router.get('/register', (req, res, next)=>
// {
//     IndexController.DisplayPrivacy(req, res, next);
// });
// router.get('/login', (req, res, next)=>
// {
//     IndexController.DisplayPrivacy(req, res, next);
// });
module.exports = router;
