const User = require('../models/user.js')

module.exports.signForm = (req, res) => {
    res.render('user/signup.ejs')
}

module.exports.signUp = async (req, res, next) => {
  try {
    let { email, username, password } = req.body;
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      req.flash('error', 'Email already exists.');
      return res.redirect('/signup'); // <-- Add return here
    }
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', 'Welcome to Wonderlust!');
      return res.redirect('/listing');
    });
  } catch (e) {
    req.flash('error', e.message);
    return res.redirect('/signup');
  }
}

module.exports.logInForm = (req, res) => {
    res.render('user/login.ejs')
}

module.exports.logIn = async (req, res) => {
    req.flash('success','Welcome to Wonderlust.')
    let redirectUrl = res.locals.redirectUrl || '/listing'
    res.redirect(redirectUrl)
}

module.exports.logOut = (req,res,next) =>{
    req.logout((err) =>{
        if(err){
            return next(err)
        }
        req.flash('success', 'You are Logged Out!')
        res.redirect('/listing')
    })
}