const path = require('path');

module.exports = (app) => {
    app.use('/favicon', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/others/favicon.png'), {
            headers: { 'Content-Type': 'image/png' },
        });
    });

    app.use('js/tsparticles.js', (req, res) => {
        res.sendFile(path.join('tsparticles.js'), {
            headers: { 'Content-Type': 'text/javascript' },
        });
    });
};