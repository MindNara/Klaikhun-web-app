const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')))

const hotels = require('../server/routes/hotel')

app.use(hotels.router)

app.listen(3000, () => {
    console.log('Start server at http://localhost:3000')
})