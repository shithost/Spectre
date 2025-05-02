const path = require('path');

module.exports = (app) => {
    app.use('/js/partical', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/js/partical.js'), {
            headers: { 'Content-Type': 'text/javascript' },
        });
    });
};