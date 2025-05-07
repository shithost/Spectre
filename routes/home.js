const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/home', auth, (req, res) => {
    res.render('home', { 
        HOSTING_NAME: process.env.HOSTING_NAME,
        user: req.user,
        path: req.url
    });
});

module.exports = router;