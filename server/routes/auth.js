const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get('/signin', function(req, res) {
    res.sendFile('signin.html', {
        root: 'public/'
    })
})

router.get('/signup', function(req, res) {
    res.sendFile('signup.html', {
        root: 'public/'
    })
})

router.post('/signin', function(req, res) {
    const userName = req.body.username
    const password = req.body.password

    User.findOne({name: userName}, function(err, foundUser) {
        if (err) {
            console.log("error")
        }
        else if (foundUser && foundUser.password === password) {
           res.sendFile('index.html', {
            root: 'public/'
           })
        } else {
            res.sendFile('disabled.html', {
                root: 'public/'
            })
        }
    })
})

router.post('/signup', function(req, res) {
    const newUser = new User({
        name: req.body.username,
        password: req.body.password
    })
    newUser.save(function(err) {
        if (err) {
            res.status(409).sendFile('409.html', {
                root: 'public/'
            })
        } else {
            res.sendFile('signin.html', {
                root: 'public/'
            })
        }
    })
})

module.exports = router