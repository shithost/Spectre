const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const ejs = require('ejs');
const css = require('./middleware/csspaths');
const js = require('./middleware/jspaths');
const more = require('./middleware/otherpaths');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
const mainRouter = require('./routes/index');

dotenv.config();

css(app);
js(app);
more(app);

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(mainRouter);
app.use(authRouter);
app.use(homeRouter);

app.listen(port, () => {
    console.log(`Spectre is LOCKED IN at http://localhost:${port}`);
});