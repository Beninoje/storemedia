const User = require('../Models/user');

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayHome(req, res, next)
{
  /* Now Render the ejs page */
  res.render('index', {title: 'Home', page: 'home'});
}
function DisplayAbout(req, res, next)
{
  /* Now Render the ejs page */
  res.render('index', {title: 'About Us', page: 'about'});
}
function DisplayContact(req, res, next)
{
  /* Now Render the ejs page */
  res.render('index', {title: 'Contact', page: 'contact'});
}
function DisplayPrivacy(req, res, next)
{
  /* Now Render the ejs page */
  res.render('index', {title: 'Contact', page: 'privacy'});
}

module.exports = {
 DisplayHome: DisplayHome,
 DisplayAbout: DisplayAbout,
 DisplayContact: DisplayContact,
 DisplayPrivacy: DisplayPrivacy
}

  