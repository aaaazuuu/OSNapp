const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/new', (req, res) => {
    res.render('new');
});

app.listen('3000', () => {
    console.log('ポート３０００で受付中');
})


