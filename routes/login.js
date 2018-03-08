const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/login', (req,res) => {
  res.render('login', {message: null});
})

router.post("/login", (req,res) => {
  User.findOne({email: req.body.email, password: req.body.password}, (err,user) => {
    if (err) {
      console.log(err);
    } else if (user){
      req.session.name = user.name;
      req.session.email = user.email;
      res.redirect("/");
    } else {
      res.send('invalid');
    }
  })
});

module.exports = router;
