const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();

app.use(express.static('./public'))
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const PORT = 4020;

app.use('/', require('./routes/main'))

app.use('/', require('./routes/admin'))

app.listen(PORT, () => {
    console.log(`app is listening on PORT http://localhost:${PORT}`);
});
