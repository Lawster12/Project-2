const withEmail = (req, res, next) => {
  if (!req.session.email) {
    console.log("no email")
    res.redirect('/');
  } else {
    console.log("email")
    next();
  }
};

module.exports = withEmail;