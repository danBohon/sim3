const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );

app.use( bodyParser.json() );
// console.log('my connection', process.env.CONNECTION_STRING);
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch( error => {
    console.error('Error connecting to database', error)
});

app.use(express.static(__dirname + '/../build'));

app.post('/api/register', controller.register);
app.post('/api/login', controller.login);
app.get('/api/posts' , )





const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT} 🎃 💀 🎃`);
})
