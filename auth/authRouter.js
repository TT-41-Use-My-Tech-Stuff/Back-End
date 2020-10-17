const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/userModel');
const { validateUser } = require('../users/validateUser');
require("dotenv").config()

router.post('/register', (req, res) => {
   const credentials = req.body;

   if(validateUser(credentials)){
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    //hash the pw
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the db
        Users.add(credentials)
        .then(user => {
            res.status(201).json({ data: user });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed saving user'});
        });
   } else {
       res.status(400).json({ 
           message: 'Please provide email, username, and password' });
   };
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if(validateUser(req.body)) {
    Users.findBy({ username: username })
    .then(([user]) => {
        // comparing the hashed pw stored in db
        if(user && bcryptjs.compareSync(password, user.password)) {
            const token = getJwt(user);

            res.status(200).json({
                message: "You are now logged in",
                token
            });
        } else {
            res.status(401).json({ 
                message: "Invalid credentials"
            });
        }
    })
    .catch(err => {
        res.status(500).json({mesasge: err.message })
    });
  } else {
    res.status(400).json({ 
        message: 'Please provide username and password'
    });
  }
});

function getJwt(user) {
    const payload = {
        username: user.username
    };

    const jwtOptions = {
        expiresIn: '8h',
    }

    return jwt.sign(payload, jwtSecret, jwtOptions)
};


module.exports = router;