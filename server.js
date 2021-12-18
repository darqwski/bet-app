//This is minimal server implementation to host react app
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);

console.log('Server is running on http://localhost:3000, ctrl+c to stop it');