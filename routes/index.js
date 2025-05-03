const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { HOSTING_NAME: process.env.HOSTING_NAME });
});

module.exports = router;