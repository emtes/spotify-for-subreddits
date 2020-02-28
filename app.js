const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(expressLayouts);
app.use(express.static('views'));
app.get('/', (req, res) => res.render('layout'))

app.listen(PORT, ()=>{
	 console.log(`App is Live on Port ${PORT}!`)
})