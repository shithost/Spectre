const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

router.get('/register', (req, res) => {
    res.render('register', { HOSTING_NAME: process.env.HOSTING_NAME });
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const usersPath = path.join(__dirname, '../users.json');
    const data = fs.readFileSync(usersPath, 'utf8');
    let users = JSON.parse(data || '[]');

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
    }

    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password: await bcrypt.hash(password, 10)
    };

    users.push(newUser);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'User created successfully' });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const usersPath = path.join(__dirname, '../users.json');
    const data = fs.readFileSync(usersPath, 'utf8');
    const users = JSON.parse(data || '[]');

    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }

    if (!isValidPassword) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }

    res.cookie('authToken', user.id, {
        maxAge: 900000,
        httpOnly: true,
        secure: false
    });

    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;