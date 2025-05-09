const path = require('path');

module.exports = (app) => {
    app.use('/css/background.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/css/background.css'), {
            headers: { 'Content-Type': 'text/css' },
        });
    });

    app.use('/css/register.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/css/register.css'), {
            headers: { 'Content-Type': 'text/css' },
        });
    });

    app.use('/css/login.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/css/login.css'), {
            headers: { 'Content-Type': 'text/css' },
        });
    });

    app.use('/css/sidebar.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/css/sidebar.css'), {
            headers: { 'Content-Type': 'text/css' },
        });
    });

    app.use('/css/home.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/css/home.css'), {
            headers: { 'Content-Type': 'text/css' },
        });
    });
};