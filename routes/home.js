const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const path = require('path');
const fs = require('fs');

router.get('/home', auth, (req, res) => {
    // Get the users data
    const usersPath = path.join(__dirname, '../users.json');
    const data = fs.readFileSync(usersPath, 'utf8');
    const users = JSON.parse(data || '[]');
    
    const authToken = req.cookies.authToken;
    const user = users.find(u => u.id === authToken);

    res.render('home', { 
        HOSTING_NAME: process.env.HOSTING_NAME,
        user: user,
        path: req.url
    });
});

module.exports = router;