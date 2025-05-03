const path = require('path');

module.exports = (app) => {
    app.use('/js/partical', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/js/partical.js'), {
            headers: { 'Content-Type': 'text/javascript' },
        });
    });

    app.use('/js/register', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/js/register.js'), {
            headers: { 'Content-Type': 'text/javascript' },
        });
    });

    app.use('/js/login', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/js/login.js'), {
            headers: { 'Content-Type': 'text/javascript' },
        });
    });
};