const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

module.exports = app;

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.render('index');
})