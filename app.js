const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, ()=>{
	 console.log(`App is Live on Port ${PORT}!`)
})