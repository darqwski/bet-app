//This is minimal server implementation to host react app
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/races/:raceId', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'races.html'));
});

app.listen(3000);

console.log('Server is running on http://localhost:3000, ctrl+c to stop it');