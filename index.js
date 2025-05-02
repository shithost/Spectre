const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

const css = require('./middleware/csspaths');
const js = require('./middleware/jspaths');

css(app);
js(app);

const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { HOSTING_NAME: process.env.HOSTING_NAME });
});

app.get('/register', (req, res) => {
    res.render('register', { HOSTING_NAME: process.env.HOSTING_NAME });
});

app.listen(port, () => {
    console.log(`Spectre is LOCKED IN at http://localhost:${port}`);
});