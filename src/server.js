const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');

const methodOverride = require('method-override')

const app = express();

module.exports = app;

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', '.hbs');

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));


app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))