
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
  res.render('index', {
      title: 'VeggiMedia',
      page: 'home', 
      user: req.user
    });
}
function DisplayAbout(req, res, next) 
{
  let date = new Date();

  res.render('about', {
    title: 'About',
    date: date,
    user: req.user
  });
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

  