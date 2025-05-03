const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home', { HOSTING_NAME: process.env.HOSTING_NAME });
});

module.exports = router;